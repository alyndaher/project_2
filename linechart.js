// Define SVG area dimensions
var svgWidth = 660;
var svgHeight = 400;

// Define the chart's margins as an object
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
  };

  // Define dimensions of the chart area
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select(".linechart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

//SET THE DEFAULT CHART FROM AFGHANISTAN
function returnaxisdata(yeardata) {
  // console.log(yeardata);

  //Create Scales
  let xtimescale = d3.scaleTime()
  .domain(d3.extent(yeardata, d => d.Year))
  .range([0, width]);
  
  let ylinearscale = d3.scaleLinear()
  .domain([0, d3.max(yeardata, d => d.Arrival)])
  .range([height,0])
  
  //Create Axes
  let bottomAxis = d3.axisBottom(xtimescale).tickFormat(d3.timeFormat("%Y"));;
  let leftAxis = d3.axisLeft(ylinearscale);
  
  //Append axes to chartGroup
  chartGroup.append("g")
  .attr("transform",`translate(0,${height})`)
  .attr("stroke", "white")
  .attr("class","myXaxis")
  .call(bottomAxis);
  
  chartGroup.append("g")
  .attr("stroke", "white")
  .attr("class","myYaxis")
  .call(leftAxis);

  //Set up line generator
  let line1 = d3
  .line()
  .x(d => xtimescale(d.Year))
  .y(d => ylinearscale(d.Arrival));

  //Sort datasets by descending
  yeardata.sort(function(a,b) {
    return b.Year-a.Year
  });

  chartGroup.append("path")
      .data([yeardata])
      .classed("c1",1)
      .attr("d",line1)
      .attr("stroke","steelblue")
      .attr("class","lineTest")
      .transition()
      .duration(1000)
      .attr("stroke-width", 2.5)

  chartGroup.append("g").selectAll("circle")
  .data(yeardata)
  .enter()
  .append("circle")
  .attr("class", "circleTest")
  .attr("r", 4.5)
  .style("fill","white")
  .style("stroke","black")
  .attr("cx",function(d) {return xtimescale(d.Year)})
  .attr("cy",function(d) {return ylinearscale(d.Arrival)});

  let g = svg.selectAll()
    .data(yeardata).enter().append("g");


}

//GRABBING DATA TO CREATE XAXIS AND YAXIS
d3.json('arrival.json', function(data){

  // Configure a parseTime function which will return a new Date object from a string
  var parseTime = d3.timeParse("%Y");
  
  //Format Year using parseTime
  data.forEach(function(datas) {
  datas.Year = parseTime(datas.Year)
  });
  
  //grab one country to create axes
  let afghanistan = [];
  
  for (let i = 0; i < data.length; i++) {
  if (data[i].Country == "AFGHANISTAN") {
    let f_list = [];
    f_list['Arrival'] = data[i].Arrival;
    f_list['Year'] = data[i].Year;
    afghanistan.push(f_list);
  }
  }
  
  returnaxisdata(afghanistan);

  });


//FUNCTION TO UPDATE DATA UPON SELECTION
function update(data) {

removeaxes();

//For loop to create an array of arrays. Makes data calling easier.
let arrival_list = [];

for (let i = 0; i < data.length; i++) {
  one_dict = [];
  one_dict["Arrival"] = data[i].Arrival;
  one_dict["Year"] = data[i].Year;
  arrival_list.push(one_dict);
}

//Create Scales
let xtimescale = d3.scaleTime()
.domain(d3.extent(arrival_list, d => d.Year))
.range([0, width]);

let ylinearscale = d3.scaleLinear()
.domain([0, d3.max(arrival_list, d => d.Arrival)])
.range([height,0])

//Create Axes
let bottomAxis = d3.axisBottom(xtimescale).tickFormat(d3.timeFormat("%Y")).scale(xtimescale);;
let leftAxis = d3.axisLeft(ylinearscale).scale(ylinearscale);
  

//Append axes to chartGroup
chartGroup.append("g")
.attr("transform",`translate(0,${height})`)
.attr("stroke", "white")
.attr("class","myXaxis")
.call(bottomAxis);

chartGroup.append("g")
.attr("stroke", "white")
.attr("class","myYaxis")
.call(leftAxis);

// chartGroup.selectAll(".myXAxis")
//   .transition()
//   .duration(3000)
//   .call(bottomAxis)

chartGroup.selectAll(".myYaxis")
  .transition()
  .duration(3000)
  .call(leftAxis)

chartGroup.select(".myYaxis")
.transition()
.duration(3000)
.remove()

let line1 = d3
  .line()
  .x(d => xtimescale(d.Year))
  .y(d => ylinearscale(d.Arrival));

let u = chartGroup.selectAll(".linechart")
.data([arrival_list], function(d) {return d.Arrival});
    
  u
  .enter()
  .append("path")
  .attr("class","lineTest")
  .merge(u)
  .transition()
  .duration(3000)
  .attr("d", line1)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2.5)

  chartGroup.append("g").selectAll("circle")
      .data(arrival_list)
      .enter()
      .append("circle")
      .attr("class", "circleTest")
      .attr("r", 4.5)
      .style("fill","white")
      .style("stroke","black")
      .attr("cx",function(d) {return xtimescale(d.Year)})
      .attr("cy",function(d) {return ylinearscale(d.Arrival)});

}

