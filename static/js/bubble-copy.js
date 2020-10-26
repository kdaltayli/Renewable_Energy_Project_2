
data_path = "../static/data/countrygdp.json"

// function topTenGDPCountries() {
//     var toptenNames;
//     d3.json(data_path).then(function (dataSample) {     
//         console.log(dataSample)
//         dataFor2019 = dataSample.filter(d => d.year === 2019);
//         dataFor2019.sort(function (a,b) {return d3.descending(a.gdp, b.gdp);});
        
//         slicedData = dataFor2019.slice(0, 12); 
//         // console.log(slicedData)

//         toptenNames = slicedData.map(d => d.country)
//         console.log(toptenNames)
//     });
//     console.log(toptenNames)
//     return toptenNames; 
// }


function bubbleChartTopTen(){
    d3.json(data_path).then(function (dataSample) {     
        console.log(dataSample)
        dataFor2019 = dataSample.filter(d => d.year === 2019);
        dataFor2019.sort(function (a,b) {return d3.descending(a.gdp, b.gdp);});
        
        slicedData = dataFor2019.slice(0, 12); 
        // console.log(slicedData)

        country_list = slicedData.map(d => d.country)
        console.log(country_list)

        filteredArray = dataSample.filter( function( el ) {
            return country_list.includes( el.country );
        });

        console.log(filteredArray)

        console.log(filteredArray[0].gdp);
        console.log(filteredArray[0].year);

        var trace2 = {
            y: filteredArray.map(d => d.gdp),
            x: filteredArray.map(d => d.year),
            text: filteredArray.map(d => d.country),
            mode: "markers",
            marker: {size: filteredArray.map(d => d.gdp * 0.001), 
                    colorscale: filteredArray.map(d => d.country), 
                         }
        };

        data = [trace2]
        layout = {
            title: "Bubble Chart",
            margin : {t:10}
        }

        Plotly.newPlot("bubble", data, layout);

    });
}


// Working Code - Bubble Chart
function bubbleChart(selectedCountry){
    d3.json(data_path).then(function (dataSample) {     
        console.log(dataSample)   

        getCountries = (dataSample.map(d => d.gdp));
        console.log(getCountries)   

        var dataObj = dataSample.filter(data => data.country === selectedCountry);
        // dataObj = dataObj.reverse();
        console.log(dataObj)
        console.log(dataObj[0].gdp);
        console.log(dataObj[0].year);

        var trace2 = {
            y: dataObj.map(d => d.gdp),
            x: dataObj.map(d => d.year),
            text: dataObj.year,
            mode: "markers",
            marker: {size: dataObj.map(d => d.gdp * 0.01)}
        };

        data = [trace2]
        layout = {
            title: "Bubble Chart",
        }

        Plotly.newPlot("bubble", data, layout);
    });    
}

// import Chart from 'chart.js';
function polarAreaChart() {    
    // d3.json("../static/data/energysource.json").then(function (srcdata){
    //     console.log(srcdata);
    //     sol = srcdata.filter(d => d.source === "Solar")
    //     sol_data = sol.map(d => d.units)
    //     wind = srcdata.filter(d => d.source === "Wind")
    //     wind_data = wind.map(d => d.units)
    //     hydro = srcdata.filter(d => d.source === "Hydro")
    //     hydro_data = hydro.map(d => d.units)
    //     console.log(sol_data)
  
        d3.json(data_path).then(function (dataSample) {     
            console.log(dataSample)   
    
            getCountries = (dataSample.map(d => d.gdp));
            console.log(getCountries)   
    
            var dataObj = dataSample.filter(data => data.country === "United States");
            // dataObj = dataObj.reverse();
     

    var ctx = document.getElementById('myChart');
    var data = {
        datasets: [{
            data : dataObj.map(d => d.gdp),
            backgroundColor: [            
                "#RRGGBB", "#800000", "#8B0000", "#A52A2A", "#B22222",
                "#DC143C", "#FF0000", "#FF6347", "#FF7F50" ,"#CD5C5C",
                "#F08080", "#E9967A", "#FA8072", "#FFA07A", "#FF4500",
                "#FF8C00", "#FFA500", "#FFD700", "#B8860B", "#DAA520"                
            ],
        }],
        
        labels : dataObj.map(d => d.year)  //<-- added labels

      };
    var chartOptions = {
        startAngle: -Math.PI / 4,
        legend: {
          position: 'left'
        },
        animation: {
          animateRotate: false
        }
      };
       
    
    var myChart = new Chart(ctx, {
        data: data,
        type: 'polarArea',
        options: chartOptions
    });
});
}

polarAreaChart()
// bubbleChart("Arab World")

// country_list = topTenGDPCountries()
// console.log(country_list)

bubbleChartTopTen()
// topTenGDPCountries()





