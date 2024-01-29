import {create} from "zustand";

const useCurrentLocation = create((set) => ({
  currentId: null,
  seeLocation: (id) => set(() => ({ currentId: id })),
  seeAllLocations: () => set(() => ({ currentId: null })),
}));

export default useCurrentLocation;
