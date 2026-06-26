const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchMeteo(ville) {
 
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ville)}&count=1&language=fr`
  );
  const geoData = await geoRes.json();

  if (!geoData.results?.length) {
    throw new Error(`Ville introuvable : "${ville}"`);
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const meteoRes = await fetch(
    `${BASE_URL}` +
    `?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m` +
    `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
    `&timezone=Europe%2FParis&forecast_days=7`
  );
  const meteoData = await meteoRes.json();

  return {
    ville: name,
    pays: country,
    actuel: {
      temperature: meteoData.current.temperature_2m,
      humidite: meteoData.current.relativehumidity_2m,
      vent: meteoData.current.windspeed_10m,
      code: meteoData.current.weathercode,
    },
    previsions: meteoData.daily.time.map((date, i) => ({
      date,
      max: meteoData.daily.temperature_2m_max[i],
      min: meteoData.daily.temperature_2m_min[i],
      code: meteoData.daily.weathercode[i],
    })),
  };
}

fetchMeteo("Paris").then(res => console.log(res));
fetchMeteo("Madrid").then(res => console.log(res));
fetchMeteo("Ouarzazate").then(res => console.log(res));
fetchMeteo("Phoenix").then(res => console.log(res));
fetchMeteo("Shanghai").then(res => console.log(res));
fetchMeteo("Sydney").then(res => console.log(res));
fetchMeteo("Oslo").then(res => console.log(res));
fetchMeteo("Groenland").then(res => console.log(res));