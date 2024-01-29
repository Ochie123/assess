import { useQuery, useQueryClient } from "react-query";
import { loadEpisodes } from '../api/api'
import useCurrentEpisode from "./useCurrentEpisode";


function useThisEpisode(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("", loadEpisodes);
  const onSuccess = ({ username}) =>
    queryClient.setQueryData("", (oldEpisodes) =>
      oldEpisodes.map((oldEpisode) =>
        oldEpisode.id !== id ? oldEpisode : { id}
      )
    );

  const seeEpisode = useCurrentEpisode((state) => state.seeEpisode);
  return {
    episode: data?.find((e) => e.id === id),
    seeEpisode: () => seeEpisode(id),
  };
}

export default useThisEpisode;

