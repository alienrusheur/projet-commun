export async function render() {

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

    nameville.innerHTML = await ville;
    temp.innerHTML = await meteoData.current.temperature_2m;
    desc.innerHTML = await meteoData.current.weathercode; 
    vent.innerHTML = await meteoData.current.windspeed_10m;
    humidite.innerHTML = await meteoData.current.relativehumidity_2m

    // cartesprev.innerHTML = await meteoData.current_weather.


}