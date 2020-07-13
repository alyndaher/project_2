// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

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
var svg = d3.select("body")
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
      .attr("stroke","red")
      .attr("stroke-dasharray",2)

    chartGroup.append("path")
      .data([unitedstates])
      .classed("c2",1)
      .attr("d",line1)
      .attr("stroke","yellow")

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
      .attr("stroke","orange")

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
        .attr("stroke","red")
        .text("FRANCE");

    svg.append("text")      // unitedstates label for the x-axis
        .attr("x", width / 5 )
        .attr("y",  height + margin.bottom+20)
        .style("text-anchor", "middle")
        .attr("stroke","yellow")
        .text("UNITED STATES");

    svg.append("text")      // spain label for the x-axis
        .attr("x", width / 2 )
        .attr("y",  height + margin.bottom)
        .style("text-anchor", "middle")
        .attr("stroke","white")
        .text("SPAIN");    

    svg.append("text")      // hongkong label for the x-axis
        .attr("x", width / 2 )
        .attr("y",  height + margin.bottom +20)
        .style("text-anchor", "middle")
        .attr("stroke","orange")
        .text("HONG KONG");  
        
    svg.append("text")      // china label for the x-axis
        .attr("x", (width / 5) +500 )
        .attr("y",  height + margin.bottom)
        .style("text-anchor", "middle")
        .attr("stroke","green")
        .text("CHINA");
        
    
    });
    