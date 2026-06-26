const Baseurl = "https://api.open-meteo.com/v1/forecast"
    + "?latitude=48.8566&longitude=2.3522"
    +
    "&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m"
    + "&daily=temperature_2m_max,temperature_2m_min,weathercode"
    + "&timezone=Europe%2FParis&forecast_days=7";

export async function fetchMeteo(ville) {

    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=1&language=fr`);
    const geoData = await geoRes.json();
    console.log(geoData)
    const { latitude, longitude } = geoData.results[0];


    const meteoRes = await fetch("https://api.open-meteo.com/v1/forecast"
    + "?latitude=48.8566&longitude=2.3522"
    +
    "&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m"
    + "&daily=temperature_2m_max,temperature_2m_min,weathercode"
    + "&timezone=Europe%2FParis&forecast_days=7");

    const meteoData = await meteoRes.json();
    console.log(meteoData)

    return meteoData.current_weather
}

fetchMeteo("Paris").then(res => console.log(res));
/* fetchMeteo("Madrid").then(res => console.log(res));
fetchMeteo("Ouarzazate").then(res => console.log(res));
fetchMeteo("Phoenix").then(res => console.log(res));
fetchMeteo("Shangai").then(res => console.log(res));
fetchMeteo("Sydney").then(res => console.log(res));
fetchMeteo("Oslo").then(res => console.log(res));
fetchMeteo("Groenland").then(res => console.log(res)); */

