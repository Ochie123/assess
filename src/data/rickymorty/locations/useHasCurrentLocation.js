import useCurrentLocation from "./useCurrentLocation";

function useHasCurrentLocation() {
  return useCurrentLocation((state) => !!state.currentId);
}

export default useHasCurrentLocation;
