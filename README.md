# Mapping Earthquakes

## Overview:
Using my knowledge of JavaScript, Leaflet.js and geoJSON, I collected earthquake data and created maps for efficient graphical representations of the information. This project specifically identified all earthquakes over the past seven days as well as earthquakes with magnitude greater than 4.5 and utilized LineString to display coordinates for tectonic plates. The data was then mapped using satellite, street, light and dark background maps.

------
### Resources:
* Source Code: [Challenge_Logic](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/js/challenge_logic.js)
* Source Data: [Earthquake USGS](https://earthquake.usgs.gov/), [Tectonic Plates](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
* Technology: [Mapbox](https://www.mapbox.com/), [Leaflet](https://leafletjs.com/), [D3.js](https://d3js.org/)

---
### Deliverables:
- [x] Deliverable 1: Add Tectonic Plate Data
- [x] Deliverable 2: Add Major Earthquake Data
- [x] Deliverable 3: Add Additional Maps 

---
### Visuals: 
Map 1: ![Tectonic Plates](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/light.png)

Map 1 displays tectonic plates as well as all earthquakes for past seven days with magnitude and location popup on Mapbox light background. 

Map 2: ![Major Earthquakes](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/lightmajor.png)

Map 2 displays the major earthquakes, magnitude greater than 4.5, on the Mapbox light background. 

Map 3: ![Satellite Tectonic Plates and Earthquakes](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/satellite.png)

Map 3 displays the tectonic plates and all earthquakes in past seven days on the Mapbox satellite background. 

Map 4: ![Street View](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/streets.png)

Map 4 displays the tectonic plates and all earthquakes in the past seven days on the Mapbox street background. 

Map 5: ![Dark Tectonic Plates](https://github.com/caseygomez/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/darkplates.png)

Map 5 displays the tectonic plates on Mapbox dark background. 

---
### Results: 
For Deliverable One the tectonic plate layer group is declared (let tectPlates). The layer group reference (tectPlates) was added to the overlays object as "Tectonic Plates" so that the user can select the option from the menu in the top right corner. Using the d3.json() callback method the data has been passed into the geoJSON() layer. The style has been updated including color: "#ff0000", and line weight: 2. The layer was then added to the map tectPlates.addTo(map). 

Deliverable Two was similar, the major earthquakes layer group is declared (let majEarthquakes). The layer group reference (majEarthquakes) was added to the overlays object as "Major Earthquakes" and is now available as an option in the overlays menu. Using the d3.json() callback method the data has been passed into the geoJSON() layer. The style has been updated including setting colors based on magnitude and adjusting the radius of the earthquake marker. Additionally I used bindPopup to display "Magnitude" and "Location". 

Deliverable Three required additional tile layers, I utilized Mapbox styles "dark" and "light". They provide classic views with a clear contrast to the geoJSON data layers. 
