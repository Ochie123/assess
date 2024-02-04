import { useQuery } from "react-query";
import { loadLocations } from '../api/api'
import useCurrentLocation from "./useCurrentLocation";

function useThisLocation(id) {
  const { data } = useQuery("", loadLocations);

  const seeLocation = useCurrentLocation((state) => state.seeLocation);
  
  return {
    Location: data?.find((c) => c.id === id),
    seeLocation: () => seeLocation(id),
  };
}

export default useThisLocation;
