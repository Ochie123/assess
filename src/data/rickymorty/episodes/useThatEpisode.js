import { useQuery, useQueryClient } from "react-query";
import { loadEpisode } from '../api/api'
import useCurrentEpisode from "./useCurrentEpisode";

function useThatEpisode() {
  const id = useCurrentEpisode((state) => state.currentId);
  const seeAllEpisodes = useCurrentEpisode((state) => state.seeAllEpisodes);


  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("episodes");
  const partialEpisode = data.results.find((e) => e.id === id);
  const placeholderData = {
    ...partialEpisode,
    overview: "...",

  };
  const { data: episode } = useQuery(
    ["currentEpisode", { id }],
    () => loadEpisode(id),
    { placeholderData }
  );

  return {
    episode,
    seeAllEpisodes,
  };
}

export default useThatEpisode;
