import React from "react"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

import { useQuery } from "react-query"

import { loadCharacters } from '../../../data/rickymorty/api/api'
import { useThisCharacter } from "../../../data"

export default function Characters({ id }) {

  const { data: charactersData = { results: [] } } = useQuery(
    "results",
    loadCharacters
  )
  const { character } = useThisCharacter(id)

  const allResults = charactersData.results

  //console.log(allResults)

  return (
    <div className="container mt-5">
      <h2>All Characters (First Page)</h2>
      {allResults?.map((character, i) => (
        <>
        <Link key={character.id} to={`/characters/${character.id}`}>
          <Typography textColor="success.400" fontWeight="xl" my={1}>
            {character?.name}
          </Typography>
        </Link>

        </>
      ))}
    </div>
  )
}