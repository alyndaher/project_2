var margin = {top: 20, right: 160, bottom: 35, left: 30};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


/* Data in strings like it would be if imported from a csv */

var data = [
  {YEAR: "2008", AFRICA: "44586", ASIA: "192225", EUROPE: "283519", NORTHAMERICA: "199119", OCEANIA: "28493", SOUTHAMERICA: "21648" }, 
  {YEAR: "2009", AFRICA: "42027", ASIA: "186775", EUROPE: "243955", NORTHAMERICA: "176322", OCEANIA: "27986", SOUTHAMERICA: "20695" },
  {YEAR: "2010", AFRICA: "46038", ASIA: "223698", EUROPE: "241140", NORTHAMERICA: "199873", OCEANIA: "32327", SOUTHAMERICA: "22511" },
  {YEAR: "2011", AFRICA: "43755", ASIA: "261371", EUROPE: "278641", NORTHAMERICA: "220924", OCEANIA: "35758", SOUTHAMERICA: "25845" },
  {YEAR: "2012", AFRICA: "46768", ASIA: "290860", EUROPE: "269475", NORTHAMERICA: "237354", OCEANIA: "35651", SOUTHAMERICA: "27362" },
  {YEAR: "2013", AFRICA: "42027", ASIA: "324971", EUROPE: "287630", NORTHAMERICA: "257456", OCEANIA: "34428", SOUTHAMERICA: "28292" },
  {YEAR: "2014", AFRICA: "45162", ASIA: "346309", EUROPE: "296609", NORTHAMERICA: "278534", OCEANIA: "37367", SOUTHAMERICA: "29725" },
  {YEAR: "2015", AFRICA: "39391", ASIA: "338789", EUROPE: "265334", NORTHAMERICA: "294726", OCEANIA: "37846", SOUTHAMERICA: "29366" },
  {YEAR: "2016", AFRICA: "35878", ASIA: "345340", EUROPE: "267938", NORTHAMERICA: "295035", OCEANIA: "40786", SOUTHAMERICA: "30584" },
  {YEAR: "2017", AFRICA: "46081", ASIA: "377059", EUROPE: "299125", NORTHAMERICA: "303063", OCEANIA: "45820", SOUTHAMERICA: "32423" },
  {YEAR: "2018", AFRICA: "52375", ASIA: "449500", EUROPE: "326080", NORTHAMERICA: "307400", OCEANIA: "49373", SOUTHAMERICA: "33559" },
];


// Transpose the data into layers
var dataset = d3.layout.stack()(["AFRICA", "ASIA", "EUROPE", "NORTHAMERICA", "OCEANIA", "SOUTHAMERICA"].map(function(continents) {
  return data.map(function(d) {
    return {x: (d.YEAR), y: +d[continents]};
  });
}));


// Set x, y and colors
var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .rangeRoundBands([10, width-10], 0.02);

var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height, 0]);

var colors = ["#7A0177", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FEB24C"];


// Define and draw axes
var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(5)
  .tickSize(-width, 0, 0)
  .tickFormat( function(d) { return d } );

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(d3.time.format("%Y"));

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);


// Create groups for each series, rects for each segment 
var groups = svg.selectAll("g.expenditure")
  .data(dataset)
  .enter().append("g")
  .attr("class", "expenditure")
  .style("fill", function(d, i) { return colors[i]; });

var rect = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() { tooltip.style("display", null); })
  .on("mouseout", function() { tooltip.style("display", "none"); })
  .on("mousemove", function(d) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    tooltip.select("text").text(d.y);
  });


// Draw legend
var legend = svg.selectAll(".legend")
  .data(colors)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
 
legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
legend.append("text")
  .attr("x", width + 5)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d, i) { 
    switch (i) {
      case 0: return "South America";
      case 1: return "Oceania";
      case 2: return "North America";
      case 3: return "Europe";
      case 4: return "Asia";
      case 5: return "Africa";
    }
  });


// Prep the tooltip bits, initial display is hidden
var tooltip = svg.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
tooltip.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "white")
  .style("opacity", 0.5);

tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("font-weight", "bold");