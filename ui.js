export function render() {

    const load = document.querySelector("#loading");
    const err = document.querySelector("#erreur");
    const meteo = document.querySelector("#meteo-actuelle");
    const nameville = document.querySelector("#ville");
    const temp = document.querySelector("#temp");
    const desc = document.querySelector("#desc");
    const vent = document.querySelector("#vent");
    const humidite = document.querySelector("#humidite");

    const previsions = document.querySelector("#previsions");
    const cartesprev = document.querySelector("#cartes-previsions");

    load.classList.remove("hidden");

    nameville.innerHTML = ville;
    temp.innerHTML = meteoData.current_weather.temperature;
    desc.innerHTML = meteoData.current_weather.weathercode; 
    vent.innerHTML = meteoData.current_weather.windspeed;
    // humidite.innerHTML = meteoData.current_weather.

}