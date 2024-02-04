import React, { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";
import { loadCharacters } from "../../../data/rickymorty/api/api";
import { useThisCharacter } from "../../../data";

export default function Characters({ id }) {
  const { data: charactersData = { results: [] } } = useQuery(
    "results",
    loadCharacters
  );
  const { character } = useThisCharacter(id);

  const allResults = charactersData.results;

  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  });

  const filteredCharacters = allResults.filter(character => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === '') return true;
      return character[key].toLowerCase().includes(value.toLowerCase());
    });
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  
  return (
    <div className="container mt-5">
      <h2>All Characters (First Page)</h2>
      
      <div className="row row-cols-lg-4 row-cols-sm-2 g-4">
      <div>
          <label>Name:</label>
          <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
        </div>
  
        <div>
          <label>Status:</label>
          <select name="status" value={filters.status} onChange={handleInputChange}>
            <option value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        {filteredCharacters.map((character) => (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
            className="col"
          >
            <div className="mb-3">
              <img
                src={character.image}
                alt={character.name}
                className="img-fluid rounded-circle"
              />
              <Typography textColor="success.400" fontWeight="xl" my={1}>
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {character.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender: {character.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Origin: {character.origin.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {character.location.name}
              </Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
