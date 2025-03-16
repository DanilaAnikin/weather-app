export const fetchWeather = async (city: string): Promise<any> => {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) throw new Error('City not found');
    
    const { latitude, longitude, name } = geoData.results[0];
    
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    if (!weatherData.current_weather) throw new Error('Weather data not available');
    
    weatherData.name = name;
    
    return {
        weatherData,
        country: geoData.results[0].country,
    };
  };
  