import { useQuery } from "react-query";
import { loadCharacters } from '../api/api'
import useCurrentCharacter from "./useCurrentCharacter";

function useThisCharacter(id) {
  //const queryClient = useQueryClient();
  const { data } = useQuery("characters", loadCharacters);

  const seeCharacter = useCurrentCharacter((state) => state.seeCharacter);
  
  return {
    character: data?.results.find((c) => c.id === id),
    seeCharacter: () => seeCharacter(id),
  };
}

export default useThisCharacter;
