//Estableciendo punto y nivel de zoom
let map = L.map('map').setView([19.285396116439202, -99.67629348500694],15);

//Integrando mapa base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Agregando la funcionalidad para la selección de cada campus
//A través del Id de cada objeto
//En nuestro caso select-campus

document.getElementById("select-campus").addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 16);
})