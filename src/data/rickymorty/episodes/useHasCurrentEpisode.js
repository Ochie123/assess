import useCurrentEpisode from "./useCurrentEpisode";

function useHasCurrentEpisode() {
  return useCurrentEpisode((state) => !!state.currentId);
}

export default useHasCurrentEpisode;
