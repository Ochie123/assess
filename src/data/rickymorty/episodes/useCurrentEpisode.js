import {create} from "zustand";

const useCurrentEpisode = create((set) => ({
  currentId: null,
  seeEpisode: (id) => set(() => ({ currentId: id })),
  seeAllEpisodes: () => set(() => ({ currentId: null })),
}));

export default useCurrentEpisode;
