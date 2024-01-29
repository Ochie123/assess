import { useQuery, useQueryClient } from "react-query";
import { loadCharacter } from '../api/api'
import useCurrentCharacter from "./useCurrentCharacter";

function useThatCharacter() {
  const id = useCurrentCharacter((state) => state.currentId);
  const seeAllCharacters = useCurrentCharacter((state) => state.seeAllCharacters);


  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("characters");
  const partialCharacter = data.results.find((c) => c.id === id);
  const placeholderData = {
    ...partialCharacter,
    overview: "...",

  };
  const { data: character } = useQuery(
    ["currentCharacter", { id }],
    () => loadCharacter(id),
    { placeholderData }
  );

  return {
    character,
    seeAllCharacters,
  };
}

export default useThatCharacter;
