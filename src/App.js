import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.body.className = 'default';
  }, []); 

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
     const weatherDesc = response.data.current.weather_descriptions[0].toLowerCase();
     if (weatherDesc.includes('rain') || weatherDesc.includes('drizzle')) {
       document.body.className = 'rainy';
     } else if (weatherDesc.includes('snow')) {
       document.body.className = 'snowy';
     } else if (weatherDesc.includes('cloud') || weatherDesc.includes('overcast')) {
       document.body.className = 'cloudy';
     } else if (weatherDesc.includes('sunny') || weatherDesc.includes('clear')) {
       document.body.className = 'sunny';
     } else if (weatherDesc.includes('thunder') || weatherDesc.includes('storm')) {
       document.body.className = 'stormy';
     } else if (weatherDesc.includes('mist') || weatherDesc.includes('fog')) {
       document.body.className = 'foggy';
     } else {
       document.body.className = 'default';
     }
      
    } catch (err) {
      setError('Hava durumu bilgisi alınamadı. Lütfen geçerli bir şehir adı girin.');
      setWeatherData(null);
      setLoading(false);
      document.body.className = 'default';
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