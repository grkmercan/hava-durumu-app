import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import About from './components/About';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'd39a3cb2b011b92c97a41809748ba3b1'; 
  
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
      );
      
      if (response.data.success === false) {
        throw new Error('Şehir bulunamadı');
      }
      
      setWeatherData(response.data);
      setLoading(false);
      
     const temp = response.data.current.temperature;
     if (temp > 30) {
       document.body.className = 'very-hot';
     } else if (temp > 20) {
       document.body.className = 'warm';
     } else if (temp > 10) {
       document.body.className = 'mild';
     } else if (temp > 0) {
       document.body.className = 'cool';
     } else {
       document.body.className = 'cold';
     }
      
    } catch (err) {
      setError('Hava durumu bilgisi alınamadı. Lütfen geçerli bir şehir adı girin.');
      setWeatherData(null);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="app-container">
        <h1 className="text-center mb-4">Hava Durumu Uygulaması</h1>
        
        {showAbout ? (
          <About />
        ) : (
          <>
            <SearchBar onSearch={fetchWeatherData} />
            
            {loading && (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Yükleniyor...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {weatherData && !loading && !error && (
              <WeatherCard data={weatherData} />
            )}
          </>
        )}
        <div className="d-flex justify-content-center mt-4">
          <button 
            className="btn btn-info"
            onClick={() => setShowAbout(!showAbout)}
          >
            {showAbout ? 'Hava Durumu' : 'Hakkında'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;