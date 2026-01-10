import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

const Weather: React.FC = () => {
  const [city, setCity] = useState('Libreville');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const gabonCities = [
    'Libreville', 'Port-Gentil', 'Franceville', 'Oyem', 'Mouila', 'Lambaréné', 'Tchibanga', 'Makokou', 'Koulamoutou', 'Bitam', 'Gamba', 'Ndendé', 'Mékambo', 'Lastoursville', 'Moanda'
  ];

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError('');
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      if (!apiKey) {
        setError('Clé API météo non configurée. Veuillez ajouter VITE_WEATHER_API_KEY dans .env.local');
        setLoading(false);
        return;
      }
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`);
      setWeather(response.data);
    } catch (err) {
      console.error('Weather API Error:', err);
      setError('Erreur lors de la récupération des données météo. Vérifiez la clé API et la connexion.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-indigo/10 to-brand-cyan/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Météo au Gabon
          </h2>
          <p className="text-gray-300 text-lg">
            Découvrez la température en temps réel dans les villes du Gabon
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <label htmlFor="city-select" className="sr-only">Sélectionnez une ville</label>
            <select
              id="city-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
            >
              {gabonCities.map((cityName) => (
                <option key={cityName} value={cityName} className="bg-brand-dark">
                  {cityName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-brand-cyan text-brand-dark font-semibold rounded-lg hover:bg-brand-cyan/80 disabled:opacity-50 transition-all"
            >
              {loading ? '...' : 'Rechercher'}
            </button>
          </form>
        </div>

        {error && (
          <div className="text-center text-red-400 mb-8">
            {error}
          </div>
        )}

        {weather && (
          <div className="max-w-sm mx-auto">
            <div className="glass-card p-6 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{weather.name}</h3>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="w-16 h-16"
                />
                <span className="text-4xl font-bold text-white ml-4">
                  {Math.round(weather.main.temp)}°C
                </span>
              </div>
              <p className="text-gray-300 capitalize mb-4">
                {weather.weather[0].description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-400">
                  <span className="block text-white font-semibold">Humidité</span>
                  {weather.main.humidity}%
                </div>
                <div className="text-gray-400">
                  <span className="block text-white font-semibold">Vent</span>
                  {weather.wind.speed} m/s
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Weather;