function removeaxes() {
  d3.selectAll(".lineTest")
  .remove()

  d3.selectAll(".circleTest")
  .remove()

  d3.selectAll(".myXaxis")
  .remove()

  d3.select(".myYaxis")
  .transition()
  .duration(3000)
  .remove()
}

//FUNCTION TO GRAB THE COUNTRIES FOR SELECTION LIST

function grabcountries() {

  d3.json('arrival.json', function(data){

    //Initialize blank array for countries
    let countryids = [];
    
    //forloop to create array of countries
    for (i = 0; i < data.length; i ++) {
      let j = data[i].Country;
      countryids.push(j);
    }

    //Grab only unique countries in array
  let uniquecountries = countryids.filter(onlyUnique);

  d3.selectAll("select").selectAll("option")
  .data(uniquecountries)
  .enter()
  .append("option")
  .html(function(d) {
      return d;
  });
  });
}

//FUNCTION TO RETURN ONLY UNIQUE VALUES
function onlyUnique(value,index,self) {
  return self.indexOf(value) === index;
}



//Call optionChanged1() when a change takes place to the DOM
d3.selectAll("#selDataset1").on("changed", optionChanged1);


function optionChanged1() {

  //Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset1");

  // Assign the value of the dropdown menu option to a variable
  var valueid = dropdownMenu.property("value");

  d3.json('arrival.json', function(data){

  let updatearrivallist = [];

  for (let i =0; i < data.length; i ++) {
      if (data[i].Country === valueid) {

        let new_list = [];
        new_list['Country'] = data[i].Country
        new_list['Arrival'] = data[i].Arrival;
        new_list['Year'] = data[i].Year;
        updatearrivallist.push(new_list);
      }
    }
    console.log(updatearrivallist);

    var parseTime = d3.timeParse("%Y");

    //Format Year using parseTime
    updatearrivallist.forEach(function(datas) {
      datas.Year = parseTime(datas.Year)
    });

    //Sort datasets by descending
    updatearrivallist.sort(function(a,b) {
    return b.Year-a.Year
    });
    update(updatearrivallist);
  });
  
}



