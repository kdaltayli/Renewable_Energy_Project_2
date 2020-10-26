
data_path = "../static/data/energysourcenew.json"

d3.json(data_path).then(function (dataSample) {     
    // console.log(dataSample);  

    var country_us = dataSample.filter(d => d.country==="United States");
    // console.log(country_us);   

   var year_00_19 = country_us.filter(d => d.year>=2000);
    // console.log(year_00_19);

    var year = year_00_19.map( d => d.year);
    // console.log(year);

    var uniqueYear = year.filter((value, index, self) => self.indexOf(value) === index);
    // var uniqueYear = year.filter(distinct);
    console.log(uniqueYear);

   var solar_en= year_00_19.filter(d => d.source === "Solar")
//    console.log(solar_en);

   var sol_unit = solar_en.map(d => d.units);
   console.log(sol_unit);

   var wind_en= year_00_19.filter(d => d.source === "Wind")
//    console.log(wind_en);

   var wind_unit = wind_en.map(d => d.units);
   console.log(wind_unit);

   var hydro_en= year_00_19.filter(d => d.source === "Hydro")
//    console.log(hydro_en);

   var hydro_unit = hydro_en.map(d => d.units);
   console.log(hydro_unit);
   var trace1 = {
    x: uniqueYear,
    y: sol_unit,
    mode: 'markers',
    name: 'Solar',
    marker: {
      color: 'orange',
      size: 20,
    //   opacity: [0.6, 0.7, 0.8, 0.9],
      symbol: 'square'
    },
    type: 'scatter'
  };
//   , 'hsl(33,100,40)', 'hsl(66,100,40)', 'hsl(99,100,40)'
  var trace2 = {
    x: uniqueYear,
    y: wind_unit,
    mode: 'markers',
    name: 'Wind',
    marker: {
      color: 'rgb(31, 119, 180)',
      size: 20,
      symbol: 'circle'
    },
    type: 'scatter'
  };
  
  var trace3 = {
    x: uniqueYear,
    y: hydro_unit,
    mode: 'markers',
    name: 'Hydropower',
    marker: {
      size: 20,
    //   line: {
        color: 'red',
    //     width: [2, 2, 6, 2]
    //   },
      symbol: 'diamond'
    },
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3];
  
  var layout = {showlegend: false,
                xaxis:{title:'Year'},
                yaxis:{title:'Units'},
                title:'Energy Production over last 20 Years'
            };
  
  Plotly.newPlot('bubble', data, layout);


});    


