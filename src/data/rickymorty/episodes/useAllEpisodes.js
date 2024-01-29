import { useQuery } from "react-query";
import { loadEpisodes } from '../api/api'

function useAllEpisodes() {
  const { data } = useQuery("", loadEpisodes);
  console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllEpisodes;