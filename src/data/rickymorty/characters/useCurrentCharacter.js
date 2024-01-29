import {create} from "zustand";

const useCurrentCharacter = create((set) => ({
  currentId: null,
  seeCharacter: (uuid) => set(() => ({ currentId: uuid })),
  seeAllCharacters: () => set(() => ({ currentId: null })),
}));

export default useCurrentCharacter;
