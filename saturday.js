// Create a map object
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 2
  });


  
  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Jim Dale 2020 Group - 1</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Country data
  var countries = [
    {
      id: 1,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2008,
      arrival: 36,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 2,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2009,
      arrival: 89,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 3,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2010,
      arrival: 147,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 4,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2011,
      arrival: 165,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 5,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2012,
      arrival: 167,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 6,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2013,
      arrival: 179,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 7,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2014,
      arrival: 121,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 8,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2015,
      arrival: 86,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 9,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2016,
      arrival: 62,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 10,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2017,
      arrival: 16,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 11,
      continent: "ASIA",
      country: "AFGHANISTAN",
      year: 2018,
      arrival: 50,
      latitude: 33.93911,
      longitude: 67.709953
    },
    {
      id: 12,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2008,
      arrival: 1420,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 13,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2009,
      arrival: 1856,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 14,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2010,
      arrival: 2417,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 15,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2011,
      arrival: 2932,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 16,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2012,
      arrival: 3514,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 17,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2013,
      arrival: 3256,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 18,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2014,
      arrival: 3673,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 19,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2015,
      arrival: 4131,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 20,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2016,
      arrival: 4736,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 21,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2017,
      arrival: 5118,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 22,
      continent: "EUROPE",
      country: "ALBANIA",
      year: 2018,
      arrival: 5927,
      latitude: 41.153332,
      longitude: 20.168331
    },
    {
      id: 23,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2008,
      arrival: 1772,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 24,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2009,
      arrival: 1912,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 25,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2010,
      arrival: 2070,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 26,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2011,
      arrival: 2395,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 27,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2012,
      arrival: 2634,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 28,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2013,
      arrival: 2733,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 29,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2014,
      arrival: 2301,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 30,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2015,
      arrival: 1710,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 31,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2016,
      arrival: 2039,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 32,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2017,
      arrival: 2451,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 33,
      continent: "AFRICA",
      country: "ALGERIA",
      year: 2018,
      arrival: 2657,
      latitude: 28.033886,
      longitude: 1.659626
    },
    {
      id: 34,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2008,
      arrival: 24,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 35,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2009,
      arrival: 24,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 36,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2010,
      arrival: 23,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 37,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2011,
      arrival: 23,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 38,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2012,
      arrival: 23,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 39,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2013,
      arrival: 21,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 40,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2014,
      arrival: 22,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 41,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2015,
      arrival: 20,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 42,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2016,
      arrival: 20,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 43,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2017,
      arrival: 20,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 44,
      continent: "OCEANIA",
      country: "AMERICAN SAMOA",
      year: 2018,
      arrival: 20,
      latitude: -14.270972,
      longitude: -170.132217
    },
    {
      id: 45,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2008,
      arrival: 2059,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 46,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2009,
      arrival: 1830,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 47,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2010,
      arrival: 1808,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 48,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2011,
      arrival: 2242,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 49,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2012,
      arrival: 2238,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 50,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2013,
      arrival: 2328,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 51,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2014,
      arrival: 2363,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 52,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2015,
      arrival: 2663,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 53,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2016,
      arrival: 2819,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 54,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2017,
      arrival: 3003,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 55,
      continent: "EUROPE",
      country: "ANDORRA",
      year: 2018,
      arrival: 3042,
      latitude: 42.546245,
      longitude: 1.601554
    },
    {
      id: 56,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2008,
      arrival: 294,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 57,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2009,
      arrival: 366,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 58,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2010,
      arrival: 425,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 59,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2011,
      arrival: 481,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 60,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2012,
      arrival: 528,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 61,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2013,
      arrival: 650,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 62,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2014,
      arrival: 595,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 63,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2015,
      arrival: 592,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 64,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2016,
      arrival: 397,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 65,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2017,
      arrival: 261,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 66,
      continent: "AFRICA",
      country: "ANGOLA",
      year: 2018,
      arrival: 218,
      latitude: -11.202692,
      longitude: 17.873887
    },
    {
      id: 67,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2008,
      arrival: 68,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 68,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2009,
      arrival: 58,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 69,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2010,
      arrival: 62,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 70,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2011,
      arrival: 66,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 71,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2012,
      arrival: 65,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 72,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2013,
      arrival: 69,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 73,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2014,
      arrival: 71,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 74,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2015,
      arrival: 73,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 75,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2016,
      arrival: 79,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 76,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2017,
      arrival: 68,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 77,
      continent: "NORTH AMERICA",
      country: "ANGUILLA",
      year: 2018,
      arrival: 55,
      latitude: 18.220554,
      longitude: -63.068615
    },
    {
      id: 78,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2008,
      arrival: 266,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 79,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2009,
      arrival: 234,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 80,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2010,
      arrival: 230,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 81,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2011,
      arrival: 241,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 82,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2012,
      arrival: 247,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 83,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2013,
      arrival: 243,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 84,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2014,
      arrival: 249,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 85,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2015,
      arrival: 250,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 86,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2016,
      arrival: 265,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 87,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2017,
      arrival: 247,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 88,
      continent: "NORTH AMERICA",
      country: "ANTIGUA AND BARBUDA",
      year: 2018,
      arrival: 269,
      latitude: 17.060816,
      longitude: -61.796428
    },
    {
      id: 89,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2008,
      arrival: 4700,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 90,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2009,
      arrival: 4308,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 91,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2010,
      arrival: 6800,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 92,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2011,
      arrival: 6703,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 93,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2012,
      arrival: 6497,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 94,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2013,
      arrival: 6510,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 95,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2014,
      arrival: 7165,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 96,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2015,
      arrival: 6816,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 97,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2016,
      arrival: 6668,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 98,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2017,
      arrival: 6711,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 99,
      continent: "SOUTH AMERICA",
      country: "ARGENTINA",
      year: 2018,
      arrival: 6942,
      latitude: -38.416097,
      longitude: -63.616672
    },
    {
      id: 100,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2008,
      arrival: 558,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 101,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2009,
      arrival: 575,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 102,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2010,
      arrival: 684,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 103,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2011,
      arrival: 758,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 104,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2012,
      arrival: 963,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 105,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2013,
      arrival: 1084,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 106,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2014,
      arrival: 1204,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 107,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2015,
      arrival: 1192,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 108,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2016,
      arrival: 1260,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 109,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2017,
      arrival: 1495,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 110,
      continent: "ASIA",
      country: "ARMENIA",
      year: 2018,
      arrival: 1652,
      latitude: 40.069099,
      longitude: 45.038189
    },
    {
      id: 111,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2008,
      arrival: 827,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 112,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2009,
      arrival: 813,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 113,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2010,
      arrival: 824,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 114,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2011,
      arrival: 869,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 115,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2012,
      arrival: 904,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 116,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2013,
      arrival: 979,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 117,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2014,
      arrival: 1072,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 118,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2015,
      arrival: 1225,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 119,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2016,
      arrival: 1102,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 120,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2017,
      arrival: 1071,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 121,
      continent: "NORTH AMERICA",
      country: "ARUBA",
      year: 2018,
      arrival: 1082,
      latitude: 12.52111,
      longitude: -69.968338
    },
    {
      id: 122,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2008,
      arrival: 5586,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 123,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2009,
      arrival: 5490,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 124,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2010,
      arrival: 5790,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 125,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2011,
      arrival: 5771,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 126,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2012,
      arrival: 6032,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 127,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2013,
      arrival: 6482,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 128,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2014,
      arrival: 6922,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 129,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2015,
      arrival: 7449,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 130,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2016,
      arrival: 8269,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 131,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2017,
      arrival: 8815,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 132,
      continent: "OCEANIA",
      country: "AUSTRALIA",
      year: 2018,
      arrival: 9246,
      latitude: -25.274398,
      longitude: 133.775136
    },
    {
      id: 133,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2008,
      arrival: 21935,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 134,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2009,
      arrival: 21355,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 135,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2010,
      arrival: 22004,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 136,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2011,
      arrival: 23012,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 137,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2012,
      arrival: 24151,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 138,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2013,
      arrival: 24813,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 139,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2014,
      arrival: 25291,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 140,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2015,
      arrival: 26728,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 141,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2016,
      arrival: 28121,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 142,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2017,
      arrival: 29460,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 143,
      continent: "EUROPE",
      country: "AUSTRIA",
      year: 2018,
      arrival: 30816,
      latitude: 47.516231,
      longitude: 14.550072
    },
    {
      id: 144,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2008,
      arrival: 1899,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 145,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2009,
      arrival: 1830,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 146,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2010,
      arrival: 1963,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 147,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2011,
      arrival: 2239,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 148,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2012,
      arrival: 2484,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 149,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2013,
      arrival: 2509,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 150,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2014,
      arrival: 2298,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 151,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2015,
      arrival: 2006,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 152,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2016,
      arrival: 2249,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 153,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2017,
      arrival: 2697,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 154,
      continent: "ASIA",
      country: "AZERBAIJAN",
      year: 2018,
      arrival: 2850,
      latitude: 40.143105,
      longitude: 47.576927
    },
    {
      id: 155,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2008,
      arrival: 1463,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 156,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2009,
      arrival: 1327,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 157,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2010,
      arrival: 1370,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 158,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2011,
      arrival: 1346,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 159,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2012,
      arrival: 1422,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 160,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2013,
      arrival: 1366,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 161,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2014,
      arrival: 1446,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 162,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2015,
      arrival: 1502,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 163,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2016,
      arrival: 1500,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 164,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2017,
      arrival: 1442,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 165,
      continent: "NORTH AMERICA",
      country: "BAHAMAS",
      year: 2018,
      arrival: 1633,
      latitude: 25.03428,
      longitude: -77.39628
    },
    {
      id: 166,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2008,
      arrival: 8631,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 167,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2009,
      arrival: 8861,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 168,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2010,
      arrival: 11952,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 169,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2011,
      arrival: 6732,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 170,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2012,
      arrival: 8062,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 171,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2013,
      arrival: 9163,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 172,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2014,
      arrival: 10452,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 173,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2015,
      arrival: 9670,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 174,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2016,
      arrival: 10158,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 175,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2017,
      arrival: 11374,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 176,
      continent: "ASIA",
      country: "BAHRAIN",
      year: 2018,
      arrival: 12045,
      latitude: 25.930414,
      longitude: 50.637772
    },
    {
      id: 177,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2008,
      arrival: 568,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 178,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2009,
      arrival: 519,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 179,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2010,
      arrival: 532,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 180,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2011,
      arrival: 568,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 181,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2012,
      arrival: 536,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 182,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2013,
      arrival: 509,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 183,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2014,
      arrival: 521,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 184,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2015,
      arrival: 592,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 185,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2016,
      arrival: 632,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 186,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2017,
      arrival: 664,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 187,
      continent: "NORTH AMERICA",
      country: "BARBADOS",
      year: 2018,
      arrival: 680,
      latitude: 13.193887,
      longitude: -59.543198
    },
    {
      id: 188,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2008,
      arrival: 477,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 189,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2009,
      arrival: 512,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 190,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2010,
      arrival: 677,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 191,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2011,
      arrival: 783,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 192,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2012,
      arrival: 993,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 193,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2013,
      arrival: 1003,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 194,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2014,
      arrival: 1080,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 195,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2015,
      arrival: 966,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 196,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2016,
      arrival: 1929,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 197,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2017,
      arrival: 2000,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 198,
      continent: "EUROPE",
      country: "BELARUS",
      year: 2018,
      arrival: 2142,
      latitude: 53.709807,
      longitude: 27.953389
    },
    {
      id: 199,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2008,
      arrival: 7165,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 200,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2009,
      arrival: 6815,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 201,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2010,
      arrival: 7186,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 202,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2011,
      arrival: 7494,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 203,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2012,
      arrival: 7560,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 204,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2013,
      arrival: 7684,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 205,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2014,
      arrival: 7887,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 206,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2015,
      arrival: 8355,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 207,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2016,
      arrival: 7481,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 208,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2017,
      arrival: 8385,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 209,
      continent: "EUROPE",
      country: "BELGIUM",
      year: 2018,
      arrival: 9119,
      latitude: 50.503887,
      longitude: 4.469936
    },
    {
      id: 210,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2008,
      arrival: 245,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 211,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2009,
      arrival: 232,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 212,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2010,
      arrival: 242,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 213,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2011,
      arrival: 250,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 214,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2012,
      arrival: 277,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 215,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2013,
      arrival: 294,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 216,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2014,
      arrival: 321,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 217,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2015,
      arrival: 341,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 218,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2016,
      arrival: 386,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 219,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2017,
      arrival: 427,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 220,
      continent: "NORTH AMERICA",
      country: "BELIZE",
      year: 2018,
      arrival: 489,
      latitude: 17.189877,
      longitude: -88.49765
    },
    {
      id: 221,
      continent: "AFRICA",
      country: "BENIN",
      year: 2008,
      arrival: 188,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 222,
      continent: "AFRICA",
      country: "BENIN",
      year: 2009,
      arrival: 190,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 223,
      continent: "AFRICA",
      country: "BENIN",
      year: 2010,
      arrival: 199,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 224,
      continent: "AFRICA",
      country: "BENIN",
      year: 2011,
      arrival: 209,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 225,
      continent: "AFRICA",
      country: "BENIN",
      year: 2012,
      arrival: 220,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 226,
      continent: "AFRICA",
      country: "BENIN",
      year: 2013,
      arrival: 231,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 227,
      continent: "AFRICA",
      country: "BENIN",
      year: 2014,
      arrival: 242,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 228,
      continent: "AFRICA",
      country: "BENIN",
      year: 2015,
      arrival: 255,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 229,
      continent: "AFRICA",
      country: "BENIN",
      year: 2016,
      arrival: 267,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 230,
      continent: "AFRICA",
      country: "BENIN",
      year: 2017,
      arrival: 281,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 231,
      continent: "AFRICA",
      country: "BENIN",
      year: 2018,
      arrival: 295,
      latitude: 9.30769,
      longitude: 2.315834
    },
    {
      id: 232,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2008,
      arrival: 264,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 233,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2009,
      arrival: 236,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 234,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2010,
      arrival: 232,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 235,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2011,
      arrival: 236,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 236,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2012,
      arrival: 232,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 237,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2013,
      arrival: 236,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 238,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2014,
      arrival: 224,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 239,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2015,
      arrival: 220,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 240,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2016,
      arrival: 244,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 241,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2017,
      arrival: 270,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 242,
      continent: "NORTH AMERICA",
      country: "BERMUDA",
      year: 2018,
      arrival: 282,
      latitude: 32.321384,
      longitude: -64.75737
    },
    {
      id: 243,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2008,
      arrival: 28,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 244,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2009,
      arrival: 23,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 245,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2010,
      arrival: 41,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 246,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2011,
      arrival: 66,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 247,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2012,
      arrival: 105,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 248,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2013,
      arrival: 116,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 249,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2014,
      arrival: 133,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 250,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2015,
      arrival: 155,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 251,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2016,
      arrival: 210,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 252,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2017,
      arrival: 255,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 253,
      continent: "ASIA",
      country: "BHUTAN",
      year: 2018,
      arrival: 274,
      latitude: 27.514162,
      longitude: 90.433601
    },
    {
      id: 254,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2008,
      arrival: 594,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 255,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2009,
      arrival: 599,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 256,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2010,
      arrival: 679,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 257,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2011,
      arrival: 711,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 258,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2012,
      arrival: 798,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 259,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2013,
      arrival: 798,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 260,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2014,
      arrival: 871,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 261,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2015,
      arrival: 882,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 262,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2016,
      arrival: 961,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 263,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2017,
      arrival: 1109,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 264,
      continent: "SOUTH AMERICA",
      country: "BOLIVIA, PLURINATIONAL STATE OF",
      year: 2018,
      arrival: 1142,
      latitude: -16.290154,
      longitude: -63.588653
    },
    {
      id: 265,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2008,
      arrival: 322,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 266,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2009,
      arrival: 311,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 267,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2010,
      arrival: 365,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 268,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2011,
      arrival: 392,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 269,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2012,
      arrival: 439,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 270,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2013,
      arrival: 529,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 271,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2014,
      arrival: 536,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 272,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2015,
      arrival: 678,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 273,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2016,
      arrival: 778,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 274,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2017,
      arrival: 923,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 275,
      continent: "EUROPE",
      country: "BOSNIA AND HERZEGOVINA",
      year: 2018,
      arrival: 1053,
      latitude: 43.915886,
      longitude: 17.679076
    },
    {
      id: 276,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2008,
      arrival: 5050,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 277,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2009,
      arrival: 4802,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 278,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2010,
      arrival: 5161,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 279,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2011,
      arrival: 5433,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 280,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2012,
      arrival: 5677,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 281,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2013,
      arrival: 5813,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 282,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2014,
      arrival: 6430,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 283,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2015,
      arrival: 6306,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 284,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2016,
      arrival: 6547,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 285,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2017,
      arrival: 6589,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 286,
      continent: "SOUTH AMERICA",
      country: "BRAZIL",
      year: 2018,
      arrival: 6621,
      latitude: -14.235004,
      longitude: -51.92528
    },
    {
      id: 287,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2008,
      arrival: 346,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 288,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2009,
      arrival: 309,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 289,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2010,
      arrival: 330,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 290,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2011,
      arrival: 338,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 291,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2012,
      arrival: 351,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 292,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2013,
      arrival: 366,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 293,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2014,
      arrival: 386,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 294,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2015,
      arrival: 393,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 295,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2016,
      arrival: 408,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 296,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2017,
      arrival: 335,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 297,
      continent: "NORTH AMERICA",
      country: "BRITISH VIRGIN ISLANDS",
      year: 2018,
      arrival: 192,
      latitude: 18.420695,
      longitude: -64.639968
    },
    {
      id: 298,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2008,
      arrival: 5780,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 299,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2009,
      arrival: 5739,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 300,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2010,
      arrival: 6047,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 301,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2011,
      arrival: 6328,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 302,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2012,
      arrival: 6541,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 303,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2013,
      arrival: 6898,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 304,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2014,
      arrival: 7311,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 305,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2015,
      arrival: 7099,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 306,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2016,
      arrival: 8252,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 307,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2017,
      arrival: 8883,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 308,
      continent: "EUROPE",
      country: "BULGARIA",
      year: 2018,
      arrival: 9273,
      latitude: 42.733883,
      longitude: 25.48583
    },
    {
      id: 309,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2008,
      arrival: 272,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 310,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2009,
      arrival: 269,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 311,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2010,
      arrival: 274,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 312,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2011,
      arrival: 238,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 313,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2012,
      arrival: 237,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 314,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2013,
      arrival: 218,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 315,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2014,
      arrival: 191,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 316,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2015,
      arrival: 163,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 317,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2016,
      arrival: 152,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 318,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2017,
      arrival: 143,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 319,
      continent: "AFRICA",
      country: "BURKINA FASO",
      year: 2018,
      arrival: 144,
      latitude: 12.238333,
      longitude: -1.561593
    },
    {
      id: 320,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2008,
      arrival: 285,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 321,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2009,
      arrival: 287,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 322,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2010,
      arrival: 336,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 323,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2011,
      arrival: 428,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 324,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2012,
      arrival: 482,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 325,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2013,
      arrival: 503,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 326,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2014,
      arrival: 494,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 327,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2015,
      arrival: 520,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 328,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2016,
      arrival: 598,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 329,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2017,
      arrival: 668,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 330,
      continent: "AFRICA",
      country: "CABO VERDE",
      year: 2018,
      arrival: 710,
      latitude: 16.5388,
      longitude: -23.0418
    },
    {
      id: 331,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2008,
      arrival: 2125,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 332,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2009,
      arrival: 2162,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 333,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2010,
      arrival: 2508,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 334,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2011,
      arrival: 2882,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 335,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2012,
      arrival: 3584,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 336,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2013,
      arrival: 4210,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 337,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2014,
      arrival: 4503,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 338,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2015,
      arrival: 4775,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 339,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2016,
      arrival: 5012,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 340,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2017,
      arrival: 5602,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 341,
      continent: "ASIA",
      country: "CAMBODIA",
      year: 2018,
      arrival: 6201,
      latitude: 12.565679,
      longitude: 104.990963
    },
    {
      id: 342,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2008,
      arrival: 17142,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 343,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2009,
      arrival: 15737,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 344,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2010,
      arrival: 16219,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 345,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2011,
      arrival: 16014,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 346,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2012,
      arrival: 16344,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 347,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2013,
      arrival: 16059,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 348,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2014,
      arrival: 16537,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 349,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2015,
      arrival: 17971,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 350,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2016,
      arrival: 19971,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 351,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2017,
      arrival: 20883,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 352,
      continent: "NORTH AMERICA",
      country: "CANADA",
      year: 2018,
      arrival: 21134,
      latitude: 56.130366,
      longitude: -106.346771
    },
    {
      id: 353,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2008,
      arrival: 303,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 354,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2009,
      arrival: 272,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 355,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2010,
      arrival: 288,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 356,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2011,
      arrival: 309,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 357,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2012,
      arrival: 322,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 358,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2013,
      arrival: 345,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 359,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2014,
      arrival: 383,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 360,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2015,
      arrival: 385,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 361,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2016,
      arrival: 385,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 362,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2017,
      arrival: 418,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 363,
      continent: "NORTH AMERICA",
      country: "CAYMAN ISLANDS",
      year: 2018,
      arrival: 463,
      latitude: 19.513469,
      longitude: -80.566956
    },
    {
      id: 364,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2008,
      arrival: 2710,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 365,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2009,
      arrival: 2760,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 366,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2010,
      arrival: 2801,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 367,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2011,
      arrival: 3137,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 368,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2012,
      arrival: 3554,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 369,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2013,
      arrival: 3576,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 370,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2014,
      arrival: 3674,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 371,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2015,
      arrival: 4478,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 372,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2016,
      arrival: 5641,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 373,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2017,
      arrival: 6450,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 374,
      continent: "SOUTH AMERICA",
      country: "CHILE",
      year: 2018,
      arrival: 5723,
      latitude: -35.675147,
      longitude: -71.542969
    },
    {
      id: 375,
      continent: "ASIA",
      country: "CHINA",
      year: 2008,
      arrival: 53049,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 376,
      continent: "ASIA",
      country: "CHINA",
      year: 2009,
      arrival: 50875,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 377,
      continent: "ASIA",
      country: "CHINA",
      year: 2010,
      arrival: 55664,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 378,
      continent: "ASIA",
      country: "CHINA",
      year: 2011,
      arrival: 57581,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 379,
      continent: "ASIA",
      country: "CHINA",
      year: 2012,
      arrival: 57725,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 380,
      continent: "ASIA",
      country: "CHINA",
      year: 2013,
      arrival: 55686,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 381,
      continent: "ASIA",
      country: "CHINA",
      year: 2014,
      arrival: 55622,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 382,
      continent: "ASIA",
      country: "CHINA",
      year: 2015,
      arrival: 56886,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 383,
      continent: "ASIA",
      country: "CHINA",
      year: 2016,
      arrival: 59270,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 384,
      continent: "ASIA",
      country: "CHINA",
      year: 2017,
      arrival: 60740,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 385,
      continent: "ASIA",
      country: "CHINA",
      year: 2018,
      arrival: 62900,
      latitude: 35.86166,
      longitude: 104.195397
    },
    {
      id: 386,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2008,
      arrival: 2545,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 387,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2009,
      arrival: 2649,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 388,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2010,
      arrival: 1701,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 389,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2011,
      arrival: 2356,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 390,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2012,
      arrival: 2434,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 391,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2013,
      arrival: 2595,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 392,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2014,
      arrival: 2866,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 393,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2015,
      arrival: 3252,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 394,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2016,
      arrival: 3559,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 395,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2017,
      arrival: 3976,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 396,
      continent: "SOUTH AMERICA",
      country: "COLOMBIA",
      year: 2018,
      arrival: 4282,
      latitude: 4.570868,
      longitude: -74.297333
    },
    {
      id: 397,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2008,
      arrival: 15,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 398,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2009,
      arrival: 11,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 399,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2010,
      arrival: 15,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 400,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2011,
      arrival: 19,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 401,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2012,
      arrival: 23,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 402,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2013,
      arrival: 22,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 403,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2014,
      arrival: 23,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 404,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2015,
      arrival: 24,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 405,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2016,
      arrival: 27,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 406,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2017,
      arrival: 28,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 407,
      continent: "AFRICA",
      country: "COMOROS",
      year: 2018,
      arrival: 36,
      latitude: -11.875001,
      longitude: 43.872219
    },
    {
      id: 408,
      continent: "AFRICA",
      country: "CONGO",
      year: 2008,
      arrival: 62,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 409,
      continent: "AFRICA",
      country: "CONGO",
      year: 2009,
      arrival: 94,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 410,
      continent: "AFRICA",
      country: "CONGO",
      year: 2010,
      arrival: 194,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 411,
      continent: "AFRICA",
      country: "CONGO",
      year: 2011,
      arrival: 218,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 412,
      continent: "AFRICA",
      country: "CONGO",
      year: 2012,
      arrival: 256,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 413,
      continent: "AFRICA",
      country: "CONGO",
      year: 2013,
      arrival: 343,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 414,
      continent: "AFRICA",
      country: "CONGO",
      year: 2014,
      arrival: 226,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 415,
      continent: "AFRICA",
      country: "CONGO",
      year: 2015,
      arrival: 220,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 416,
      continent: "AFRICA",
      country: "CONGO",
      year: 2016,
      arrival: 211,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 417,
      continent: "AFRICA",
      country: "CONGO",
      year: 2017,
      arrival: 149,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 418,
      continent: "AFRICA",
      country: "CONGO",
      year: 2018,
      arrival: 156,
      latitude: -4.038333,
      longitude: 21.758664
    },
    {
      id: 419,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2008,
      arrival: 95,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 420,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2009,
      arrival: 101,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 421,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2010,
      arrival: 104,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 422,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2011,
      arrival: 113,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 423,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2012,
      arrival: 122,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 424,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2013,
      arrival: 121,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 425,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2014,
      arrival: 122,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 426,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2015,
      arrival: 125,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 427,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2016,
      arrival: 146,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 428,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2017,
      arrival: 161,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 429,
      continent: "OCEANIA",
      country: "COOK ISLANDS",
      year: 2018,
      arrival: 169,
      latitude: -21.236736,
      longitude: -159.777671
    },
    {
      id: 430,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2008,
      arrival: 2089,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 431,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2009,
      arrival: 1923,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 432,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2010,
      arrival: 2100,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 433,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2011,
      arrival: 2192,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 434,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2012,
      arrival: 2343,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 435,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2013,
      arrival: 2428,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 436,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2014,
      arrival: 2527,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 437,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2015,
      arrival: 2660,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 438,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2016,
      arrival: 2925,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 439,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2017,
      arrival: 2960,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 440,
      continent: "NORTH AMERICA",
      country: "COSTA RICA",
      year: 2018,
      arrival: 3017,
      latitude: 9.748917,
      longitude: -83.753428
    },
    {
      id: 441,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2008,
      arrival: 205,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 442,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2009,
      arrival: 231,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 443,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2010,
      arrival: 252,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 444,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2011,
      arrival: 270,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 445,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2012,
      arrival: 289,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 446,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2013,
      arrival: 380,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 447,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2014,
      arrival: 471,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 448,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2015,
      arrival: 1441,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 449,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2016,
      arrival: 1583,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 450,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2017,
      arrival: 1800,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 451,
      continent: "AFRICA",
      country: "COTE D'IVOIRE",
      year: 2018,
      arrival: 1965,
      latitude: 7.539989,
      longitude: -5.54708
    },
    {
      id: 452,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2008,
      arrival: 8665,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 453,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2009,
      arrival: 8694,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 454,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2010,
      arrival: 9111,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 455,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2011,
      arrival: 9927,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 456,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2012,
      arrival: 10369,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 457,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2013,
      arrival: 10948,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 458,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2014,
      arrival: 11623,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 459,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2015,
      arrival: 12683,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 460,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2016,
      arrival: 13809,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 461,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2017,
      arrival: 15593,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 462,
      continent: "EUROPE",
      country: "CROATIA",
      year: 2018,
      arrival: 16645,
      latitude: 45.1,
      longitude: 15.2
    },
    {
      id: 463,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2008,
      arrival: 2316,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 464,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2009,
      arrival: 2405,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 465,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2010,
      arrival: 2507,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 466,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2011,
      arrival: 2688,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 467,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2012,
      arrival: 2823,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 468,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2013,
      arrival: 2839,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 469,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2014,
      arrival: 2981,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 470,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2015,
      arrival: 3506,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 471,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2016,
      arrival: 3975,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 472,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2017,
      arrival: 4594,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 473,
      continent: "NORTH AMERICA",
      country: "CUBA",
      year: 2018,
      arrival: 4684,
      latitude: 21.521757,
      longitude: -77.781167
    },
    {
      id: 474,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2008,
      arrival: 409,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 475,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2009,
      arrival: 367,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 476,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2010,
      arrival: 342,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 477,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2011,
      arrival: 390,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 478,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2012,
      arrival: 421,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 479,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2013,
      arrival: 441,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 480,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2014,
      arrival: 452,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 481,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2015,
      arrival: 468,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 482,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2016,
      arrival: 441,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 483,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2017,
      arrival: 399,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 484,
      continent: "NORTH AMERICA",
      country: "CURACAO",
      year: 2018,
      arrival: 432,
      latitude: 12.1696,
      longitude: -68.99
    },
    {
      id: 485,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2008,
      arrival: 2404,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 486,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2009,
      arrival: 2141,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 487,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2010,
      arrival: 2173,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 488,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2011,
      arrival: 2392,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 489,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2012,
      arrival: 2465,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 490,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2013,
      arrival: 2405,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 491,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2014,
      arrival: 2441,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 492,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2015,
      arrival: 2659,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 493,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2016,
      arrival: 3187,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 494,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2017,
      arrival: 3652,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 495,
      continent: "EUROPE",
      country: "CYPRUS",
      year: 2018,
      arrival: 3939,
      latitude: 35.126413,
      longitude: 33.429859
    },
    {
      id: 496,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2008,
      arrival: 6649,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 497,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2009,
      arrival: 6032,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 498,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2010,
      arrival: 6334,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 499,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2011,
      arrival: 6715,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 500,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2012,
      arrival: 7647,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 501,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2013,
      arrival: 7852,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 502,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2014,
      arrival: 8096,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 503,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2015,
      arrival: 8707,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 504,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2016,
      arrival: 9321,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 505,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2017,
      arrival: 10160,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 506,
      continent: "EUROPE",
      country: "CZECH REPUBLIC",
      year: 2018,
      arrival: 10611,
      latitude: 49.817492,
      longitude: 15.472962
    },
    {
      id: 507,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2008,
      arrival: 9564,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 508,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2009,
      arrival: 9265,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 509,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2010,
      arrival: 9425,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 510,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2011,
      arrival: 8471,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 511,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2012,
      arrival: 8443,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 512,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2013,
      arrival: 8557,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 513,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2014,
      arrival: 10267,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 514,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2015,
      arrival: 10424,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 515,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2016,
      arrival: 10781,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 516,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2017,
      arrival: 12426,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 517,
      continent: "EUROPE",
      country: "DENMARK",
      year: 2018,
      arrival: 12749,
      latitude: 56.26392,
      longitude: 9.501785
    },
    {
      id: 518,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2008,
      arrival: 81,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 519,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2009,
      arrival: 75,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 520,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2010,
      arrival: 77,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 521,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2011,
      arrival: 76,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 522,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2012,
      arrival: 79,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 523,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2013,
      arrival: 78,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 524,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2014,
      arrival: 82,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 525,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2015,
      arrival: 75,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 526,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2016,
      arrival: 78,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 527,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2017,
      arrival: 72,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 528,
      continent: "NORTH AMERICA",
      country: "DOMINICA",
      year: 2018,
      arrival: 63,
      latitude: 15.414999,
      longitude: -61.370976
    },
    {
      id: 529,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2008,
      arrival: 3980,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 530,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2009,
      arrival: 3992,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 531,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2010,
      arrival: 4125,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 532,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2011,
      arrival: 4306,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 533,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2012,
      arrival: 4563,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 534,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2013,
      arrival: 4690,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 535,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2014,
      arrival: 5141,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 536,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2015,
      arrival: 5600,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 537,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2016,
      arrival: 5959,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 538,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2017,
      arrival: 6188,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 539,
      continent: "NORTH AMERICA",
      country: "DOMINICAN REPUBLIC",
      year: 2018,
      arrival: 6569,
      latitude: 18.735693,
      longitude: -70.162651
    },
    {
      id: 540,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2008,
      arrival: 1005,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 541,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2009,
      arrival: 968,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 542,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2010,
      arrival: 1047,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 543,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2011,
      arrival: 1141,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 544,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2012,
      arrival: 1272,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 545,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2013,
      arrival: 1364,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 546,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2014,
      arrival: 1695,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 547,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2015,
      arrival: 1676,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 548,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2016,
      arrival: 1569,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 549,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2017,
      arrival: 1806,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 550,
      continent: "SOUTH AMERICA",
      country: "ECUADOR",
      year: 2018,
      arrival: 2535,
      latitude: -1.831239,
      longitude: -78.183406
    },
    {
      id: 551,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2008,
      arrival: 12296,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 552,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2009,
      arrival: 11914,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 553,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2010,
      arrival: 14051,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 554,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2011,
      arrival: 9497,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 555,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2012,
      arrival: 11196,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 556,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2013,
      arrival: 9174,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 557,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2014,
      arrival: 9628,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 558,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2015,
      arrival: 9139,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 559,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2016,
      arrival: 5258,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 560,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2017,
      arrival: 8157,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 561,
      continent: "AFRICA",
      country: "EGYPT",
      year: 2018,
      arrival: 11196,
      latitude: 26.820553,
      longitude: 30.802498
    },
    {
      id: 562,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2008,
      arrival: 1385,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 563,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2009,
      arrival: 1091,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 564,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2010,
      arrival: 1150,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 565,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2011,
      arrival: 1184,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 566,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2012,
      arrival: 1255,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 567,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2013,
      arrival: 1283,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 568,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2014,
      arrival: 1345,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 569,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2015,
      arrival: 1402,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 570,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2016,
      arrival: 1434,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 571,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2017,
      arrival: 1556,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 572,
      continent: "NORTH AMERICA",
      country: "EL SALVADOR",
      year: 2018,
      arrival: 1677,
      latitude: 13.794185,
      longitude: -88.89653
    },
    {
      id: 573,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2008,
      arrival: 2222,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 574,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2009,
      arrival: 2180,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 575,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2010,
      arrival: 2511,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 576,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2011,
      arrival: 2823,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 577,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2012,
      arrival: 2957,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 578,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2013,
      arrival: 3111,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 579,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2014,
      arrival: 3160,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 580,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2015,
      arrival: 2961,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 581,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2016,
      arrival: 3131,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 582,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2017,
      arrival: 3244,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 583,
      continent: "EUROPE",
      country: "ESTONIA",
      year: 2018,
      arrival: 3234,
      latitude: 58.595272,
      longitude: 25.013607
    },
    {
      id: 584,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2008,
      arrival: 756,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 585,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2009,
      arrival: 908,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 586,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2010,
      arrival: 868,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 587,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2011,
      arrival: 879,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 588,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2012,
      arrival: 888,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 589,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2013,
      arrival: 968,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 590,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2014,
      arrival: 939,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 591,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2015,
      arrival: 873,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 592,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2016,
      arrival: 947,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 593,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2017,
      arrival: 921,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 594,
      continent: "AFRICA",
      country: "ESWATINI",
      year: 2018,
      arrival: 782,
      latitude: -26.5225,
      longitude: 31.4659
    },
    {
      id: 595,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2008,
      arrival: 383,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 596,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2009,
      arrival: 427,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 597,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2010,
      arrival: 468,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 598,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2011,
      arrival: 523,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 599,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2012,
      arrival: 597,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 600,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2013,
      arrival: 681,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 601,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2014,
      arrival: 770,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 602,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2015,
      arrival: 864,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 603,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2016,
      arrival: 871,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 604,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2017,
      arrival: 933,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 605,
      continent: "AFRICA",
      country: "ETHIOPIA",
      year: 2018,
      arrival: 849,
      latitude: 9.145,
      longitude: 40.489673
    },
    {
      id: 606,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2008,
      arrival: 585,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 607,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2009,
      arrival: 542,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 608,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2010,
      arrival: 632,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 609,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2011,
      arrival: 675,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 610,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2012,
      arrival: 661,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 611,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2013,
      arrival: 659,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 612,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2014,
      arrival: 693,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 613,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2015,
      arrival: 755,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 614,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2016,
      arrival: 792,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 615,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2017,
      arrival: 843,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 616,
      continent: "OCEANIA",
      country: "FIJI",
      year: 2018,
      arrival: 870,
      latitude: -16.578193,
      longitude: 179.414413
    },
    {
      id: 617,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2008,
      arrival: 2494,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 618,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2009,
      arrival: 2220,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 619,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2010,
      arrival: 2319,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 620,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2011,
      arrival: 2623,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 621,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2012,
      arrival: 2778,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 622,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2013,
      arrival: 2797,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 623,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2014,
      arrival: 2731,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 624,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2015,
      arrival: 2622,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 625,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2016,
      arrival: 2789,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 626,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2017,
      arrival: 3180,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 627,
      continent: "EUROPE",
      country: "FINLAND",
      year: 2018,
      arrival: 3224,
      latitude: 61.92411,
      longitude: 25.748151
    },
    {
      id: 628,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2008,
      arrival: 79218,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 629,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2009,
      arrival: 76764,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 630,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2010,
      arrival: 76647,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 631,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2011,
      arrival: 80499,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 632,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2012,
      arrival: 81980,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 633,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2013,
      arrival: 83634,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 634,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2014,
      arrival: 83701,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 635,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2015,
      arrival: 84452,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 636,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2016,
      arrival: 82682,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 637,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2017,
      arrival: 86758,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 638,
      continent: "EUROPE",
      country: "FRANCE",
      year: 2018,
      arrival: 89322,
      latitude: 46.227638,
      longitude: 2.213749
    },
    {
      id: 639,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2008,
      arrival: 196,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 640,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2009,
      arrival: 160,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 641,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2010,
      arrival: 154,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 642,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2011,
      arrival: 163,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 643,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2012,
      arrival: 169,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 644,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2013,
      arrival: 164,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 645,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2014,
      arrival: 181,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 646,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2015,
      arrival: 184,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 647,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2016,
      arrival: 192,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 648,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2017,
      arrival: 199,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 649,
      continent: "OCEANIA",
      country: "FRENCH POLYNESIA",
      year: 2018,
      arrival: 216,
      latitude: -17.679742,
      longitude: -149.406843
    },
    {
      id: 650,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2008,
      arrival: 147,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 651,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2009,
      arrival: 142,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 652,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2010,
      arrival: 91,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 653,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2011,
      arrival: 106,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 654,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2012,
      arrival: 157,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 655,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2013,
      arrival: 171,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 656,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2014,
      arrival: 156,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 657,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2015,
      arrival: 449,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 658,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2016,
      arrival: 450,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 659,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2017,
      arrival: 522,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 660,
      continent: "AFRICA",
      country: "GAMBIA",
      year: 2018,
      arrival: 552,
      latitude: 13.443182,
      longitude: -15.310139
    },
    {
      id: 661,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2008,
      arrival: 1290,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 662,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2009,
      arrival: 1500,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 663,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2010,
      arrival: 2032,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 664,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2011,
      arrival: 2712,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 665,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2012,
      arrival: 4106,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 666,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2013,
      arrival: 4954,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 667,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2014,
      arrival: 5004,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 668,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2015,
      arrival: 5256,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 669,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2016,
      arrival: 5393,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 670,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2017,
      arrival: 6483,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 671,
      continent: "ASIA",
      country: "GEORGIA",
      year: 2018,
      arrival: 7203,
      latitude: 42.315407,
      longitude: 43.356892
    },
    {
      id: 672,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2008,
      arrival: 24884,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 673,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2009,
      arrival: 24220,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 674,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2010,
      arrival: 26875,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 675,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2011,
      arrival: 28374,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 676,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2012,
      arrival: 30411,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 677,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2013,
      arrival: 31545,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 678,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2014,
      arrival: 32999,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 679,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2015,
      arrival: 34970,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 680,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2016,
      arrival: 35555,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 681,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2017,
      arrival: 37452,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 682,
      continent: "EUROPE",
      country: "GERMANY",
      year: 2018,
      arrival: 38881,
      latitude: 51.165691,
      longitude: 10.451526
    },
    {
      id: 683,
      continent: "EUROPE",
      country: "GREECE",
      year: 2008,
      arrival: 15939,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 684,
      continent: "EUROPE",
      country: "GREECE",
      year: 2009,
      arrival: 14915,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 685,
      continent: "EUROPE",
      country: "GREECE",
      year: 2010,
      arrival: 15007,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 686,
      continent: "EUROPE",
      country: "GREECE",
      year: 2011,
      arrival: 16427,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 687,
      continent: "EUROPE",
      country: "GREECE",
      year: 2012,
      arrival: 15518,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 688,
      continent: "EUROPE",
      country: "GREECE",
      year: 2013,
      arrival: 17920,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 689,
      continent: "EUROPE",
      country: "GREECE",
      year: 2014,
      arrival: 22033,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 690,
      continent: "EUROPE",
      country: "GREECE",
      year: 2015,
      arrival: 23599,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 691,
      continent: "EUROPE",
      country: "GREECE",
      year: 2016,
      arrival: 24799,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 692,
      continent: "EUROPE",
      country: "GREECE",
      year: 2017,
      arrival: 27194,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 693,
      continent: "EUROPE",
      country: "GREECE",
      year: 2018,
      arrival: 30123,
      latitude: 39.074208,
      longitude: 21.824312
    },
    {
      id: 694,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2008,
      arrival: 130,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 695,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2009,
      arrival: 114,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 696,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2010,
      arrival: 110,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 697,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2011,
      arrival: 118,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 698,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2012,
      arrival: 125,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 699,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2013,
      arrival: 128,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 700,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2014,
      arrival: 150,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 701,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2015,
      arrival: 155,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 702,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2016,
      arrival: 156,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 703,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2017,
      arrival: 168,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 704,
      continent: "NORTH AMERICA",
      country: "GRENADA",
      year: 2018,
      arrival: 185,
      latitude: 12.262776,
      longitude: -61.604171
    },
    {
      id: 705,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2008,
      arrival: 412,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 706,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2009,
      arrival: 347,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 707,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2010,
      arrival: 392,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 708,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2011,
      arrival: 317,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 709,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2012,
      arrival: 325,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 710,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2013,
      arrival: 487,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 711,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2014,
      arrival: 486,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 712,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2015,
      arrival: 512,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 713,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2016,
      arrival: 581,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 714,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2017,
      arrival: 650,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 715,
      continent: "NORTH AMERICA",
      country: "GUADELOUPE",
      year: 2018,
      arrival: 735,
      latitude: 16.995971,
      longitude: -62.067641
    },
    {
      id: 716,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2008,
      arrival: 1142,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 717,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2009,
      arrival: 1053,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 718,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2010,
      arrival: 1197,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 719,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2011,
      arrival: 1160,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 720,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2012,
      arrival: 1308,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 721,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2013,
      arrival: 1334,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 722,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2014,
      arrival: 1343,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 723,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2015,
      arrival: 1409,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 724,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2016,
      arrival: 1536,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 725,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2017,
      arrival: 1545,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 726,
      continent: "OCEANIA",
      country: "GUAM",
      year: 2018,
      arrival: 1549,
      latitude: 13.444304,
      longitude: 144.793731
    },
    {
      id: 727,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2008,
      arrival: 1715,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 728,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2009,
      arrival: 1393,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 729,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2010,
      arrival: 1384,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 730,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2011,
      arrival: 1434,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 731,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2012,
      arrival: 1491,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 732,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2013,
      arrival: 1516,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 733,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2014,
      arrival: 1739,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 734,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2015,
      arrival: 1865,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 735,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2016,
      arrival: 1906,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 736,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2017,
      arrival: 2113,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 737,
      continent: "NORTH AMERICA",
      country: "GUATEMALA",
      year: 2018,
      arrival: 2406,
      latitude: 15.783471,
      longitude: -90.230759
    },
    {
      id: 738,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2008,
      arrival: 130,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 739,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2009,
      arrival: 141,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 740,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2010,
      arrival: 152,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 741,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2011,
      arrival: 157,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 742,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2012,
      arrival: 177,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 743,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2013,
      arrival: 200,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 744,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2014,
      arrival: 206,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 745,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2015,
      arrival: 207,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 746,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2016,
      arrival: 235,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 747,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2017,
      arrival: 247,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 748,
      continent: "SOUTH AMERICA",
      country: "GUYANA",
      year: 2018,
      arrival: 287,
      latitude: 4.860416,
      longitude: -58.93018
    },
    {
      id: 749,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2008,
      arrival: 258,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 750,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2009,
      arrival: 387,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 751,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2010,
      arrival: 255,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 752,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2011,
      arrival: 349,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 753,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2012,
      arrival: 349,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 754,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2013,
      arrival: 420,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 755,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2014,
      arrival: 465,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 756,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2015,
      arrival: 516,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 757,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2016,
      arrival: 445,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 758,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2017,
      arrival: 467,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 759,
      continent: "NORTH AMERICA",
      country: "HAITI",
      year: 2018,
      arrival: 447,
      latitude: 18.971187,
      longitude: -72.285215
    },
    {
      id: 760,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2008,
      arrival: 29507,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 761,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2009,
      arrival: 29591,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 762,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2010,
      arrival: 36030,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 763,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2011,
      arrival: 41921,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 764,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2012,
      arrival: 48615,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 765,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2013,
      arrival: 54299,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 766,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2014,
      arrival: 60839,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 767,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2015,
      arrival: 59308,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 768,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2016,
      arrival: 56655,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 769,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2017,
      arrival: 58472,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 770,
      continent: "ASIA",
      country: "HONG KONG, CHINA",
      year: 2018,
      arrival: 65148,
      latitude: 22.396428,
      longitude: 114.109497
    },
    {
      id: 771,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2008,
      arrival: 8814,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 772,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2009,
      arrival: 9058,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 773,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2010,
      arrival: 9510,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 774,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2011,
      arrival: 10250,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 775,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2012,
      arrival: 10353,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 776,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2013,
      arrival: 10624,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 777,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2014,
      arrival: 12140,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 778,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2015,
      arrival: 14316,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 779,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2016,
      arrival: 15255,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 780,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2017,
      arrival: 15785,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 781,
      continent: "EUROPE",
      country: "HUNGARY",
      year: 2018,
      arrival: 17552,
      latitude: 47.162494,
      longitude: 19.503304
    },
    {
      id: 782,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2008,
      arrival: 502,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 783,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2009,
      arrival: 494,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 784,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2010,
      arrival: 489,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 785,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2011,
      arrival: 566,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 786,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2012,
      arrival: 673,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 787,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2013,
      arrival: 807,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 788,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2014,
      arrival: 997,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 789,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2015,
      arrival: 1289,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 790,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2016,
      arrival: 1792,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 791,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2017,
      arrival: 2225,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 792,
      continent: "EUROPE",
      country: "ICELAND",
      year: 2018,
      arrival: 2344,
      latitude: 64.963051,
      longitude: -19.020835
    },
    {
      id: 793,
      continent: "ASIA",
      country: "INDIA",
      year: 2008,
      arrival: 5283,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 794,
      continent: "ASIA",
      country: "INDIA",
      year: 2009,
      arrival: 5168,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 795,
      continent: "ASIA",
      country: "INDIA",
      year: 2010,
      arrival: 5776,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 796,
      continent: "ASIA",
      country: "INDIA",
      year: 2011,
      arrival: 6309,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 797,
      continent: "ASIA",
      country: "INDIA",
      year: 2012,
      arrival: 6578,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 798,
      continent: "ASIA",
      country: "INDIA",
      year: 2013,
      arrival: 6968,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 799,
      continent: "ASIA",
      country: "INDIA",
      year: 2014,
      arrival: 13107,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 800,
      continent: "ASIA",
      country: "INDIA",
      year: 2015,
      arrival: 13284,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 801,
      continent: "ASIA",
      country: "INDIA",
      year: 2016,
      arrival: 14570,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 802,
      continent: "ASIA",
      country: "INDIA",
      year: 2017,
      arrival: 15543,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 803,
      continent: "ASIA",
      country: "INDIA",
      year: 2018,
      arrival: 17423,
      latitude: 20.593684,
      longitude: 78.96288
    },
    {
      id: 804,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2008,
      arrival: 6234,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 805,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2009,
      arrival: 6324,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 806,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2010,
      arrival: 7003,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 807,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2011,
      arrival: 7650,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 808,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2012,
      arrival: 8044,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 809,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2013,
      arrival: 8802,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 810,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2014,
      arrival: 9435,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 811,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2015,
      arrival: 10407,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 812,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2016,
      arrival: 11519,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 813,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2017,
      arrival: 14040,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 814,
      continent: "ASIA",
      country: "INDONESIA",
      year: 2018,
      arrival: 15810,
      latitude: -0.789275,
      longitude: 113.921327
    },
    {
      id: 815,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2008,
      arrival: 2034,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 816,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2009,
      arrival: 2116,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 817,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2010,
      arrival: 2938,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 818,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2011,
      arrival: 3354,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 819,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2012,
      arrival: 3834,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 820,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2013,
      arrival: 4769,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 821,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2014,
      arrival: 4968,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 822,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2015,
      arrival: 5237,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 823,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2016,
      arrival: 4942,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 824,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2017,
      arrival: 4867,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 825,
      continent: "ASIA",
      country: "IRAN, ISLAMIC REPUBLIC OF",
      year: 2018,
      arrival: 7295,
      latitude: 32.427908,
      longitude: 53.688046
    },
    {
      id: 826,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2008,
      arrival: 8026,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 827,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2009,
      arrival: 7189,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 828,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2010,
      arrival: 7134,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 829,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2011,
      arrival: 7630,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 830,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2012,
      arrival: 7550,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 831,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2013,
      arrival: 8260,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 832,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2014,
      arrival: 8813,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 833,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2015,
      arrival: 9528,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 834,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2016,
      arrival: 10100,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 835,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2017,
      arrival: 10338,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 836,
      continent: "EUROPE",
      country: "IRELAND",
      year: 2018,
      arrival: 10926,
      latitude: 53.41291,
      longitude: -8.24389
    },
    {
      id: 837,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2008,
      arrival: 2572,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 838,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2009,
      arrival: 2321,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 839,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2010,
      arrival: 2803,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 840,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2011,
      arrival: 2820,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 841,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2012,
      arrival: 2886,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 842,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2013,
      arrival: 2962,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 843,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2014,
      arrival: 2927,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 844,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2015,
      arrival: 2799,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 845,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2016,
      arrival: 2900,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 846,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2017,
      arrival: 3613,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 847,
      continent: "ASIA",
      country: "ISRAEL",
      year: 2018,
      arrival: 4121,
      latitude: 31.046051,
      longitude: 34.851612
    },
    {
      id: 848,
      continent: "EUROPE",
      country: "ITALY",
      year: 2008,
      arrival: 42734,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 849,
      continent: "EUROPE",
      country: "ITALY",
      year: 2009,
      arrival: 43239,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 850,
      continent: "EUROPE",
      country: "ITALY",
      year: 2010,
      arrival: 43626,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 851,
      continent: "EUROPE",
      country: "ITALY",
      year: 2011,
      arrival: 46119,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 852,
      continent: "EUROPE",
      country: "ITALY",
      year: 2012,
      arrival: 46360,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 853,
      continent: "EUROPE",
      country: "ITALY",
      year: 2013,
      arrival: 47704,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 854,
      continent: "EUROPE",
      country: "ITALY",
      year: 2014,
      arrival: 48576,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 855,
      continent: "EUROPE",
      country: "ITALY",
      year: 2015,
      arrival: 50732,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 856,
      continent: "EUROPE",
      country: "ITALY",
      year: 2016,
      arrival: 52372,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 857,
      continent: "EUROPE",
      country: "ITALY",
      year: 2017,
      arrival: 58253,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 858,
      continent: "EUROPE",
      country: "ITALY",
      year: 2018,
      arrival: 61567,
      latitude: 41.87194,
      longitude: 12.56738
    },
    {
      id: 859,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2008,
      arrival: 1767,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 860,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2009,
      arrival: 1831,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 861,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2010,
      arrival: 1922,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 862,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2011,
      arrival: 1952,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 863,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2012,
      arrival: 1986,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 864,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2013,
      arrival: 2008,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 865,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2014,
      arrival: 2080,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 866,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2015,
      arrival: 2123,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 867,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2016,
      arrival: 2182,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 868,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2017,
      arrival: 2353,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 869,
      continent: "NORTH AMERICA",
      country: "JAMAICA",
      year: 2018,
      arrival: 2473,
      latitude: 18.109581,
      longitude: -77.297508
    },
    {
      id: 870,
      continent: "ASIA",
      country: "JAPAN",
      year: 2008,
      arrival: 8351,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 871,
      continent: "ASIA",
      country: "JAPAN",
      year: 2009,
      arrival: 6790,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 872,
      continent: "ASIA",
      country: "JAPAN",
      year: 2010,
      arrival: 8611,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 873,
      continent: "ASIA",
      country: "JAPAN",
      year: 2011,
      arrival: 6219,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 874,
      continent: "ASIA",
      country: "JAPAN",
      year: 2012,
      arrival: 8358,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 875,
      continent: "ASIA",
      country: "JAPAN",
      year: 2013,
      arrival: 10364,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 876,
      continent: "ASIA",
      country: "JAPAN",
      year: 2014,
      arrival: 13413,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 877,
      continent: "ASIA",
      country: "JAPAN",
      year: 2015,
      arrival: 19737,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 878,
      continent: "ASIA",
      country: "JAPAN",
      year: 2016,
      arrival: 24040,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 879,
      continent: "ASIA",
      country: "JAPAN",
      year: 2017,
      arrival: 28691,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 880,
      continent: "ASIA",
      country: "JAPAN",
      year: 2018,
      arrival: 31192,
      latitude: 36.204824,
      longitude: 138.252924
    },
    {
      id: 881,
      continent: "ASIA",
      country: "JORDAN",
      year: 2008,
      arrival: 3729,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 882,
      continent: "ASIA",
      country: "JORDAN",
      year: 2009,
      arrival: 3789,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 883,
      continent: "ASIA",
      country: "JORDAN",
      year: 2010,
      arrival: 4207,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 884,
      continent: "ASIA",
      country: "JORDAN",
      year: 2011,
      arrival: 3960,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 885,
      continent: "ASIA",
      country: "JORDAN",
      year: 2012,
      arrival: 4162,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 886,
      continent: "ASIA",
      country: "JORDAN",
      year: 2013,
      arrival: 3945,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 887,
      continent: "ASIA",
      country: "JORDAN",
      year: 2014,
      arrival: 3990,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 888,
      continent: "ASIA",
      country: "JORDAN",
      year: 2015,
      arrival: 3761,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 889,
      continent: "ASIA",
      country: "JORDAN",
      year: 2016,
      arrival: 3567,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 890,
      continent: "ASIA",
      country: "JORDAN",
      year: 2017,
      arrival: 3844,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 891,
      continent: "ASIA",
      country: "JORDAN",
      year: 2018,
      arrival: 4150,
      latitude: 30.585164,
      longitude: 36.238414
    },
    {
      id: 892,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2008,
      arrival: 4117,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 893,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2009,
      arrival: 3774,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 894,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2010,
      arrival: 4097,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 895,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2011,
      arrival: 5685,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 896,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2012,
      arrival: 6163,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 897,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2013,
      arrival: 6841,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 898,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2014,
      arrival: 6333,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 899,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2015,
      arrival: 6430,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 900,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2016,
      arrival: 6509,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 901,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2017,
      arrival: 7701,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 902,
      continent: "ASIA",
      country: "KAZAKHSTAN",
      year: 2018,
      arrival: 8789,
      latitude: 48.019573,
      longitude: 66.923684
    },
    {
      id: 903,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2008,
      arrival: 4,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 904,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2009,
      arrival: 4,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 905,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2010,
      arrival: 5,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 906,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2011,
      arrival: 5,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 907,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2012,
      arrival: 5,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 908,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2013,
      arrival: 6,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 909,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2014,
      arrival: 5,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 910,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2015,
      arrival: 4,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 911,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2016,
      arrival: 6,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 912,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2017,
      arrival: 6,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 913,
      continent: "OCEANIA",
      country: "KIRIBATI",
      year: 2018,
      arrival: 7,
      latitude: -3.370417,
      longitude: -168.734039
    },
    {
      id: 914,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2008,
      arrival: 6891,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 915,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2009,
      arrival: 7818,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 916,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2010,
      arrival: 8798,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 917,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2011,
      arrival: 9795,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 918,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2012,
      arrival: 11140,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 919,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2013,
      arrival: 12176,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 920,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2014,
      arrival: 14202,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 921,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2015,
      arrival: 13232,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 922,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2016,
      arrival: 17242,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 923,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2017,
      arrival: 13336,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 924,
      continent: "ASIA",
      country: "KOREA, REPUBLIC OF",
      year: 2018,
      arrival: 15347,
      latitude: 35.907757,
      longitude: 127.766922
    },
    {
      id: 925,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2008,
      arrival: 4736,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 926,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2009,
      arrival: 5088,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 927,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2010,
      arrival: 5208,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 928,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2011,
      arrival: 5574,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 929,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2012,
      arrival: 5729,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 930,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2013,
      arrival: 6217,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 931,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2014,
      arrival: 6528,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 932,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2015,
      arrival: 6941,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 933,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2016,
      arrival: 7055,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 934,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2017,
      arrival: 7407,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 935,
      continent: "ASIA",
      country: "KUWAIT",
      year: 2018,
      arrival: 8508,
      latitude: 29.31166,
      longitude: 47.481766
    },
    {
      id: 936,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2008,
      arrival: 2379,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 937,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2009,
      arrival: 2451,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 938,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2010,
      arrival: 1224,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 939,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2011,
      arrival: 3025,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 940,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2012,
      arrival: 3393,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 941,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2013,
      arrival: 4134,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 942,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2014,
      arrival: 3791,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 943,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2015,
      arrival: 4000,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 944,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2016,
      arrival: 3853,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 945,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2017,
      arrival: 4568,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 946,
      continent: "ASIA",
      country: "KYRGYZSTAN",
      year: 2018,
      arrival: 6947,
      latitude: 41.20438,
      longitude: 74.766098
    },
    {
      id: 947,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2008,
      arrival: 1295,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 948,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2009,
      arrival: 1239,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 949,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2010,
      arrival: 1670,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 950,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2011,
      arrival: 1894,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 951,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2012,
      arrival: 2291,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 952,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2013,
      arrival: 2700,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 953,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2014,
      arrival: 3164,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 954,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2015,
      arrival: 3543,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 955,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2016,
      arrival: 3315,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 956,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2017,
      arrival: 3257,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 957,
      continent: "ASIA",
      country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
      year: 2018,
      arrival: 3770,
      latitude: 19.85627,
      longitude: 102.495496
    },
    {
      id: 958,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2008,
      arrival: 1684,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 959,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2009,
      arrival: 1323,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 960,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2010,
      arrival: 1373,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 961,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2011,
      arrival: 1493,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 962,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2012,
      arrival: 1435,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 963,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2013,
      arrival: 1536,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 964,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2014,
      arrival: 1843,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 965,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2015,
      arrival: 2024,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 966,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2016,
      arrival: 1793,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 967,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2017,
      arrival: 1949,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 968,
      continent: "EUROPE",
      country: "LATVIA",
      year: 2018,
      arrival: 1946,
      latitude: 56.879635,
      longitude: 24.603189
    },
    {
      id: 969,
      continent: "ASIA",
      country: "LEBANON",
      year: 2008,
      arrival: 1333,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 970,
      continent: "ASIA",
      country: "LEBANON",
      year: 2009,
      arrival: 1844,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 971,
      continent: "ASIA",
      country: "LEBANON",
      year: 2010,
      arrival: 2168,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 972,
      continent: "ASIA",
      country: "LEBANON",
      year: 2011,
      arrival: 1655,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 973,
      continent: "ASIA",
      country: "LEBANON",
      year: 2012,
      arrival: 1366,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 974,
      continent: "ASIA",
      country: "LEBANON",
      year: 2013,
      arrival: 1274,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 975,
      continent: "ASIA",
      country: "LEBANON",
      year: 2014,
      arrival: 1355,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 976,
      continent: "ASIA",
      country: "LEBANON",
      year: 2015,
      arrival: 1518,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 977,
      continent: "ASIA",
      country: "LEBANON",
      year: 2016,
      arrival: 1688,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 978,
      continent: "ASIA",
      country: "LEBANON",
      year: 2017,
      arrival: 1857,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 979,
      continent: "ASIA",
      country: "LEBANON",
      year: 2018,
      arrival: 1964,
      latitude: 33.854721,
      longitude: 35.862285
    },
    {
      id: 980,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2008,
      arrival: 293,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 981,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2009,
      arrival: 344,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 982,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2010,
      arrival: 426,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 983,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2011,
      arrival: 398,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 984,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2012,
      arrival: 423,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 985,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2013,
      arrival: 433,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 986,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2014,
      arrival: 1079,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 987,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2015,
      arrival: 1082,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 988,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2016,
      arrival: 1196,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 989,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2017,
      arrival: 1137,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 990,
      continent: "AFRICA",
      country: "LESOTHO",
      year: 2018,
      arrival: 1173,
      latitude: -29.609988,
      longitude: 28.233608
    },
    {
      id: 991,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2008,
      arrival: 73,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 992,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2009,
      arrival: 67,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 993,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2010,
      arrival: 64,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 994,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2011,
      arrival: 67,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 995,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2012,
      arrival: 62,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 996,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2013,
      arrival: 60,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 997,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2014,
      arrival: 61,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 998,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2015,
      arrival: 57,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 999,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2016,
      arrival: 69,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 1000,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2017,
      arrival: 79,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 1001,
      continent: "EUROPE",
      country: "LIECHTENSTEIN",
      year: 2018,
      arrival: 85,
      latitude: 47.166,
      longitude: 9.555373
    },
    {
      id: 1002,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2008,
      arrival: 1611,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1003,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2009,
      arrival: 1341,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1004,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2010,
      arrival: 1507,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1005,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2011,
      arrival: 1775,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1006,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2012,
      arrival: 1900,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1007,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2013,
      arrival: 2012,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1008,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2014,
      arrival: 2063,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1009,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2015,
      arrival: 2071,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1010,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2016,
      arrival: 2296,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1011,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2017,
      arrival: 2523,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1012,
      continent: "EUROPE",
      country: "LITHUANIA",
      year: 2018,
      arrival: 2825,
      latitude: 55.169438,
      longitude: 23.881275
    },
    {
      id: 1013,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2008,
      arrival: 877,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1014,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2009,
      arrival: 847,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1015,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2010,
      arrival: 805,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1016,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2011,
      arrival: 874,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1017,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2012,
      arrival: 950,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1018,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2013,
      arrival: 945,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1019,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2014,
      arrival: 1038,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1020,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2015,
      arrival: 1090,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1021,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2016,
      arrival: 1054,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1022,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2017,
      arrival: 1046,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1023,
      continent: "EUROPE",
      country: "LUXEMBOURG",
      year: 2018,
      arrival: 1018,
      latitude: 49.815273,
      longitude: 6.129583
    },
    {
      id: 1024,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2008,
      arrival: 10610,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1025,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2009,
      arrival: 10402,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1026,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2010,
      arrival: 11926,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1027,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2011,
      arrival: 12925,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1028,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2012,
      arrival: 13577,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1029,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2013,
      arrival: 14268,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1030,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2014,
      arrival: 14566,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1031,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2015,
      arrival: 14308,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1032,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2016,
      arrival: 15704,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1033,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2017,
      arrival: 17255,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1034,
      continent: "ASIA",
      country: "MACAO, CHINA",
      year: 2018,
      arrival: 18493,
      latitude: 22.198745,
      longitude: 113.543873
    },
    {
      id: 1035,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2008,
      arrival: 375,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1036,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2009,
      arrival: 163,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1037,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2010,
      arrival: 196,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1038,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2011,
      arrival: 225,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1039,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2012,
      arrival: 256,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1040,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2013,
      arrival: 196,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1041,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2014,
      arrival: 222,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1042,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2015,
      arrival: 244,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1043,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2016,
      arrival: 293,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1044,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2017,
      arrival: 255,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1045,
      continent: "AFRICA",
      country: "MADAGASCAR",
      year: 2018,
      arrival: 291,
      latitude: -18.766947,
      longitude: 46.869107
    },
    {
      id: 1046,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2008,
      arrival: 742,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1047,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2009,
      arrival: 755,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1048,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2010,
      arrival: 746,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1049,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2011,
      arrival: 767,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1050,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2012,
      arrival: 770,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1051,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2013,
      arrival: 795,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1052,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2014,
      arrival: 819,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1053,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2015,
      arrival: 805,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1054,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2016,
      arrival: 849,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1055,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2017,
      arrival: 837,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1056,
      continent: "AFRICA",
      country: "MALAWI",
      year: 2018,
      arrival: 871,
      latitude: -13.254308,
      longitude: 34.301525
    },
    {
      id: 1057,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2008,
      arrival: 22052,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1058,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2009,
      arrival: 23646,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1059,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2010,
      arrival: 24577,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1060,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2011,
      arrival: 24714,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1061,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2012,
      arrival: 25033,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1062,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2013,
      arrival: 25715,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1063,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2014,
      arrival: 27437,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1064,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2015,
      arrival: 25721,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1065,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2016,
      arrival: 26757,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1066,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2017,
      arrival: 25948,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1067,
      continent: "ASIA",
      country: "MALAYSIA",
      year: 2018,
      arrival: 25832,
      latitude: 4.210484,
      longitude: 101.975766
    },
    {
      id: 1068,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2008,
      arrival: 683,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1069,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2009,
      arrival: 656,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1070,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2010,
      arrival: 792,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1071,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2011,
      arrival: 931,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1072,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2012,
      arrival: 958,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1073,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2013,
      arrival: 1125,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1074,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2014,
      arrival: 1205,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1075,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2015,
      arrival: 1234,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1076,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2016,
      arrival: 1286,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1077,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2017,
      arrival: 1390,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1078,
      continent: "ASIA",
      country: "MALDIVES",
      year: 2018,
      arrival: 1484,
      latitude: 3.202778,
      longitude: 73.22068
    },
    {
      id: 1079,
      continent: "EUROPE",
      country: "MALTA",
      year: 2008,
      arrival: 1291,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1080,
      continent: "EUROPE",
      country: "MALTA",
      year: 2009,
      arrival: 1182,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1081,
      continent: "EUROPE",
      country: "MALTA",
      year: 2010,
      arrival: 1339,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1082,
      continent: "EUROPE",
      country: "MALTA",
      year: 2011,
      arrival: 1415,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1083,
      continent: "EUROPE",
      country: "MALTA",
      year: 2012,
      arrival: 1443,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1084,
      continent: "EUROPE",
      country: "MALTA",
      year: 2013,
      arrival: 1582,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1085,
      continent: "EUROPE",
      country: "MALTA",
      year: 2014,
      arrival: 1690,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1086,
      continent: "EUROPE",
      country: "MALTA",
      year: 2015,
      arrival: 1783,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1087,
      continent: "EUROPE",
      country: "MALTA",
      year: 2016,
      arrival: 1966,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1088,
      continent: "EUROPE",
      country: "MALTA",
      year: 2017,
      arrival: 2274,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1089,
      continent: "EUROPE",
      country: "MALTA",
      year: 2018,
      arrival: 2599,
      latitude: 35.937496,
      longitude: 14.375416
    },
    {
      id: 1090,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2008,
      arrival: 481,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1091,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2009,
      arrival: 442,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1092,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2010,
      arrival: 478,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1093,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2011,
      arrival: 497,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1094,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2012,
      arrival: 488,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1095,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2013,
      arrival: 490,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1096,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2014,
      arrival: 490,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1097,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2015,
      arrival: 487,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1098,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2016,
      arrival: 519,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1099,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2017,
      arrival: 536,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1100,
      continent: "NORTH AMERICA",
      country: "MARTINIQUE",
      year: 2018,
      arrival: 537,
      latitude: 14.641528,
      longitude: -61.024174
    },
    {
      id: 1101,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2008,
      arrival: 930,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1102,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2009,
      arrival: 871,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1103,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2010,
      arrival: 935,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1104,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2011,
      arrival: 965,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1105,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2012,
      arrival: 965,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1106,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2013,
      arrival: 993,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1107,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2014,
      arrival: 1038,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1108,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2015,
      arrival: 1151,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1109,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2016,
      arrival: 1275,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1110,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2017,
      arrival: 1342,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1111,
      continent: "AFRICA",
      country: "MAURITIUS",
      year: 2018,
      arrival: 1399,
      latitude: -20.348404,
      longitude: 57.552152
    },
    {
      id: 1112,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2008,
      arrival: 22931,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1113,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2009,
      arrival: 22346,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1114,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2010,
      arrival: 23290,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1115,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2011,
      arrival: 23403,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1116,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2012,
      arrival: 23403,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1117,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2013,
      arrival: 24151,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1118,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2014,
      arrival: 29346,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1119,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2015,
      arrival: 32093,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1120,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2016,
      arrival: 35079,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1121,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2017,
      arrival: 39291,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1122,
      continent: "NORTH AMERICA",
      country: "MEXICO",
      year: 2018,
      arrival: 41313,
      latitude: 23.634501,
      longitude: -102.552784
    },
    {
      id: 1123,
      continent: "OCEANIA",
      country: "MICRONESIA, FEDERATED STATES OF",
      year: 2018,
      arrival: 19,
      latitude: 7.425554,
      longitude: 150.550812
    },
    {
      id: 1124,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2008,
      arrival: 73,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1125,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2009,
      arrival: 60,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1126,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2010,
      arrival: 64,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1127,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2011,
      arrival: 75,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1128,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2012,
      arrival: 89,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1129,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2013,
      arrival: 96,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1130,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2014,
      arrival: 94,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1131,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2015,
      arrival: 94,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1132,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2016,
      arrival: 121,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1133,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2017,
      arrival: 145,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1134,
      continent: "EUROPE",
      country: "MOLDOVA, REPUBLIC OF",
      year: 2018,
      arrival: 160,
      latitude: 47.411631,
      longitude: 28.369885
    },
    {
      id: 1135,
      continent: "EUROPE",
      country: "MONACO",
      year: 2008,
      arrival: 324,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1136,
      continent: "EUROPE",
      country: "MONACO",
      year: 2009,
      arrival: 265,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1137,
      continent: "EUROPE",
      country: "MONACO",
      year: 2010,
      arrival: 279,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1138,
      continent: "EUROPE",
      country: "MONACO",
      year: 2011,
      arrival: 295,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1139,
      continent: "EUROPE",
      country: "MONACO",
      year: 2012,
      arrival: 292,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1140,
      continent: "EUROPE",
      country: "MONACO",
      year: 2013,
      arrival: 328,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1141,
      continent: "EUROPE",
      country: "MONACO",
      year: 2014,
      arrival: 329,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1142,
      continent: "EUROPE",
      country: "MONACO",
      year: 2015,
      arrival: 331,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1143,
      continent: "EUROPE",
      country: "MONACO",
      year: 2016,
      arrival: 336,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1144,
      continent: "EUROPE",
      country: "MONACO",
      year: 2017,
      arrival: 355,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1145,
      continent: "EUROPE",
      country: "MONACO",
      year: 2018,
      arrival: 347,
      latitude: 43.750298,
      longitude: 7.412841
    },
    {
      id: 1146,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2008,
      arrival: 469,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1147,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2009,
      arrival: 465,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1148,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2010,
      arrival: 557,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1149,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2011,
      arrival: 627,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1150,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2012,
      arrival: 624,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1151,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2013,
      arrival: 515,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1152,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2014,
      arrival: 506,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1153,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2015,
      arrival: 467,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1154,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2016,
      arrival: 471,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1155,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2017,
      arrival: 543,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1156,
      continent: "ASIA",
      country: "MONGOLIA",
      year: 2018,
      arrival: 598,
      latitude: 46.862496,
      longitude: 103.846656
    },
    {
      id: 1157,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2008,
      arrival: 1031,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1158,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2009,
      arrival: 1044,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1159,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2010,
      arrival: 1088,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1160,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2011,
      arrival: 1201,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1161,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2012,
      arrival: 1264,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1162,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2013,
      arrival: 1324,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1163,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2014,
      arrival: 1350,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1164,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2015,
      arrival: 1560,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1165,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2016,
      arrival: 1662,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1166,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2017,
      arrival: 1877,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1167,
      continent: "EUROPE",
      country: "MONTENEGRO",
      year: 2018,
      arrival: 2077,
      latitude: 42.708678,
      longitude: 19.37439
    },
    {
      id: 1168,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2008,
      arrival: 7,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1169,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2009,
      arrival: 6,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1170,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2010,
      arrival: 6,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1171,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2011,
      arrival: 5,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1172,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2012,
      arrival: 7,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1173,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2013,
      arrival: 7,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1174,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2014,
      arrival: 9,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1175,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2015,
      arrival: 9,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1176,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2016,
      arrival: 9,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1177,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2017,
      arrival: 9,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1178,
      continent: "NORTH AMERICA",
      country: "MONTSERRAT",
      year: 2018,
      arrival: 9,
      latitude: 16.742498,
      longitude: -62.187366
    },
    {
      id: 1179,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2008,
      arrival: 7879,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1180,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2009,
      arrival: 8341,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1181,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2010,
      arrival: 9288,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1182,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2011,
      arrival: 9342,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1183,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2012,
      arrival: 9375,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1184,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2013,
      arrival: 10046,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1185,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2014,
      arrival: 10283,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1186,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2015,
      arrival: 10177,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1187,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2016,
      arrival: 10332,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1188,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2017,
      arrival: 11349,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1189,
      continent: "AFRICA",
      country: "MOROCCO",
      year: 2018,
      arrival: 12289,
      latitude: 31.791702,
      longitude: -7.09262
    },
    {
      id: 1190,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2008,
      arrival: 1193,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1191,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2009,
      arrival: 1461,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1192,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2010,
      arrival: 1718,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1193,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2011,
      arrival: 1902,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1194,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2012,
      arrival: 2113,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1195,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2013,
      arrival: 1886,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1196,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2014,
      arrival: 1661,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1197,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2015,
      arrival: 1552,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1198,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2016,
      arrival: 1639,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1199,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2017,
      arrival: 1447,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1200,
      continent: "AFRICA",
      country: "MOZAMBIQUE",
      year: 2018,
      arrival: 2743,
      latitude: -18.665695,
      longitude: 35.529562
    },
    {
      id: 1201,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2008,
      arrival: 731,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1202,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2009,
      arrival: 763,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1203,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2010,
      arrival: 792,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1204,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2011,
      arrival: 816,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1205,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2012,
      arrival: 1059,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1206,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2013,
      arrival: 2044,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1207,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2014,
      arrival: 3081,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1208,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2015,
      arrival: 4681,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1209,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2016,
      arrival: 2907,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1210,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2017,
      arrival: 3443,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1211,
      continent: "ASIA",
      country: "MYANMAR",
      year: 2018,
      arrival: 3551,
      latitude: 21.913965,
      longitude: 95.956223
    },
    {
      id: 1212,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2008,
      arrival: 931,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1213,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2009,
      arrival: 980,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1214,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2010,
      arrival: 984,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1215,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2011,
      arrival: 1027,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1216,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2012,
      arrival: 1079,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1217,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2013,
      arrival: 1176,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1218,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2014,
      arrival: 1320,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1219,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2015,
      arrival: 1388,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1220,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2016,
      arrival: 1469,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1221,
      continent: "AFRICA",
      country: "NAMIBIA",
      year: 2017,
      arrival: 1499,
      latitude: -22.95764,
      longitude: 18.49041
    },
    {
      id: 1222,
      continent: "ASIA",
      country: "NEPAL",
      year: 2008,
      arrival: 500,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1223,
      continent: "ASIA",
      country: "NEPAL",
      year: 2009,
      arrival: 510,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1224,
      continent: "ASIA",
      country: "NEPAL",
      year: 2010,
      arrival: 603,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1225,
      continent: "ASIA",
      country: "NEPAL",
      year: 2011,
      arrival: 736,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1226,
      continent: "ASIA",
      country: "NEPAL",
      year: 2012,
      arrival: 803,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1227,
      continent: "ASIA",
      country: "NEPAL",
      year: 2013,
      arrival: 798,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1228,
      continent: "ASIA",
      country: "NEPAL",
      year: 2014,
      arrival: 790,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1229,
      continent: "ASIA",
      country: "NEPAL",
      year: 2015,
      arrival: 539,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1230,
      continent: "ASIA",
      country: "NEPAL",
      year: 2016,
      arrival: 753,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1231,
      continent: "ASIA",
      country: "NEPAL",
      year: 2017,
      arrival: 940,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1232,
      continent: "ASIA",
      country: "NEPAL",
      year: 2018,
      arrival: 1173,
      latitude: 28.394857,
      longitude: 84.124008
    },
    {
      id: 1233,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2008,
      arrival: 10104,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1234,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2009,
      arrival: 9921,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1235,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2010,
      arrival: 10883,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1236,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2011,
      arrival: 11300,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1237,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2012,
      arrival: 11680,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1238,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2013,
      arrival: 12783,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1239,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2014,
      arrival: 13925,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1240,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2015,
      arrival: 15007,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1241,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2016,
      arrival: 15828,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1242,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2017,
      arrival: 17924,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1243,
      continent: "EUROPE",
      country: "NETHERLANDS",
      year: 2018,
      arrival: 18780,
      latitude: 52.132633,
      longitude: 5.291266
    },
    {
      id: 1244,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2008,
      arrival: 104,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1245,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2009,
      arrival: 99,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1246,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2010,
      arrival: 99,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1247,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2011,
      arrival: 112,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1248,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2012,
      arrival: 112,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1249,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2013,
      arrival: 108,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1250,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2014,
      arrival: 107,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1251,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2015,
      arrival: 114,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1252,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2016,
      arrival: 116,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1253,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2017,
      arrival: 121,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1254,
      continent: "OCEANIA",
      country: "NEW CALEDONIA",
      year: 2018,
      arrival: 120,
      latitude: -20.904305,
      longitude: 165.618042
    },
    {
      id: 1255,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2008,
      arrival: 2483,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1256,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2009,
      arrival: 2473,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1257,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2010,
      arrival: 2530,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1258,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2011,
      arrival: 2617,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1259,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2012,
      arrival: 2574,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1260,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2013,
      arrival: 2710,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1261,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2014,
      arrival: 2854,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1262,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2015,
      arrival: 3129,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1263,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2016,
      arrival: 3494,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1264,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2017,
      arrival: 3723,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1265,
      continent: "OCEANIA",
      country: "NEW ZEALAND",
      year: 2018,
      arrival: 3858,
      latitude: -40.900557,
      longitude: 174.885971
    },
    {
      id: 1266,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2008,
      arrival: 858,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1267,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2009,
      arrival: 932,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1268,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2010,
      arrival: 1011,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1269,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2011,
      arrival: 1060,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1270,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2012,
      arrival: 1180,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1271,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2013,
      arrival: 1229,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1272,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2014,
      arrival: 1330,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1273,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2015,
      arrival: 1386,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1274,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2016,
      arrival: 1504,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1275,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2017,
      arrival: 1787,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1276,
      continent: "NORTH AMERICA",
      country: "NICARAGUA",
      year: 2018,
      arrival: 1256,
      latitude: 12.865416,
      longitude: -85.207229
    },
    {
      id: 1277,
      continent: "AFRICA",
      country: "NIGER",
      year: 2008,
      arrival: 73,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1278,
      continent: "AFRICA",
      country: "NIGER",
      year: 2009,
      arrival: 66,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1279,
      continent: "AFRICA",
      country: "NIGER",
      year: 2010,
      arrival: 74,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1280,
      continent: "AFRICA",
      country: "NIGER",
      year: 2011,
      arrival: 82,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1281,
      continent: "AFRICA",
      country: "NIGER",
      year: 2012,
      arrival: 94,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1282,
      continent: "AFRICA",
      country: "NIGER",
      year: 2013,
      arrival: 123,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1283,
      continent: "AFRICA",
      country: "NIGER",
      year: 2014,
      arrival: 135,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1284,
      continent: "AFRICA",
      country: "NIGER",
      year: 2015,
      arrival: 135,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1285,
      continent: "AFRICA",
      country: "NIGER",
      year: 2016,
      arrival: 152,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1286,
      continent: "AFRICA",
      country: "NIGER",
      year: 2017,
      arrival: 164,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1287,
      continent: "AFRICA",
      country: "NIGER",
      year: 2018,
      arrival: 157,
      latitude: 17.607789,
      longitude: 8.081666
    },
    {
      id: 1288,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2008,
      arrival: 255,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1289,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2009,
      arrival: 259,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1290,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2010,
      arrival: 262,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1291,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2011,
      arrival: 327,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1292,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2012,
      arrival: 351,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1293,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2013,
      arrival: 400,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1294,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2014,
      arrival: 425,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1295,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2015,
      arrival: 486,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1296,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2016,
      arrival: 510,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1297,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2017,
      arrival: 631,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1298,
      continent: "EUROPE",
      country: "NORTH MACEDONIA",
      year: 2018,
      arrival: 707,
      latitude: 41.608635,
      longitude: 21.745275
    },
    {
      id: 1299,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2008,
      arrival: 397,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1300,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2009,
      arrival: 354,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1301,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2010,
      arrival: 379,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1302,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2011,
      arrival: 341,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1303,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2012,
      arrival: 401,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1304,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2013,
      arrival: 439,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1305,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2014,
      arrival: 460,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1306,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2015,
      arrival: 479,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1307,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2016,
      arrival: 531,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1308,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2017,
      arrival: 660,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1309,
      continent: "EUROPE",
      country: "NORTHERN MARIANA ISLANDS",
      year: 2018,
      arrival: 518,
      latitude: 17.33083,
      longitude: 145.38469
    },
    {
      id: 1310,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2008,
      arrival: 4347,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1311,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2009,
      arrival: 4346,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1312,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2010,
      arrival: 4767,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1313,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2011,
      arrival: 4963,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1314,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2012,
      arrival: 4538,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1315,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2013,
      arrival: 4778,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1316,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2014,
      arrival: 4855,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1317,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2015,
      arrival: 5361,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1318,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2016,
      arrival: 5960,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1319,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2017,
      arrival: 6252,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1320,
      continent: "EUROPE",
      country: "NORWAY",
      year: 2018,
      arrival: 5688,
      latitude: 60.472024,
      longitude: 8.468946
    },
    {
      id: 1321,
      continent: "ASIA",
      country: "OMAN",
      year: 2008,
      arrival: 1373,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1322,
      continent: "ASIA",
      country: "OMAN",
      year: 2009,
      arrival: 1521,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1323,
      continent: "ASIA",
      country: "OMAN",
      year: 2010,
      arrival: 1441,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1324,
      continent: "ASIA",
      country: "OMAN",
      year: 2011,
      arrival: 1018,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1325,
      continent: "ASIA",
      country: "OMAN",
      year: 2012,
      arrival: 1241,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1326,
      continent: "ASIA",
      country: "OMAN",
      year: 2013,
      arrival: 1392,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1327,
      continent: "ASIA",
      country: "OMAN",
      year: 2014,
      arrival: 1611,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1328,
      continent: "ASIA",
      country: "OMAN",
      year: 2015,
      arrival: 1909,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1329,
      continent: "ASIA",
      country: "OMAN",
      year: 2016,
      arrival: 2335,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1330,
      continent: "ASIA",
      country: "OMAN",
      year: 2017,
      arrival: 2316,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1331,
      continent: "ASIA",
      country: "OMAN",
      year: 2018,
      arrival: 2301,
      latitude: 21.512583,
      longitude: 55.923255
    },
    {
      id: 1332,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2008,
      arrival: 81,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1333,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2009,
      arrival: 71,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1334,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2010,
      arrival: 85,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1335,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2011,
      arrival: 111,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1336,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2012,
      arrival: 120,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1337,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2013,
      arrival: 108,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1338,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2014,
      arrival: 140,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1339,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2015,
      arrival: 162,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1340,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2016,
      arrival: 138,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1341,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2017,
      arrival: 123,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1342,
      continent: "OCEANIA",
      country: "PALAU",
      year: 2018,
      arrival: 106,
      latitude: 7.51498,
      longitude: 134.58252
    },
    {
      id: 1343,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2008,
      arrival: 1247,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1344,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2009,
      arrival: 1200,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1345,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2010,
      arrival: 1324,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1346,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2011,
      arrival: 1473,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1347,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2012,
      arrival: 1606,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1348,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2013,
      arrival: 1658,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1349,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2014,
      arrival: 1745,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1350,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2015,
      arrival: 2110,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1351,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2016,
      arrival: 1921,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1352,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2017,
      arrival: 1843,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1353,
      continent: "NORTH AMERICA",
      country: "PANAMA",
      year: 2018,
      arrival: 1785,
      latitude: 8.537981,
      longitude: -80.782127
    },
    {
      id: 1354,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2008,
      arrival: 114,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1355,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2009,
      arrival: 121,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1356,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2010,
      arrival: 140,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1357,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2011,
      arrival: 158,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1358,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2012,
      arrival: 168,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1359,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2013,
      arrival: 174,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1360,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2014,
      arrival: 182,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1361,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2015,
      arrival: 183,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1362,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2016,
      arrival: 179,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1363,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2017,
      arrival: 139,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1364,
      continent: "OCEANIA",
      country: "PAPUA NEW GUINEA",
      year: 2018,
      arrival: 140,
      latitude: -6.314993,
      longitude: 143.95555
    },
    {
      id: 1365,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2008,
      arrival: 428,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1366,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2009,
      arrival: 439,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1367,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2010,
      arrival: 465,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1368,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2011,
      arrival: 524,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1369,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2012,
      arrival: 579,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1370,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2013,
      arrival: 610,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1371,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2014,
      arrival: 649,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1372,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2015,
      arrival: 1215,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1373,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2016,
      arrival: 1308,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1374,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2017,
      arrival: 1584,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1375,
      continent: "SOUTH AMERICA",
      country: "PARAGUAY",
      year: 2018,
      arrival: 1181,
      latitude: -23.442503,
      longitude: -58.443832
    },
    {
      id: 1376,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2008,
      arrival: 2058,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1377,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2009,
      arrival: 2140,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1378,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2010,
      arrival: 2299,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1379,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2011,
      arrival: 2598,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1380,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2012,
      arrival: 2846,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1381,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2013,
      arrival: 3164,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1382,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2014,
      arrival: 3215,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1383,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2015,
      arrival: 3456,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1384,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2016,
      arrival: 3744,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1385,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2017,
      arrival: 4032,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1386,
      continent: "SOUTH AMERICA",
      country: "PERU",
      year: 2018,
      arrival: 4419,
      latitude: -9.189967,
      longitude: -75.015152
    },
    {
      id: 1387,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2008,
      arrival: 3139,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1388,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2009,
      arrival: 3017,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1389,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2010,
      arrival: 3520,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1390,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2011,
      arrival: 3917,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1391,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2012,
      arrival: 4273,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1392,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2013,
      arrival: 4681,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1393,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2014,
      arrival: 4833,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1394,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2015,
      arrival: 5361,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1395,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2016,
      arrival: 5967,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1396,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2017,
      arrival: 6621,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1397,
      continent: "ASIA",
      country: "PHILIPPINES",
      year: 2018,
      arrival: 7168,
      latitude: 12.879721,
      longitude: 121.774017
    },
    {
      id: 1398,
      continent: "EUROPE",
      country: "POLAND",
      year: 2008,
      arrival: 12960,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1399,
      continent: "EUROPE",
      country: "POLAND",
      year: 2009,
      arrival: 11890,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1400,
      continent: "EUROPE",
      country: "POLAND",
      year: 2010,
      arrival: 12470,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1401,
      continent: "EUROPE",
      country: "POLAND",
      year: 2011,
      arrival: 13350,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1402,
      continent: "EUROPE",
      country: "POLAND",
      year: 2012,
      arrival: 14840,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1403,
      continent: "EUROPE",
      country: "POLAND",
      year: 2013,
      arrival: 15800,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1404,
      continent: "EUROPE",
      country: "POLAND",
      year: 2014,
      arrival: 16000,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1405,
      continent: "EUROPE",
      country: "POLAND",
      year: 2015,
      arrival: 16728,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1406,
      continent: "EUROPE",
      country: "POLAND",
      year: 2016,
      arrival: 17471,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1407,
      continent: "EUROPE",
      country: "POLAND",
      year: 2017,
      arrival: 18258,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1408,
      continent: "EUROPE",
      country: "POLAND",
      year: 2018,
      arrival: 19622,
      latitude: 51.919438,
      longitude: 19.145136
    },
    {
      id: 1409,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2008,
      arrival: 6962,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1410,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2009,
      arrival: 6439,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1411,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2010,
      arrival: 6756,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1412,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2011,
      arrival: 7264,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1413,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2012,
      arrival: 7503,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1414,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2013,
      arrival: 9177,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1415,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2014,
      arrival: 10497,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1416,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2015,
      arrival: 11723,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1417,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2016,
      arrival: 13359,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1418,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2017,
      arrival: 15432,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1419,
      continent: "EUROPE",
      country: "PORTUGAL",
      year: 2018,
      arrival: 16186,
      latitude: 39.399872,
      longitude: -8.224454
    },
    {
      id: 1420,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2008,
      arrival: 3716,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1421,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2009,
      arrival: 3183,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1422,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2010,
      arrival: 3186,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1423,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2011,
      arrival: 3048,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1424,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2012,
      arrival: 3069,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1425,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2013,
      arrival: 3172,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1426,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2014,
      arrival: 3246,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1427,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2015,
      arrival: 3542,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1428,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2016,
      arrival: 3736,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1429,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2017,
      arrival: 3513,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1430,
      continent: "NORTH AMERICA",
      country: "PUERTO RICO",
      year: 2018,
      arrival: 3068,
      latitude: 18.220833,
      longitude: -66.590149
    },
    {
      id: 1431,
      continent: "AFRICA",
      country: "REUNION",
      year: 2008,
      arrival: 396,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1432,
      continent: "AFRICA",
      country: "REUNION",
      year: 2009,
      arrival: 422,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1433,
      continent: "AFRICA",
      country: "REUNION",
      year: 2010,
      arrival: 420,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1434,
      continent: "AFRICA",
      country: "REUNION",
      year: 2011,
      arrival: 471,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1435,
      continent: "AFRICA",
      country: "REUNION",
      year: 2012,
      arrival: 447,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1436,
      continent: "AFRICA",
      country: "REUNION",
      year: 2013,
      arrival: 416,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1437,
      continent: "AFRICA",
      country: "REUNION",
      year: 2014,
      arrival: 406,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1438,
      continent: "AFRICA",
      country: "REUNION",
      year: 2015,
      arrival: 426,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1439,
      continent: "AFRICA",
      country: "REUNION",
      year: 2016,
      arrival: 458,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1440,
      continent: "AFRICA",
      country: "REUNION",
      year: 2017,
      arrival: 508,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1441,
      continent: "AFRICA",
      country: "REUNION",
      year: 2018,
      arrival: 535,
      latitude: -21.115141,
      longitude: 55.536384
    },
    {
      id: 1442,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2008,
      arrival: 8862,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1443,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2009,
      arrival: 7575,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1444,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2010,
      arrival: 7498,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1445,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2011,
      arrival: 7611,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1446,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2012,
      arrival: 7937,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1447,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2013,
      arrival: 8019,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1448,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2014,
      arrival: 8442,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1449,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2015,
      arrival: 9331,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1450,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2016,
      arrival: 10223,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1451,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2017,
      arrival: 10926,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1452,
      continent: "EUROPE",
      country: "ROMANIA",
      year: 2018,
      arrival: 11720,
      latitude: 45.943161,
      longitude: 24.96676
    },
    {
      id: 1453,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2008,
      arrival: 23676,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1454,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2009,
      arrival: 21339,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1455,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2010,
      arrival: 22281,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1456,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2011,
      arrival: 24932,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1457,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2012,
      arrival: 28177,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1458,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2013,
      arrival: 30792,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1459,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2014,
      arrival: 32421,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1460,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2015,
      arrival: 33729,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1461,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2016,
      arrival: 24571,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1462,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2017,
      arrival: 24390,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1463,
      continent: "EUROPE",
      country: "RUSSIAN FEDERATION",
      year: 2018,
      arrival: 24551,
      latitude: 61.52401,
      longitude: 105.318756
    },
    {
      id: 1464,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2008,
      arrival: 128,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1465,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2009,
      arrival: 83,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1466,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2010,
      arrival: 98,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1467,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2011,
      arrival: 104,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1468,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2012,
      arrival: 104,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1469,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2013,
      arrival: 107,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1470,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2014,
      arrival: 113,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1471,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2015,
      arrival: 118,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1472,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2016,
      arrival: 116,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1473,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2017,
      arrival: 115,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1474,
      continent: "NORTH AMERICA",
      country: "SAINT KITTS AND NEVIS",
      year: 2018,
      arrival: 125,
      latitude: 17.357822,
      longitude: -62.782998
    },
    {
      id: 1475,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2008,
      arrival: 296,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1476,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2009,
      arrival: 278,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1477,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2010,
      arrival: 306,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1478,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2011,
      arrival: 312,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1479,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2012,
      arrival: 307,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1480,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2013,
      arrival: 319,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1481,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2014,
      arrival: 338,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1482,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2015,
      arrival: 345,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1483,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2016,
      arrival: 348,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1484,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2017,
      arrival: 386,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1485,
      continent: "NORTH AMERICA",
      country: "SAINT LUCIA",
      year: 2018,
      arrival: 395,
      latitude: 13.909444,
      longitude: -60.978893
    },
    {
      id: 1486,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2008,
      arrival: 84,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1487,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2009,
      arrival: 75,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1488,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2010,
      arrival: 72,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1489,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2011,
      arrival: 74,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1490,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2012,
      arrival: 74,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1491,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2013,
      arrival: 72,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1492,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2014,
      arrival: 71,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1493,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2015,
      arrival: 75,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1494,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2016,
      arrival: 79,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1495,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2017,
      arrival: 76,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1496,
      continent: "NORTH AMERICA",
      country: "SAINT VINCENT AND THE GRENADINES",
      year: 2018,
      arrival: 80,
      latitude: 12.984305,
      longitude: -61.287228
    },
    {
      id: 1497,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2008,
      arrival: 118,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1498,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2009,
      arrival: 122,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1499,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2010,
      arrival: 122,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1500,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2011,
      arrival: 121,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1501,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2012,
      arrival: 126,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1502,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2013,
      arrival: 116,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1503,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2014,
      arrival: 120,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1504,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2015,
      arrival: 128,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1505,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2016,
      arrival: 134,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1506,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2017,
      arrival: 146,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1507,
      continent: "OCEANIA",
      country: "SAMOA",
      year: 2018,
      arrival: 164,
      latitude: -13.759029,
      longitude: -172.104629
    },
    {
      id: 1508,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2008,
      arrival: 115,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1509,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2009,
      arrival: 151,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1510,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2010,
      arrival: 120,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1511,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2011,
      arrival: 156,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1512,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2012,
      arrival: 139,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1513,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2013,
      arrival: 71,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1514,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2014,
      arrival: 75,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1515,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2015,
      arrival: 54,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1516,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2016,
      arrival: 60,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1517,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2017,
      arrival: 78,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1518,
      continent: "EUROPE",
      country: "SAN MARINO",
      year: 2018,
      arrival: 84,
      latitude: 43.94236,
      longitude: 12.457777
    },
    {
      id: 1519,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2008,
      arrival: 14757,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1520,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2009,
      arrival: 10897,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1521,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2010,
      arrival: 10850,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1522,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2011,
      arrival: 14179,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1523,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2012,
      arrival: 16332,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1524,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2013,
      arrival: 15772,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1525,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2014,
      arrival: 18260,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1526,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2015,
      arrival: 17994,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1527,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2016,
      arrival: 18044,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1528,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2017,
      arrival: 16109,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1529,
      continent: "ASIA",
      country: "SAUDI ARABIA",
      year: 2018,
      arrival: 15334,
      latitude: 23.885942,
      longitude: 45.079162
    },
    {
      id: 1530,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2008,
      arrival: 646,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1531,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2009,
      arrival: 645,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1532,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2010,
      arrival: 683,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1533,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2011,
      arrival: 764,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1534,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2012,
      arrival: 810,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1535,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2013,
      arrival: 922,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1536,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2014,
      arrival: 1029,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1537,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2015,
      arrival: 1132,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1538,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2016,
      arrival: 1281,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1539,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2017,
      arrival: 1497,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1540,
      continent: "EUROPE",
      country: "SERBIA",
      year: 2018,
      arrival: 1711,
      latitude: 44.016521,
      longitude: 21.005859
    },
    {
      id: 1541,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2008,
      arrival: 159,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1542,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2009,
      arrival: 158,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1543,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2010,
      arrival: 175,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1544,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2011,
      arrival: 194,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1545,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2012,
      arrival: 208,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1546,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2013,
      arrival: 230,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1547,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2014,
      arrival: 233,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1548,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2015,
      arrival: 276,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1549,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2016,
      arrival: 303,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1550,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2017,
      arrival: 350,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1551,
      continent: "AFRICA",
      country: "SEYCHELLES",
      year: 2018,
      arrival: 362,
      latitude: -4.679574,
      longitude: 55.491977
    },
    {
      id: 1552,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2008,
      arrival: 36,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1553,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2009,
      arrival: 37,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1554,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2010,
      arrival: 39,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1555,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2011,
      arrival: 52,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1556,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2012,
      arrival: 60,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1557,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2013,
      arrival: 81,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1558,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2014,
      arrival: 44,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1559,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2015,
      arrival: 24,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1560,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2016,
      arrival: 55,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1561,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2017,
      arrival: 51,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1562,
      continent: "AFRICA",
      country: "SIERRA LEONE",
      year: 2018,
      arrival: 57,
      latitude: 8.460555,
      longitude: -11.779889
    },
    {
      id: 1563,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2008,
      arrival: 7778,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1564,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2009,
      arrival: 7488,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1565,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2010,
      arrival: 9161,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1566,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2011,
      arrival: 10390,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1567,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2012,
      arrival: 11098,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1568,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2013,
      arrival: 11899,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1569,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2014,
      arrival: 11864,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1570,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2015,
      arrival: 12051,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1571,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2016,
      arrival: 12913,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1572,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2017,
      arrival: 13903,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1573,
      continent: "ASIA",
      country: "SINGAPORE",
      year: 2018,
      arrival: 14673,
      latitude: 1.352083,
      longitude: 103.819836
    },
    {
      id: 1574,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2008,
      arrival: 475,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1575,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2009,
      arrival: 440,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1576,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2010,
      arrival: 443,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1577,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2011,
      arrival: 424,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1578,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2012,
      arrival: 457,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1579,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2013,
      arrival: 467,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1580,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2014,
      arrival: 500,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1581,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2015,
      arrival: 505,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1582,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2016,
      arrival: 528,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1583,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2017,
      arrival: 402,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1584,
      continent: "NORTH AMERICA",
      country: "SINT MAARTEN (DUTCH PART)",
      year: 2018,
      arrival: 178,
      latitude: 18.025281,
      longitude: -63.049271
    },
    {
      id: 1585,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2008,
      arrival: 1767,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1586,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2009,
      arrival: 1298,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1587,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2010,
      arrival: 1327,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1588,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2011,
      arrival: 1460,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1589,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2012,
      arrival: 1528,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1590,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2013,
      arrival: 1670,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1591,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2014,
      arrival: 1475,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1592,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2015,
      arrival: 1721,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1593,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2016,
      arrival: 2027,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1594,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2017,
      arrival: 2162,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1595,
      continent: "EUROPE",
      country: "SLOVAKIA",
      year: 2018,
      arrival: 2256,
      latitude: 48.669026,
      longitude: 19.699024
    },
    {
      id: 1596,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2008,
      arrival: 1958,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1597,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2009,
      arrival: 1824,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1598,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2010,
      arrival: 2049,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1599,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2011,
      arrival: 2236,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1600,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2012,
      arrival: 2377,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1601,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2013,
      arrival: 2502,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1602,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2014,
      arrival: 2675,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1603,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2015,
      arrival: 3022,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1604,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2016,
      arrival: 3397,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1605,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2017,
      arrival: 3991,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1606,
      continent: "EUROPE",
      country: "SLOVENIA",
      year: 2018,
      arrival: 4425,
      latitude: 46.151241,
      longitude: 14.995463
    },
    {
      id: 1607,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2008,
      arrival: 16,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1608,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2009,
      arrival: 18,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1609,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2010,
      arrival: 21,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1610,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2011,
      arrival: 23,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1611,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2012,
      arrival: 24,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1612,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2013,
      arrival: 24,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1613,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2014,
      arrival: 20,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1614,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2015,
      arrival: 22,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1615,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2016,
      arrival: 23,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1616,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2017,
      arrival: 26,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1617,
      continent: "OCEANIA",
      country: "SOLOMON ISLANDS",
      year: 2018,
      arrival: 28,
      latitude: -9.64571,
      longitude: 160.156194
    },
    {
      id: 1618,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2008,
      arrival: 9592,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1619,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2009,
      arrival: 7012,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1620,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2010,
      arrival: 8074,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1621,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2011,
      arrival: 8339,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1622,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2012,
      arrival: 9188,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1623,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2013,
      arrival: 9537,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1624,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2014,
      arrival: 9549,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1625,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2015,
      arrival: 8904,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1626,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2016,
      arrival: 10044,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1627,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2017,
      arrival: 10285,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1628,
      continent: "AFRICA",
      country: "SOUTH AFRICA",
      year: 2018,
      arrival: 10472,
      latitude: -30.559482,
      longitude: 22.937506
    },
    {
      id: 1629,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2008,
      arrival: 57192,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1630,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2009,
      arrival: 52178,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1631,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2010,
      arrival: 52677,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1632,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2011,
      arrival: 56177,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1633,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2012,
      arrival: 57464,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1634,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2013,
      arrival: 60675,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1635,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2014,
      arrival: 64939,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1636,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2015,
      arrival: 68175,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1637,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2016,
      arrival: 75315,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1638,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2017,
      arrival: 81869,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1639,
      continent: "EUROPE",
      country: "SPAIN",
      year: 2018,
      arrival: 82773,
      latitude: 40.463667,
      longitude: -3.74922
    },
    {
      id: 1640,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2008,
      arrival: 438,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1641,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2009,
      arrival: 448,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1642,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2010,
      arrival: 654,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1643,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2011,
      arrival: 856,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1644,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2012,
      arrival: 1006,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1645,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2013,
      arrival: 1275,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1646,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2014,
      arrival: 1527,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1647,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2015,
      arrival: 1798,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1648,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2016,
      arrival: 2051,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1649,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2017,
      arrival: 2116,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1650,
      continent: "ASIA",
      country: "SRI LANKA",
      year: 2018,
      arrival: 2334,
      latitude: 7.873054,
      longitude: 80.771797
    },
    {
      id: 1651,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2008,
      arrival: 387,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1652,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2009,
      arrival: 396,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1653,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2010,
      arrival: 522,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1654,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2011,
      arrival: 449,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1655,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2012,
      arrival: 490,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1656,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2013,
      arrival: 545,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1657,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2014,
      arrival: 556,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1658,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2015,
      arrival: 432,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1659,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2016,
      arrival: 400,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1660,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2017,
      arrival: 503,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1661,
      continent: "ASIA",
      country: "STATE OF PALESTINE",
      year: 2018,
      arrival: 606,
      latitude: 31.952162,
      longitude: 35.233154
    },
    {
      id: 1662,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2008,
      arrival: 440,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1663,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2009,
      arrival: 420,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1664,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2010,
      arrival: 495,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1665,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2011,
      arrival: 536,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1666,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2012,
      arrival: 575,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1667,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2013,
      arrival: 591,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1668,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2014,
      arrival: 684,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1669,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2015,
      arrival: 741,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1670,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2016,
      arrival: 800,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1671,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2017,
      arrival: 813,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1672,
      continent: "AFRICA",
      country: "SUDAN",
      year: 2018,
      arrival: 836,
      latitude: 12.862807,
      longitude: 30.217636
    },
    {
      id: 1673,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2008,
      arrival: 4555,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1674,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2009,
      arrival: 4899,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1675,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2010,
      arrival: 5183,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1676,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2011,
      arrival: 5222,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1677,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2012,
      arrival: 5146,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1678,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2013,
      arrival: 5229,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1679,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2014,
      arrival: 5660,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1680,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2015,
      arrival: 6482,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1681,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2016,
      arrival: 6782,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1682,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2017,
      arrival: 7054,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1683,
      continent: "EUROPE",
      country: "SWEDEN",
      year: 2018,
      arrival: 7440,
      latitude: 60.128161,
      longitude: 18.643501
    },
    {
      id: 1684,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2008,
      arrival: 8608,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1685,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2009,
      arrival: 8294,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1686,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2010,
      arrival: 8628,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1687,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2011,
      arrival: 8534,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1688,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2012,
      arrival: 8566,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1689,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2013,
      arrival: 8967,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1690,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2014,
      arrival: 9158,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1691,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2015,
      arrival: 9305,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1692,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2016,
      arrival: 9205,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1693,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2017,
      arrival: 9889,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1694,
      continent: "EUROPE",
      country: "SWITZERLAND",
      year: 2018,
      arrival: 10362,
      latitude: 46.818188,
      longitude: 8.227512
    },
    {
      id: 1695,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2008,
      arrival: 3845,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1696,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2009,
      arrival: 4395,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1697,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2010,
      arrival: 5567,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1698,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2011,
      arrival: 6087,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1699,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2012,
      arrival: 7311,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1700,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2013,
      arrival: 8016,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1701,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2014,
      arrival: 9910,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1702,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2015,
      arrival: 10440,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1703,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2016,
      arrival: 10690,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1704,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2017,
      arrival: 10740,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1705,
      continent: "ASIA",
      country: "TAIWAN PROVINCE OF CHINA",
      year: 2018,
      arrival: 11067,
      latitude: 23.69781,
      longitude: 120.960515
    },
    {
      id: 1706,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2008,
      arrival: 325,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1707,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2009,
      arrival: 207,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1708,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2010,
      arrival: 160,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1709,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2011,
      arrival: 183,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1710,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2012,
      arrival: 244,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1711,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2013,
      arrival: 208,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1712,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2014,
      arrival: 213,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1713,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2015,
      arrival: 414,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1714,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2016,
      arrival: 344,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1715,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2017,
      arrival: 431,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1716,
      continent: "ASIA",
      country: "TAJIKISTAN",
      year: 2018,
      arrival: 1035,
      latitude: 38.861034,
      longitude: 71.276093
    },
    {
      id: 1717,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2008,
      arrival: 750,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1718,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2009,
      arrival: 695,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1719,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2010,
      arrival: 754,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1720,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2011,
      arrival: 843,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1721,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2012,
      arrival: 1043,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1722,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2013,
      arrival: 1063,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1723,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2014,
      arrival: 1113,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1724,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2015,
      arrival: 1104,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1725,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2016,
      arrival: 1233,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1726,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2017,
      arrival: 1275,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1727,
      continent: "AFRICA",
      country: "TANZANIA, UNITED REPUBLIC OF",
      year: 2018,
      arrival: 1378,
      latitude: -6.369028,
      longitude: 34.888822
    },
    {
      id: 1728,
      continent: "ASIA",
      country: "THAILAND",
      year: 2008,
      arrival: 14584,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1729,
      continent: "ASIA",
      country: "THAILAND",
      year: 2009,
      arrival: 14150,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1730,
      continent: "ASIA",
      country: "THAILAND",
      year: 2010,
      arrival: 15936,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1731,
      continent: "ASIA",
      country: "THAILAND",
      year: 2011,
      arrival: 19230,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1732,
      continent: "ASIA",
      country: "THAILAND",
      year: 2012,
      arrival: 22354,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1733,
      continent: "ASIA",
      country: "THAILAND",
      year: 2013,
      arrival: 26547,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1734,
      continent: "ASIA",
      country: "THAILAND",
      year: 2014,
      arrival: 24810,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1735,
      continent: "ASIA",
      country: "THAILAND",
      year: 2015,
      arrival: 29923,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1736,
      continent: "ASIA",
      country: "THAILAND",
      year: 2016,
      arrival: 32530,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1737,
      continent: "ASIA",
      country: "THAILAND",
      year: 2017,
      arrival: 35592,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1738,
      continent: "ASIA",
      country: "THAILAND",
      year: 2018,
      arrival: 38178,
      latitude: 15.870032,
      longitude: 100.992541
    },
    {
      id: 1739,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2008,
      arrival: 36,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1740,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2009,
      arrival: 44,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1741,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2010,
      arrival: 40,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1742,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2011,
      arrival: 51,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1743,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2012,
      arrival: 58,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1744,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2013,
      arrival: 79,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1745,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2014,
      arrival: 60,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1746,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2015,
      arrival: 62,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1747,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2016,
      arrival: 66,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1748,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2017,
      arrival: 74,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1749,
      continent: "ASIA",
      country: "TIMOR-LESTE",
      year: 2018,
      arrival: 75,
      latitude: -8.874217,
      longitude: 125.727539
    },
    {
      id: 1750,
      continent: "AFRICA",
      country: "TOGO",
      year: 2008,
      arrival: 74,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1751,
      continent: "AFRICA",
      country: "TOGO",
      year: 2009,
      arrival: 150,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1752,
      continent: "AFRICA",
      country: "TOGO",
      year: 2010,
      arrival: 202,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1753,
      continent: "AFRICA",
      country: "TOGO",
      year: 2011,
      arrival: 300,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1754,
      continent: "AFRICA",
      country: "TOGO",
      year: 2012,
      arrival: 235,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1755,
      continent: "AFRICA",
      country: "TOGO",
      year: 2013,
      arrival: 327,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1756,
      continent: "AFRICA",
      country: "TOGO",
      year: 2014,
      arrival: 282,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1757,
      continent: "AFRICA",
      country: "TOGO",
      year: 2015,
      arrival: 273,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1758,
      continent: "AFRICA",
      country: "TOGO",
      year: 2016,
      arrival: 338,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1759,
      continent: "AFRICA",
      country: "TOGO",
      year: 2017,
      arrival: 514,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1760,
      continent: "AFRICA",
      country: "TOGO",
      year: 2018,
      arrival: 573,
      latitude: 8.619543,
      longitude: 0.824782
    },
    {
      id: 1761,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2008,
      arrival: 50,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1762,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2009,
      arrival: 46,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1763,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2010,
      arrival: 47,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1764,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2011,
      arrival: 46,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1765,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2012,
      arrival: 47,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1766,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2013,
      arrival: 48,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1767,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2014,
      arrival: 50,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1768,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2015,
      arrival: 54,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1769,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2016,
      arrival: 59,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1770,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2017,
      arrival: 63,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1771,
      continent: "OCEANIA",
      country: "TONGA",
      year: 2018,
      arrival: 54,
      latitude: -21.178986,
      longitude: -175.198242
    },
    {
      id: 1772,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2008,
      arrival: 437,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1773,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2009,
      arrival: 419,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1774,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2010,
      arrival: 388,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1775,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2011,
      arrival: 431,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1776,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2012,
      arrival: 455,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1777,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2013,
      arrival: 434,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1778,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2014,
      arrival: 412,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1779,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2015,
      arrival: 440,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1780,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2016,
      arrival: 409,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1781,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2017,
      arrival: 395,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1782,
      continent: "NORTH AMERICA",
      country: "TRINIDAD AND TOBAGO",
      year: 2018,
      arrival: 375,
      latitude: 10.691803,
      longitude: -61.222503
    },
    {
      id: 1783,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2008,
      arrival: 7050,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1784,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2009,
      arrival: 7797,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1785,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2010,
      arrival: 7828,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1786,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2011,
      arrival: 5746,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1787,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2012,
      arrival: 6999,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1788,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2013,
      arrival: 7352,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1789,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2014,
      arrival: 7163,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1790,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2015,
      arrival: 5359,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1791,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2016,
      arrival: 5724,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1792,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2017,
      arrival: 7052,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1793,
      continent: "AFRICA",
      country: "TUNISIA",
      year: 2018,
      arrival: 8299,
      latitude: 33.886917,
      longitude: 9.537499
    },
    {
      id: 1794,
      continent: "ASIA",
      country: "TURKEY",
      year: 2008,
      arrival: 29792,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1795,
      continent: "ASIA",
      country: "TURKEY",
      year: 2009,
      arrival: 30187,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1796,
      continent: "ASIA",
      country: "TURKEY",
      year: 2010,
      arrival: 31364,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1797,
      continent: "ASIA",
      country: "TURKEY",
      year: 2011,
      arrival: 34654,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1798,
      continent: "ASIA",
      country: "TURKEY",
      year: 2012,
      arrival: 35698,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1799,
      continent: "ASIA",
      country: "TURKEY",
      year: 2013,
      arrival: 37795,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1800,
      continent: "ASIA",
      country: "TURKEY",
      year: 2014,
      arrival: 39811,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1801,
      continent: "ASIA",
      country: "TURKEY",
      year: 2015,
      arrival: 39478,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1802,
      continent: "ASIA",
      country: "TURKEY",
      year: 2016,
      arrival: 30289,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1803,
      continent: "ASIA",
      country: "TURKEY",
      year: 2017,
      arrival: 37601,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1804,
      continent: "ASIA",
      country: "TURKEY",
      year: 2018,
      arrival: 45768,
      latitude: 38.963745,
      longitude: 35.243322
    },
    {
      id: 1805,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2008,
      arrival: 352,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1806,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2009,
      arrival: 351,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1807,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2010,
      arrival: 281,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1808,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2011,
      arrival: 354,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1809,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2012,
      arrival: 292,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1810,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2013,
      arrival: 291,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1811,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2014,
      arrival: 358,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1812,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2015,
      arrival: 386,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1813,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2016,
      arrival: 449,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1814,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2017,
      arrival: 416,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1815,
      continent: "NORTH AMERICA",
      country: "TURKS AND CAICOS ISLANDS",
      year: 2018,
      arrival: 441,
      latitude: 21.694025,
      longitude: -71.797928
    },
    {
      id: 1816,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2008,
      arrival: 2,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1817,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2009,
      arrival: 2,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1818,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2010,
      arrival: 2,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1819,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2011,
      arrival: 1,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1820,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2012,
      arrival: 1,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1821,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2013,
      arrival: 1,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1822,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2014,
      arrival: 1,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1823,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2015,
      arrival: 2,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1824,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2016,
      arrival: 3,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1825,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2017,
      arrival: 3,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1826,
      continent: "OCEANIA",
      country: "TUVALU",
      year: 2018,
      arrival: 3,
      latitude: -7.109535,
      longitude: 177.64933
    },
    {
      id: 1827,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2008,
      arrival: 844,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1828,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2009,
      arrival: 807,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1829,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2010,
      arrival: 946,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1830,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2011,
      arrival: 1151,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1831,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2012,
      arrival: 1197,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1832,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2013,
      arrival: 1206,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1833,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2014,
      arrival: 1266,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1834,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2015,
      arrival: 1303,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1835,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2016,
      arrival: 1323,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1836,
      continent: "AFRICA",
      country: "UGANDA",
      year: 2017,
      arrival: 1402,
      latitude: 1.373333,
      longitude: 32.290275
    },
    {
      id: 1837,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2009,
      arrival: 28199,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1838,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2010,
      arrival: 28295,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1839,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2011,
      arrival: 29306,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1840,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2012,
      arrival: 29282,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1841,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2013,
      arrival: 31063,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1842,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2014,
      arrival: 32613,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1843,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2015,
      arrival: 34436,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1844,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2016,
      arrival: 35814,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1845,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2017,
      arrival: 37651,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1846,
      continent: "EUROPE",
      country: "UNITED KINGDOM",
      year: 2018,
      arrival: 36316,
      latitude: 55.378051,
      longitude: -3.435973
    },
    {
      id: 1847,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2008,
      arrival: 58007,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1848,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2009,
      arrival: 55103,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1849,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2010,
      arrival: 60010,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1850,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2011,
      arrival: 63477,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1851,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2012,
      arrival: 66967,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1852,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2013,
      arrival: 71643,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1853,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2014,
      arrival: 75379,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1854,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2015,
      arrival: 77774,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1855,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2016,
      arrival: 76407,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1856,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2017,
      arrival: 77187,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1857,
      continent: "NORTH AMERICA",
      country: "UNITED STATES OF AMERICA",
      year: 2018,
      arrival: 79746,
      latitude: 37.09024,
      longitude: -95.712891
    },
    {
      id: 1858,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2008,
      arrival: 574,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1859,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2009,
      arrival: 563,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1860,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2010,
      arrival: 572,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1861,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2011,
      arrival: 567,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1862,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2012,
      arrival: 619,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1863,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2013,
      arrival: 590,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1864,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2014,
      arrival: 615,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1865,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2015,
      arrival: 642,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1866,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2016,
      arrival: 667,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1867,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2017,
      arrival: 535,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1868,
      continent: "NORTH AMERICA",
      country: "UNITED STATES VIRGIN ISLANDS",
      year: 2018,
      arrival: 381,
      latitude: 18.335765,
      longitude: -64.896335
    },
    {
      id: 1869,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2008,
      arrival: 1938,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1870,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2009,
      arrival: 2055,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1871,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2010,
      arrival: 2353,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1872,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2011,
      arrival: 2857,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1873,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2012,
      arrival: 2695,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1874,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2013,
      arrival: 2683,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1875,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2014,
      arrival: 2682,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1876,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2015,
      arrival: 2773,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1877,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2016,
      arrival: 3037,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1878,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2017,
      arrival: 3674,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1879,
      continent: "SOUTH AMERICA",
      country: "URUGUAY",
      year: 2018,
      arrival: 3469,
      latitude: -32.522779,
      longitude: -55.765835
    },
    {
      id: 1880,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2008,
      arrival: 1069,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1881,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2009,
      arrival: 1215,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1882,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2010,
      arrival: 975,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1883,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2011,
      arrival: 1393,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1884,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2012,
      arrival: 1895,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1885,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2013,
      arrival: 1969,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1886,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2014,
      arrival: 1862,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1887,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2015,
      arrival: 1918,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1888,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2016,
      arrival: 2027,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1889,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2017,
      arrival: 2690,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1890,
      continent: "ASIA",
      country: "UZBEKISTAN",
      year: 2018,
      arrival: 5346,
      latitude: 41.377491,
      longitude: 64.585262
    },
    {
      id: 1891,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2008,
      arrival: 91,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1892,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2009,
      arrival: 101,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1893,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2010,
      arrival: 97,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1894,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2011,
      arrival: 94,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1895,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2012,
      arrival: 108,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1896,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2013,
      arrival: 110,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1897,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2014,
      arrival: 109,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1898,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2015,
      arrival: 90,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1899,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2016,
      arrival: 95,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1900,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2017,
      arrival: 109,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1901,
      continent: "OCEANIA",
      country: "VANUATU",
      year: 2018,
      arrival: 116,
      latitude: -15.376706,
      longitude: 166.959158
    },
    {
      id: 1902,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2008,
      arrival: 4236,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1903,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2009,
      arrival: 3747,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1904,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2010,
      arrival: 5050,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1905,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2011,
      arrival: 6014,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1906,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2012,
      arrival: 6848,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1907,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2013,
      arrival: 7572,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1908,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2014,
      arrival: 7874,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1909,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2015,
      arrival: 7944,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1910,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2016,
      arrival: 10013,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1911,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2017,
      arrival: 12922,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1912,
      continent: "ASIA",
      country: "VIET NAM",
      year: 2018,
      arrival: 15498,
      latitude: 14.058324,
      longitude: 108.277199
    },
    {
      id: 1913,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2008,
      arrival: 812,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1914,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2009,
      arrival: 710,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1915,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2010,
      arrival: 815,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1916,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2011,
      arrival: 920,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1917,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2012,
      arrival: 859,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1918,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2013,
      arrival: 915,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1919,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2014,
      arrival: 947,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1920,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2015,
      arrival: 932,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1921,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2016,
      arrival: 956,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1922,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2017,
      arrival: 1083,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1923,
      continent: "AFRICA",
      country: "ZAMBIA",
      year: 2018,
      arrival: 1072,
      latitude: -13.133897,
      longitude: 27.849332
    },
    {
      id: 1924,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2008,
      arrival: 1956,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1925,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2009,
      arrival: 2017,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1926,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2010,
      arrival: 2239,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1927,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2011,
      arrival: 2423,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1928,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2012,
      arrival: 1794,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1929,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2013,
      arrival: 1833,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1930,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2014,
      arrival: 1880,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1931,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2015,
      arrival: 2057,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1932,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2016,
      arrival: 2168,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1933,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2017,
      arrival: 2423,
      latitude: -19.015438,
      longitude: 29.154857
    },
    {
      id: 1934,
      continent: "AFRICA",
      country: "ZIMBABWE",
      year: 2018,
      arrival: 2580,
      latitude: -19.015438,
      longitude: 29.154857
    }
   ];
  
  //FOR LOOP TO GRAB ONLY 2018 DATA
  countries_new = [];
  for (let i = 0; i <countries.length; i++) {
   if (countries[i].year === 2018 ) {
   countries_filtered = [];
   countries_filtered["year"] = countries[i].year
   countries_filtered["country"] = countries[i].country
   countries_filtered["arrival"] = countries[i].arrival
   countries_filtered["latitude"] = countries[i].latitude
   countries_filtered["longitude"] = countries[i].longitude
   countries_new.push(countries_filtered);
     }
  }
  console.log(countries_new);
 // Loop through the countries array and create one marker for each country object
 for (var i = 0; i < countries_new.length; i++) {
   // Conditionals for countries points
   var color = "";
   if (countries_new[i].arrival > 50000) {
     color = "red";
   }
   else if (countries_new[i].arrival > 15000) {
     color = "orange";
   }
   else if (countries_new[i].arrival > 100) {
     color = "yellow";
   }
   else {
     color = "blue";
   }
   // Add circles to map
   L.circle([countries_new[i].latitude, countries_new[i].longitude], {
     fillOpacity: 0.75,
     color: color,
     fillColor: color,
     // Adjust radius
     radius: countries_new[i].arrival * 5
   }).bindPopup("<h1>" + countries_new[i].country + "</h1> <hr> <h3>Arrivals: " + countries_new[i].arrival + "</h3>").addTo(myMap);
  //Loop through the countries array and create one marker for each country object
  for (var i = 0; i < countries.length; i++) {
    // #38588C
    // #1E9B8A
    // #92D95C
    // #FDE724
    // Conditionals for countries points
    var color = "";
    if (countries[i].arrival > 50000) {
      color = "#FDE724";
    }
    else if (countries[i].arrival > 15000) {
      color = "#92D95C";
    }
    else if (countries[i].arrival > 100) {
      color = "#1E9B8A";
    }
    else {
      color = "#38588C";
    }
  
    // Add circles to map
    L.circle([countries[i].latitude, countries[i].longitude], {
      fillOpacity: 0.75,
      color: color,
      fillColor: color,
      // Adjust radius
      radius: countries[i].arrival * 5
    }).bindPopup("<h1>" + countries[i].country + "</h1> <hr> <h3>Arrivals: " + countries[i].arrival + "</h3>").addTo(myMap);
  }
}
  
