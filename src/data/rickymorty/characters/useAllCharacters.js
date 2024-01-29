import { useQuery } from "react-query";
import { loadCharacters } from '../api/api'

function useAllCharacters() {
  const { data } = useQuery("", loadCharacters);
  console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllCharacters;