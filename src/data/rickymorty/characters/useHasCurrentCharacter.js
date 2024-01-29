import useCurrentCharacter from "./useCurrentCharacter";

function useHasCurrentCharacter() {
  return useCurrentCharacter((state) => !!state.currentId);
}

export default useHasCurrentCharacter;
