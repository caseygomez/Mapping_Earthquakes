//Open frmo command line
    //python -m http.server

// Add console.log to check to see if our code is working.
console.log("multiple cities");

// Create the map object with the center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

        //Alternative setView option
        // Create the map object with a center and zoom level.
        //let map = L.map("mapid", {
            //center: [
            //40.7, -94.5
        // ],
            //zoom: 4
        //);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
    // We turn each feature into a Marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng)
      .bindPopup("<h3> Airport code: " + feature.properties.faa + "</h3> <hr><h3> Airport name: "
      + feature.properties.name + "</h3>");
    }
  }).addTo(map);

// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let graymap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
graymap.addTo(map);
