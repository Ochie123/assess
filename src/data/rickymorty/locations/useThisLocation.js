import { useQuery, useQueryClient } from "react-query";
import { loadLocations } from '../api/api'
import useCurrentLocation from "./useCurrentLocation";


function useThisLocation(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("", loadLocations);
  const onSuccess = ({ username}) =>
    queryClient.setQueryData("", (oldLocations) =>
      oldLocations.map((oldLocation) =>
        oldLocation.id !== id ? oldLocation : { id, username}
      )
    );

  const seeLocation = useCurrentLocation((state) => state.seeLocation);
  return {
    Location: data?.find((c) => c.id === id),
    seeLocation: () => seeLocation(id),
  };
}

export default useThisLocation;