//CREATE THE SECOND LINE CHART WITH TOP 5 COUNTRIES
function linechart() {

  // Define SVG area dimensions
  var svgWidth = 660;
  var svgHeight = 400;
  
  // Define the chart's margins as an object
  var margin = {
      top: 20,
      right: 40,
      bottom: 60,
      left: 50
    };
  
    // Define dimensions of the chart area
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;
  
  // Select body, append SVG area to it, and set its dimensions
  var svg = d3.select(".linechart1")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
  
  var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
  
  d3.json('arrival.json', function(data){
  
    // console.log(data);
  
    // data.sort(function(a,b) {
    //   return b.Arrival-a.Arrival
    // });
  
      // Configure a parseTime function which will return a new Date object from a string
      var parseTime = d3.timeParse("%Y");
  
      //Format Year using parseTime
      data.forEach(function(datas) {
        datas.Year = parseTime(datas.Year)
      });
  
      //grab five countries
      let france = [];
      let unitedstates = [];
      let spain = [];
      let hongkong = [];
      let china = [];
  
      for (let i = 0; i < data.length; i++) {
        if (data[i].Country == "FRANCE") {
          let f_list = [];
          f_list['Arrival'] = data[i].Arrival;
          f_list['Year'] = data[i].Year;
          france.push(f_list);
        }
        else if (data[i].Country == "UNITED STATES OF AMERICA"){
          let u_list = [];
          u_list['Arrival'] = data[i].Arrival;
          u_list['Year'] = data[i].Year;
          unitedstates.push(u_list);
        }
        else if (data[i].Country == "SPAIN"){
          let s_list = [];
          s_list['Arrival'] = data[i].Arrival;
          s_list['Year'] = data[i].Year;
          spain.push(s_list);
        }
        else if (data[i].Country == "HONG KONG, CHINA") {
          let h_list = [];
          h_list['Arrival'] = data[i].Arrival;
          h_list['Year'] = data[i].Year;
          hongkong.push(h_list);
        }
        else if (data[i].Country == "CHINA") {
          let c_list = [];
          c_list['Arrival'] = data[i].Arrival;
          c_list['Year'] = data[i].Year;
          china.push(c_list);
        }
      }
      console.log(france);
  
      //Create Scales
      let xtimescale = d3.scaleTime()
        .domain(d3.extent(france, d => d.Year))
        .range([0, width]);
  
      let ylinearscale = d3.scaleLinear()
        .domain([0, d3.max(france, d => d.Arrival) +10000])
        .range([height,0])
  
  
      //Create Axes
      let bottomAxis = d3.axisBottom(xtimescale).tickFormat(d3.timeFormat("%Y"));
      let leftAxis = d3.axisLeft(ylinearscale);
      
      //Append axes to chartGroup
      chartGroup.append("g")
        .attr("transform",`translate(0,${height})`)
        .attr("stroke", "white")
        .call(bottomAxis);
  
      chartGroup.append("g")
        .attr("stroke", "white")
        .call(leftAxis);
  
      //Set up line generator
      let line1 = d3
        .line()
        .x(d => xtimescale(d.Year))
        .y(d => ylinearscale(d.Arrival));
  
      //Sort datasets by descending
      france.sort(function(a,b) {
        return b.Year-a.Year
      });
  
      unitedstates.sort(function(a,b) {
        return b.Year-a.Year
      });
  
      spain.sort(function(a,b) {
        return b.Year-a.Year
      });
  
      hongkong.sort(function(a,b) {
        return b.Year-a.Year
      });
  
      china.sort(function(a,b) {
        return b.Year-a.Year
      });
  
  
      //Append path for line1
      chartGroup.append("path")
        .data([france])
        .classed("c1",1)
        .attr("d",line1)
        .attr("stroke","rgb(75, 195, 255)")
        .attr("stroke-dasharray",2)
  
      chartGroup.append("path")
        .data([unitedstates])
        .classed("c2",1)
        .attr("d",line1)
        .attr("stroke","rgb(94, 236, 179)")
  
      chartGroup.append("path")
        .data([spain])
        .classed("c3",1)
        .attr("d",line1)
        .attr("stroke","white")
        .attr("stroke-dasharray",6)
  
      chartGroup.append("path")
        .data([hongkong])
        .classed("c4",1)
        .attr("d",line1)
        .attr("stroke","rgb(192, 213, 117)")
  
      chartGroup.append("path")
        .data([china])
        .classed("c5",1)
        .attr("d",line1)
        .attr("stroke","green")
  
      //ADDING CIRCLE MARKS
  
      chartGroup.append("g").selectAll("circle")
        .data(france)
        .enter()
        .append("circle")
        .attr("r", 4.5)
        .style("fill","white")
        .style("stroke","black")
        .attr("cx",function(d) {return xtimescale(d.Year)})
        .attr("cy",function(d) {return ylinearscale(d.Arrival)});
  
      chartGroup.append("g").selectAll("circle")
        .data(unitedstates)
        .enter()
        .append("circle")
        .attr("r", 4.5)
        .style("fill","white")
        .style("stroke","black")
        .attr("cx",function(d) {return xtimescale(d.Year)})
        .attr("cy",function(d) {return ylinearscale(d.Arrival)});
  
      chartGroup.append("g").selectAll("circle")
        .data(spain)
        .enter()
        .append("circle")
        .attr("r", 4.5)
        .style("fill","white")
        .style("stroke","black")
        .attr("cx",function(d) {return xtimescale(d.Year)})
        .attr("cy",function(d) {return ylinearscale(d.Arrival)});
  
      chartGroup.append("g").selectAll("circle")
        .data(hongkong)
        .enter()
        .append("circle")
        .attr("r", 4.5)
        .style("fill","white")
        .style("stroke","black")
        .attr("cx",function(d) {return xtimescale(d.Year)})
        .attr("cy",function(d) {return ylinearscale(d.Arrival)});
  
      chartGroup.append("g").selectAll("circle")
        .data(china)
        .enter()
        .append("circle")
        .attr("r", 4.5)
        .style("fill","white")
        .style("stroke","black")
        .attr("cx",function(d) {return xtimescale(d.Year)})
        .attr("cy",function(d) {return ylinearscale(d.Arrival)});
  
      //Add COUNTRY LABEL NAMES
      svg.append("text")      // france label for the x-axis
          .attr("x", width / 5 )
          .attr("y",  height + margin.bottom)
          .style("text-anchor", "middle")
          .attr("stroke","rgb(75, 195, 255)")
          .text("FRANCE");
  
      svg.append("text")      // unitedstates label for the x-axis
          .attr("x", width / 5 )
          .attr("y",  height + margin.bottom+20)
          .style("text-anchor", "middle")
          .attr("stroke","rgb(94, 236, 179)")
          .text("UNITED STATES");
  
      svg.append("text")      // spain label for the x-axis
          .attr("x", (width / 2) +50 )
          .attr("y",  height + margin.bottom)
          .style("text-anchor", "middle")
          .attr("stroke","white")
          .text("SPAIN");    
  
      svg.append("text")      // hongkong label for the x-axis
          .attr("x", (width / 2) +50 )
          .attr("y",  height + margin.bottom +20)
          .style("text-anchor", "middle")
          .attr("stroke","rgb(192, 213, 117)")
          .text("HONG KONG");  
          
      svg.append("text")      // china label for the x-axis
          .attr("x", (width / 5) +400 )
          .attr("y",  height + margin.bottom)
          .style("text-anchor", "middle")
          .attr("stroke","green")
          .text("CHINA");
          
      
      });
      
    }
  
  linechart();
  

grabcountries();



