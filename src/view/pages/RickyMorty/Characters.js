import React from "react";
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

  return (
    <div className="container mt-5">
      <h2>All Characters (First Page)</h2>
      <div className="row row-cols-lg-4 row-cols-sm-2 g-4">
        {allResults?.map((character) => (
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
