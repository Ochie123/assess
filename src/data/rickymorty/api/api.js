const URLS = {

    CHARACTERS: "https://rickandmortyapi.com/api/character/",
    CHARACTER: (id) => `https://rickandmortyapi.com/api/character/${id}`,
  
    LOCATIONS: "https://rickandmortyapi.com/api/location",
    LOCATION: (id) => `https://rickandmortyapi.com/api/location/${id}`,
  
    EPISODES: "https://rickandmortyapi.com/api/episode/",
    EPISODE: (id) => `https://rickandmortyapi.com/api/episode/${id}`,
  };
  
  const wrappedFetch = (...args) => {
    return fetch(...args).then((res) => {
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });
  };
  
  const get = (url) => wrappedFetch(url);

  const loadCharacters = () => get(URLS.CHARACTERS);
  const loadCharacter = (id) => get(URLS.CHARACTER(id));
  
  
  const loadLocations = () => get(URLS.LOCATIONS);
  const loadLocation = (id) => get(URLS.LOCATION(id));
  
  const loadEpisodes = () => get(URLS.EPISODES);
  const loadEpisode = (id) => get(URLS.EPISODE(id));
  
  export {
  
    loadCharacters,
    loadCharacter,
   
  
    loadLocations,
    loadLocation,
  
    loadEpisodes,
    loadEpisode,
  
  };
  