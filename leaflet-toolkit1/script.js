(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.742634, -122.485369], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([37.742634, -122.485369]).addTo(map)
    .bindPopup('The street I lived on <br> in San Francisco.')
    .openPopup();

    L.marker([37.7808819, -122.4896266]).addTo(map)
    .bindPopup('The middle school I went to.')
    .openPopup();

    L.marker([37.7752735, -122.4763292]).addTo(map)
    .bindPopup('The elementary school I went to.')
    .openPopup();

}());