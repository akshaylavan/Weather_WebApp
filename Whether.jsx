import searchIcon from "./Whether/searchIcon.png";
import clearIcon from "./Whether/clear.png";
import cloudIcon from "./Whether/cloud.png";
import drizzleIcon from "./Whether/drizzle.png";
import humidityIcon from "./Whether/humidity.png";
import snowIcon from "./Whether/snow.png";
import windIcon from "./Whether/wind.png";
import rainIcon from "./Whether/rain.png";
import { useState, useEffect } from "react";

export const WhetherDetails = ({ icon, temp, city, country, lat, log, wind, humidity }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <div className="text-center">
        <img src={icon} alt="weather icon" className="mx-auto w-24 mt-5" />
        <div className="mt-5 text-4xl font-extrabold text-gray-900">{temp}°C</div>
        <div className="mt-2 text-2xl font-bold text-blue-600">{city}</div>
        <div className="mt-1 text-lg text-gray-500">{country}</div>
        <div className="flex justify-center items-center mt-4">
          <div className="mr-6 text-lg font-medium text-gray-700">
            Latitude: <span>{lat}</span>
          </div>
          <div className="text-lg font-medium text-gray-700">
            Longitude: <span>{log}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={humidityIcon} alt="humidity" className="w-8 h-8" />
            <div className="ml-2 text-xl font-semibold">{humidity}%</div>
          </div>
          <div className="text-gray-500">Humidity</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={windIcon} alt="wind" className="w-8 h-8" />
            <div className="ml-2 text-xl font-semibold">{wind} km/h</div>
          </div>
          <div className="text-gray-500">Wind Speed</div>
        </div>
        <div className="text-center mt-4 italic font-medium text-blue-700
        "> <span className="">Developed by Akshay Lavan</span></div>
      </div>
    </div>
  );
};

export const Whether = () => {
  let api_key = 'c9b3e2685b25f588cdd8a50b1a35d05b';

  const [text, setText] = useState("LONDON");
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("LONDON");
  const [country, setCountry] = useState("IN");
  const [log, setLog] = useState(12345);
  const [lat, setLat] = useState(123);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === '404') {
        // console.error("City not Found");s
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);
      setCityNotFound(false);
    } catch (error) {
      console.log("An error occurred", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-center mt-8">
          <input 
            type="text" 
            placeholder="Search City" 
            onChange={handleCity} 
            value={text} 
            onKeyDown={handleKeyDown}
            className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            onClick={search} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <img src={searchIcon} alt="search icon" className="w-5" />
          </button>
        </div>
        <div className="mt-10">
          {loading ? (
            <div className="text-center text-2xl text-gray-700">Loading...</div>
          ) : cityNotFound ? (
            <div className="text-center text-2xl text-red-500">City Not Found</div>
          ) : (
            <WhetherDetails 
              icon={icon} 
              temp={temp} 
              city={city} 
              country={country}
              log={log} 
              lat={lat} 
              wind={wind} 
              humidity={humidity} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Whether;
