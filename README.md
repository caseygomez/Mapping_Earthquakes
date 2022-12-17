# Mapping Earthquakes

## Overview:
Using my knowledge of JavaScript, Leaflet.js and geoJSON data, I collected earthquake data and created multiple visualizations. This project specifically identified all earthquakes over the past seven days as well as earthquakes with magnitudes greater than 4.5 and utilized LineString to display coordinates for tectonic plates. The data was then mapped using satellite, street, light and dark maps. 

------
### Resources:
* Source Code: [Challenge_Logic](NYC_CitiBike_Challenge_Starter_Code.ipynb)
* Source Data: [Earthquake USGS](https://earthquake.usgs.gov/)
* Software: [Mapbox](https://www.mapbox.com/), [Leaflet](https://leafletjs.com/)

---
### Deliverables:
- [x] Deliverable 1: Add Tectonic Plate Data
- [x] Deliverable 2: Add Major Earthquake Data
- [x] Deliverable 3: Add Additional Maps 

---
### Statistical Analysis: 
Looking at the NYC data, there is strong evidence that the CitiBike model is suitable for Des Moines, Iowa.  

Image 1: ![Checkout Times for Users](https://github.com/caseygomez/bikesharing/blob/main/Visuals/CheckoutTime:Users.png)

Image 1, Checkout Times for Users, confirms most trips last five minutes. The data also shows there are several hundred trips during the month of August that last an hour or longer.  

Image 2: ![Checkout Times by Gender](https://github.com/caseygomez/bikesharing/blob/main/Visuals/CheckoutTime:Gender.png)

Looking at image 2, Checkout Times by Gender, males average shorter rides more frequently, but females also checkout bikes often and occassionally for longer durations. With the Des Moines population growing, there is a large market in need for the bike share program. 

Image 3: ![Trips by Weekday per Hour](https://github.com/caseygomez/bikesharing/blob/main/Visuals/Weekday:Hour.png)

Creating a heatmap, image 3, Peak Riding Hours, shows there are peaks in bike check-outs around morning and evening rush hour. With the Des Moines economic growth and strong insurance business center there is evidence that employees need a traffic friendly afternative to driving to work. 

Image 4: ![Trips by Gender per Weekday](https://github.com/caseygomez/bikesharing/blob/main/Visuals/Gender:Weekday:Hour.png)

Image 4, Trips by Gender per Weekday breaks the previous heatmap down by Gender. The data shows there is an increase in rides during rush hour for all groups, however males are still the most frequent users. 

Image 5: ![User Trips by Gender](https://github.com/caseygomez/bikesharing/blob/main/Visuals/User:Gender:Weekday.png)

The data shows most users are in fact subscribers. Additionally we see there are more male subscribers than female. Offering perks for subscribers and incentives for new accounts may boost growth. 

Image 6: ![Top Starting Location](https://github.com/caseygomez/bikesharing/blob/main/Visuals/StartingLocation.png) 

Top Starting Location demonstrates bikes are most frequently checked out at popular business and tourist locations. Identifying similar locations will be profitable in Des Moines. 

Image 7: ![Bike Utilization](https://github.com/caseygomez/bikesharing/blob/main/Visuals/BikeUtilization.png)

Bike Utilization is an efficient way to see the proportion of bikes utilized. Des Moines is 88 sq mi (land), significantly smaller than New York City. That means Des Moines is potentially more accessible by bike.

---
### Results: 
For Deliverable One the tectonic plate layer group is declared (let tectPlates). The layer group reference (tectPlates) was added to the overlays object as "Tectonic Plates" so that the user can select the option in the top right corner. Using the d3.json() callback method the data has been passed into the geoJSON() layer. The style has been updated including color: "#ff0000", and line weight: 2. The layer was then added to the map tectPlates.addTo(map). 

Deliverable Two was similar, the major earthquakes layer group is declared (let majEarthquakes). The layer group reference (majEarthquakes) was added to the overlays object as "Major Earthquakes" and is now available as an option in the overlays menu. Using the d3.json() callback method the data has been passed into the geoJSON() layer. The style has been updated including setting colors based on magnitude and adjusting the radius of the earthquake marker. Additionally I used bindPopup to display "Magnitude" and "Location". 

Deliverable Three required additional tile layers, I utilized Mapbox styles "dark" and "light". They provide classic views with a clear contrast to the geoJSON data layers. 