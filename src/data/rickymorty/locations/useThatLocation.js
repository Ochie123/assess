import { useQuery, useQueryClient } from "react-query";
import { loadLocation } from '../api/api'
import useCurrentLocation from "./useCurrentLocation";

function useThatLocation() {
  const id = useCurrentLocation((state) => state.currentId);
  const seeAllLocations = useCurrentLocation((state) => state.seeAllLocations);


  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("Locations");
  const partialLocation = data.results.find((c) => c.id === id);
  const placeholderData = {
    ...partialLocation,
    overview: "...",

  };
  const { data: Location } = useQuery(
    ["currentLocation", { id }],
    () => loadLocation(id),
    { placeholderData }
  );

  return {
    Location,
    seeAllLocations,
  };
}

export default useThatLocation;
