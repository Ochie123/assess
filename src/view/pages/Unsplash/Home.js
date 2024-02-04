import React, { useState, useEffect } from 'react';
const UnsplashPhotos  = () => {
    const [filters, setFilters] = useState({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    });
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        const queryString = Object.entries(filters)
          .filter(([key, value]) => value !== '')
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
  
        const apiUrl = `https://rickandmortyapi.com/api/character/?${queryString}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        setCharacters(data.results);
        setInfo(data.info);
      };
  
      fetchData();
    }, [filters]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };
  
    return (
      <div>
        <h1>Character Filter</h1>
  
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
        </div>
  
        <div>
          <label>Status:</label>
          <select name="status" value={filters.status} onChange={handleInputChange}>
            <option value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
  
        <div>
          <label>Gender:</label>
          <select name="gender" value={filters.gender} onChange={handleInputChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
  
        <div>
          <h2>Filtered Characters</h2>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <p>Info:</p>
          <pre>{JSON.stringify(info, null, 2)}</pre>
        </div>
      </div>
    );
  };
  

export default UnsplashPhotos;
