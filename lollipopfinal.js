
// set the dimensions and margins of the graph
var margin = {top: 50, right: 30, bottom: 90, left: 80},
    width = 460 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(1)


var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")
//------------------------------------------------------------------------
//Create button functionality
function update(selectedVar) {

// Parse the Data
d3.csv("allyearsdeparture.csv").then(function(data) {
  console.log(data)

// X axis
  x.domain(data.map(function(d) { return d.CONTINENT; }))
  xAxis.transition().duration(1000).call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");


// Add Y axis//You might want to hard code the y axis
  y.domain([0, 560000])
  .range([ height, 0]);
  svg.append("g")
  .call(d3.axisLeft(y));

    // variable u: map data to existing circle
    var j = svg.selectAll(".myLine")
      .data(data)
    // update lines
    j
      .enter()
      .append("line")
      .attr("class", "myLine")
      .merge(j)
      .transition()
      .duration(1000)
        .attr("x1", function(d) { console.log(x(d.CONTINENT)) ; return x(d.CONTINENT); })
        .attr("x2", function(d) { return x(d.CONTINENT); })
        .attr("y1", y(0))
        .attr("y2", function(d) { return y(d[selectedVar]); })
        .attr("stroke", "grey")

        // variable u: map data to existing circle
    var u = svg.selectAll("circle")
      .data(data)
    // update bars
    u
      .enter()
      .append("circle")
      .merge(u)
      .transition()
      .duration(1000)
        .attr("cx", function(d) { return x(d.CONTINENT); })
        .attr("cy", function(d) { return y(d[selectedVar]); })
        //circle size
        .attr("r", 4)
        //circle fill color
        .attr("fill", "#69b3a2")
        .attr("stroke", "black");
//Add Title
svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("International Departures Graph");

});}

update("2008")