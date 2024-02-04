import { useQuery } from "react-query";
import { loadEpisodes } from '../api/api'
import useCurrentEpisode from "./useCurrentEpisode";

function useThisEpisode(id) {
  const { data } = useQuery("", loadEpisodes);

  const seeEpisode = useCurrentEpisode((state) => state.seeEpisode);
  
  return {
    episode: data?.find((e) => e.id === id),
    seeEpisode: () => seeEpisode(id),
  };
}

export default useThisEpisode;
