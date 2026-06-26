const Baseurl = "https://api.open-meteo.com/v1/forecast";

export async function fetchMeteo(ville) {
    
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ville}&count=1&language=fr`);
    const geoData = await geoRes.json();
    const { latitude, longitude } = geoData.results[0];

    
    const meteoRes = await fetch(`${Baseurl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const meteoData = await meteoRes.json();

    return meteoData.current_weather;
}

fetchMeteo("Paris").then(res => console.log(res));
fetchMeteo("Madrid").then(res => console.log(res));
fetchMeteo("Ouarzazate").then(res => console.log(res));
fetchMeteo("Phoenix").then(res => console.log(res));
fetchMeteo("Shangai").then(res => console.log(res));
fetchMeteo("Sydney").then(res => console.log(res));
fetchMeteo("Oslo").then(res => console.log(res));
fetchMeteo("Groenland").then(res => console.log(res));

