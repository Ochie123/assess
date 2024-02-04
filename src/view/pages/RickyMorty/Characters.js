import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";
import { loadCharacters } from "../../../data/rickymorty/api/api";

export default function Characters() {
  const { data: charactersData = { results: [] } } = useQuery(
    "results",
    loadCharacters
  );
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
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Characters</h2>
      <div className='row'>
        <div className='col-md-3 col-sm-6'>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div>
            <label>Status:</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleInputChange}
            >
              <option value="">Select Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div>
            <label>Gender:</label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div>
            <label>Species:</label>
            <select
              name="species"
              value={filters.species}
              onChange={handleInputChange}
            >
              <option value="">Select Species</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
            </select>
          </div>
        </div>
      </div>

      <br />

      <div className="row row-cols-lg-4 row-cols-sm-2 g-4">
        {filteredCharacters.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`} className="col-md-3 col-sm-6">
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
