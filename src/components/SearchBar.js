import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Şehir adı girin... Örn: Dubai, Antalya, Ankara, Novosibirsk vs."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Ara
        </button>
      </div>
    </form>
  );
}

export default SearchBar;