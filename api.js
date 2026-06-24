const Baseurl = "https://api.open-meteo.com/v1/forecast";

async function fetchMeteo(ville) {
    
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=1&language=fr`);
    const geoData = await geoRes.json();
    const { latitude, longitude } = geoData.results[0];

    
    const meteoRes = await fetch(`${Baseurl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const meteoData = await meteoRes.json();

    console.log(meteoData.current_weather);
}

fetchMeteo("Paris");