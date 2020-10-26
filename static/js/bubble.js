
data_path = "../static/js/energysource.json"

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


// function bubbleChartTopTen(){
//     d3.json(data_path).then(function (dataSample) {     
//         console.log(dataSample)
//         dataFor2019 = dataSample.filter(d => d.year === 2019);
//         dataFor2019.sort(function (a,b) {return d3.descending(a.gdp, b.gdp);});
        
//         slicedData = dataFor2019.slice(0, 12); 
//         // console.log(slicedData)

//         country_list = slicedData.map(d => d.country)
//         console.log(country_list)

//         filteredArray = dataSample.filter( function( el ) {
//             return country_list.includes( el.country );
//         });

//         console.log(filteredArray)
//         data = []
//         country_list.forEach(country => {
//             filteredData = ...
//             trace = ...
//             data.push(trace)
//         })

//         layout = {
//             title: "Bubble Chart",
//             margin : {t:10}
//         }

//         Plotly.newPlot("bubble", data, layout);

//     });
// }


// Working Code - Bubble Chart
function bubbleChart(selectedCountry){
    d3.json(data_path).then(function (dataSample) {     
        console.log(dataSample)   
        var dataObj = dataSample.filter(data => data.country === selectedCountry && data.year >= 2000);
        // dataObj = dataObj.reverse();
        console.log(dataObj)
        console.log(dataObj[0].gdp);
        console.log(dataObj[0].year);

        var trace2 = {
            y: dataObj.map(d => d.units),
            x: dataObj.map(d => d.year),
            text: dataObj.map(d => d.source),
            mode: "markers",
            marker: {size: dataObj.map(d => d.units * 0.1)}
        };

        data = [trace2]
        layout = {
            title: "Bubble Chart",
        }

        Plotly.newPlot("bubble", data, layout);
    });    
}
bubbleChart("United States")

// country_list = topTenGDPCountries()
// console.log(country_list)

// bubbleChartTopTen()
// topTenGDPCountries()