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
    temp.innerHTML = meteoData.current.temperature_2m;
    desc.innerHTML = meteoData.current.weathercode; 
    vent.innerHTML = meteoData.current.windspeed_10m;
    humidite.innerHTML = meteoData.current.relativehumidity_2m

    // cartesprev.innerHTML = meteoData.current_weather.


}