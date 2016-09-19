$(function() {
    // Initialise the map and set default values
    var mapleMap = L.map('mapleMap').setView([51.379597, -2.358244], 10);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{id}/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: '256',
        accessToken: 'pk.eyJ1IjoibWF4ZzIwMyIsImEiOiJjaXRhMnM1dncwMDU5MnhwaGxzenV1M3ExIn0.dHwySLGJmJairTuzOSn49Q'
    }).addTo(mapleMap);

    var marker = L.marker([51.379597, -2.358244]).addTo(mapleMap);
});
