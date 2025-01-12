import React from 'react';

function WeatherCard({ data }) {
  const { current, location } = data;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center mb-4">
          {location.name}, {location.country}
        </h2>
        
        <div className="row">
          <div className="col-md-6 text-center mb-3">
            <img 
              src={current.weather_icons[0]} 
              alt={current.weather_descriptions[0]}
              className="mb-2"
              style={{ width: '64px', height: '64px' }}
            />
            <h3>{current.temperature}°C</h3>
            <p className="text-muted">{current.weather_descriptions[0]}</p>
          </div>
          
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-droplet-fill text-primary me-2"></i>
                Nem: {current.humidity}%
              </li>
              <li className="mb-2">
                <i className="bi bi-wind text-primary me-2"></i>
                Rüzgar: {current.wind_speed} km/s
              </li>
              <li className="mb-2">
                <i className="bi bi-compass text-primary me-2"></i>
                Basınç: {current.pressure} mb
              </li>
              <li className="mb-2">
                <i className="bi bi-eye-fill text-primary me-2"></i>
                Görüş Mesafesi: {current.visibility} km
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;