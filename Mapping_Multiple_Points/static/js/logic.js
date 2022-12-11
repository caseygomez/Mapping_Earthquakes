//Open frmo command line
    //python -m http.server

// Add console.log to check to see if our code is working.
console.log("multiple cities");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

        //Alternative setView option
        // Create the map object with a center and zoom level.
        //let map = L.map("mapid", {
            //center: [
            //40.7, -94.5
        // ],
            //zoom: 4
        //);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        fillColor:  "#ffa500",
        color: "#ffa500",
        weight: 2
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

 // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
            //mapbox/streets-v11'
            //mapbox/streets-v11
            //mapbox/outdoors-v11
            //mapbox/light-v10
            //mapbox/dark-v10
            //mapbox/satellite-v9
            //mapbox/satellite-streets-v11
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
