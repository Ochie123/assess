import { useQuery } from "react-query";
import { loadLocations } from '../api/api'

function useAllLocations() {
  const { data } = useQuery("", loadLocations);
  console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllLocations;