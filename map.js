data = d3.csv("arrival.csv").then(function(data) {
    console.log(data)
})

// d3.csv('arrival.csv').then(function(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].COUNTRY);
//         console.log(data[i].YEAR);
//         console.log(data[i].ARRIVAL);
//     }
// });

function getColor(ARRIVAL) {
    return ARRIVAL >= 50000  ? '#B10026' :
           ARRIVAL >= 20000  ? '#e31a1c' :
           ARRIVAL >= 1500  ? '#fc4e2a' :
           ARRIVAL >= 500  ? '#fd8d3c' :
           ARRIVAL >= 100  ? '#feb24c' :
                       '#fed976';
}
function createFeatures(arrivalData){
    arrivalMarkers = []
    for (var i = 0; i < arrivalData.length; i++) {
        arrivalMarkers.push(
          L.circle([arrivalData[i].geometry.coordinates[1],arrivalData[i].geometry.coordinates[0]], {
            stroke: false,
            fillOpacity: 0.75,
            color: getColor(arrivalData[i].properties.Arrival),
            fillColor: getColor(arrivalData[i].properties.Arrival),
            radius: Math.pow(arrivalData[i].properties.Arrival,3) * 1000
          }).bindPopup("<h3>" + arrivalData[i].properties.place +
          "</h3><hr>Magnitude: " + arrivalData[i].properties.Arrival +
          "<p>" + new Date(arrivalData[i].properties.time) + "</p>")
        );
      }
      createMap(arrivalMarkers);
}

function createMap(arrivalMarkers) {
    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=*******API_TOKEN_GOES_HERE********");
    var baseMaps = {
        "Dark Map": darkmap
    };
    var numberArrivals = L.layerGroup(arrivalMarkers);
    var overlayMaps = {
        "Arrivals": numberArrivals
    };
    var myMap = L.map("map", {
        center: [
          37.09, -120.105
        ],
        zoom: 4,
        layers: [darkmap, numberArrivals]
    });
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
      }).addTo(myMap);
     var legend = L.control({position: 'bottomright'});  
     legend.onAdd = function (map) {
         var div = L.DomUtil.create('div', 'info legend'),
         annualArrivals = [0, 100, 500, 1500, 20000, 50000],
         labels = [];
         div.innerHTML = "Magnitude<br>"
         for (var i = 0; i < annualArrivals.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(annualArrivals[i]) + '"></i> ' +
                annualArrivals[i] + (annualArrivals[i + 1] ? '&ndash;' + annualArrivals[i + 1] + '<br>' : '+');
    }  
    return div;
    };  
    legend.addTo(myMap);
    var title = L.control()
title.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    div.innerHTML = "Arrivals which occurred in this year"
    return div;
};
title.addTo(myMap);
}

