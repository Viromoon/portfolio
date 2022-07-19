//Clim Change Problem | Line Chart 
//https://plotly.com/javascript/ajax-call/
function makeplot(){
    dataSource = "https://raw.githubusercontent.com/Viromoon/Deco3100/main/CO2_line_chart.csv";
    //Plotly.d3.csv(("CO2_line_chart.csv"), function(data){console.log(data)});
    Plotly.d3.csv(dataSource, function(data){ processData(data)});
}
  
function processData(allRows){
    let x = [], y= [];
    for (let i = 0; i<allRows.length; i++){
        let row = allRows[i];
        x.push( row['year']);
        y.push( row['tonnes (t)']);
    }
    console.log( 'X',x, 'Y',y);
    makePlotly( x, y );
}
function makePlotly( x, y){
    var plotDiv = document.getElementById("plot");
    var traces1 = [{
      x: x, 
      y: y,
      mode: 'lines+markers',
      type: 'scatter',
      line: {
        color: 'rgba(4,87,91,.7)',
        width: 3
      }
    }];
    


    var layout1 = {title:'2000-2020 Australia\'s CO2 emissions per capita',
    annotations: [
      {
        x: '2020',
        y: '15.37',
        xref: 'x',
        yref: 'y',
        text: '6.6% <br> crept <br>down',
        showarrow: true,
        font: {
          family: '"Arial", Helvetica, sans-serif',
          size: 10,
          color: 'white'
        },
        align: 'center',
        arrowhead: 2,
        arrowsize: 1,
        arrowwidth: 2,
        arrowcolor: 'rgb(239,68,40)',
        ax: 20,
        ay: -30,
        bordercolor: 'rgba(239,68,40,0.5)',
        borderwidth: 2,
        borderpad: 4,
        bgcolor: 'rgb(239,68,40)',
        opacity: 0.8
      }
    ],
    font: {size: 10},
    height: 400,
  width: 600,
    plot_bgcolor:'rgba(173,216,230,.5)',
      paper_bgcolor:"#FFF3",
  xaxis:{
    title: 'Year'
  },
  yaxis:{
    title: 'Tonnes(t)'
  },
};

var config1 = {responsive: true}
  
  Plotly.newPlot('myLineGraph', traces1, layout1, config1);
  
};

makeplot();

//Seaweed > Carbon Offsets | Offset BarChart
//https://plotly.com/javascript/bar-charts/
var trace3 = {
  x: ['Seaweed Farms', 'Wind Farming','Solar Energy'],
  y: [ 56, 60, 243],
  marker:{
    color: ['rgba(239,68,40,0.8)','rgba(4,87,91,0.7)' ,'rgba(4,87,91,0.7)']
  },
  type: 'bar'
};

var data3 = [trace3];

var layout3 = {
  title: 'Seaweed VS Less than 300 Days Offset',
  font: {size: 10},
  height: 250,
  width: 400,
  plot_bgcolor:'rgba(173,216,230,.5)',
      paper_bgcolor:"#FFF3",
      yaxis:{
        title: 'Days'
      },
      xaxis: {
        tickangle: '25',
      }
};

var config3 = {responsive: true}

Plotly.newPlot('myBarChart2', data3, layout3, config3);

//Seaweed > Carbon Offsets | Offset BarChart
//https://plotly.com/javascript/bar-charts/
var trace4 = {
  x: ['Seaweed Farms','LandFill Gas', 'HydroPower', 'Methane Gas Capture'],
  y: [56, 1826, 2556, 3287,219150],
  marker:{
    color: ['rgba(239,68,40,0.8)','rgba(4,87,91,0.7)', 'rgba(4,87,91,0.7)', 'rgba(4,87,91,0.7)']
  },
  type: 'bar'
};

var data4 = [trace4];

var layout4 = {
  title: 'Seaweed VS More than 300 Days Offset',
  font: {size: 10},
  height: 250,
  width: 400,
  plot_bgcolor:'rgba(173,216,230,.5)',
      paper_bgcolor:"#FFF3",
      yaxis:{
        title: 'Days'
      },
      xaxis: {
        tickangle: '25',
      }
};

var config4 = {responsive: true}

Plotly.newPlot('myBarChart3', data4, layout4, config4);


//Seaweed > Carbon Offsets | PlantGrowth BarChart
//https://plotly.com/javascript/bar-charts/
var trace5 = {
  x: ['Seaweed', 'AverageTree'],
  y: [60, 0.28],
  marker:{
    color: ['rgba(239,68,40,0.8)', 'rgba(4,87,91,0.7)']
  },
  type: 'bar'
};

var data5 = [trace5];

var layout5 = {
  title:'Plant Growth In One Day (cm)',
  font: {size: 10},
  height: 250,
  width: 400,
  showlegend: false,
  plot_bgcolor:'rgba(173,216,230,.5)',
      paper_bgcolor:"#FFF3",
  xaxis:{
    title: 'One Day'
  },
  yaxis:{
    title: 'Centimetres (cm)'
  },
};

var config5 = {responsive: true}

Plotly.newPlot('myBarChart', data5, layout5, config5);


//Seaweed Benefits | Sunburst Chart
//https://plotly.com/javascript/sunburst-charts/
var data6 = [{
  type: "sunburst",
  ids: [
    "MEDICAL", "ANIMAL FEED", "BEAUTY", "FOOD", "PLASTIC ALTERNATIVE",
    "GROWING MUSSELS WITH SEAWEED", "TEXTILES", "Medical-Print Human Tissue",
    "Animal Feed- Reduce Cow Methane","Beauty-Pharmaceutical Products", "Beauty-Seaweed Bath",
    "Food-Micro Nutrients", "Food-Common Edible", "Folate",
    "Calcium", "Magnesium", "Zinc", "Iron", "Selenium", 
    "Nori", "Kombu", "Wakame", "Ogonori", "Umibudo","Notpla", "SeaCellFiber",
  ],
  labels: [
    "MEDICAL", "ANIMAL<br>FEED", "BEAUTY", "FOOD", "PLASTIC<br>ALTERNATIVE",
    "GROWING<br>MUSSELS<br>WITH<br>SEAWEED", "TEXTILES", "Print<br>Human<br>Tissue",
    "Reduce<br>Cow<br>Methane","Pharmaceutical<br>Products", "Seaweed<br>Bath",
    "Micro<br>Nutrients", "Common<br>Edible", "Folate",
    "Calcium", "Magnesium", "Zinc", "Iron", "Selenium", 
    "Nori", "Kombu", "Wakame", "Ogonori", "Umibudo","Notpla","SeaCell Fiber",
  ],
  parents: [
    "", "", "", "", "", "", "","MEDICAL", "ANIMAL FEED", "BEAUTY", "BEAUTY",
    "FOOD", "FOOD","Food-Micro Nutrients", "Food-Micro Nutrients", "Food-Micro Nutrients",
    "Food-Micro Nutrients", "Food-Micro Nutrients", "Food-Micro Nutrients",
    "Food-Common Edible", "Food-Common Edible", "Food-Common Edible",
    "Food-Common Edible", "Food-Common Edible","PLASTIC ALTERNATIVE", "TEXTILES",
  ],
  outsidetextfont: {size: 20, color: "#377eb8"},
  marker: {line: {width: 2}},
  text: [
    "<a href=\"https://www.healthline.com/nutrition/seaweed-healthy-nutritious\">🔷</a>",
    "<a href=\"https://www.csiro.au/en/research/animals/livestock/futurefeed#:~:text=Feeding%20livestock%20a%20seaweed%20supplement,reducing%20powerful%20greenhouse%20gas%20emissions.&text=Dung%20beetles%20control%20buffalo%20and%20bush%20flies.\">🔷</a>",
    "<a href=\"https://www.nakinskincare.com/blogs/news/10-benefits-of-seaweed-for-skin\">🔷</a>",
    "<a href=\"https://www.medicalnewstoday.com/articles/323916\">🔷</a>",
    "<a href=\"https://ecos.csiro.au/could-seaweed-replace-plastic/#:~:text=%E2%80%9CBiomaterials%20made%20from%20seaweed%20offers,are%20needed%20to%20farm%20them.%E2%80%9D\">🔷</a>",
    "<a href=\"https://www.gu.se/en/news/kelp-benefits-from-co-cultivation-with-mussels#:~:text=Aquaculture%20together%20with%20mussels%20allows,at%20the%20University%20of%20Gothenburg.\">🔷</a>",
    "<a href=\"https://ecoworldonline.com/what-is-seaweed-fabric-fabric-from-the-ocean/#:~:text=Seaweed%20is%20a%20rich%20source,sea%20minerals%20and%20trace%20elements.\">🔷</a>",
    "<a href=\"https://www.forbes.com/sites/natalieparletta/2019/04/01/from-3d-printing-and-wound-healing-to-bioplastic-and-faux-cotton-seaweed-just-keeps-on-giving/?sh=70de0faf14a4\">🔷</a>",
    "<a href=\"https://time.com/6119791/seaweed-cows-methane-emissions/#:~:text=In%202020%20Australian%20researchers%20found,local%20variant%20does%20the%20same.\">🔷</a>",
    "<a href=\"https://www.medicalnewstoday.com/articles/324993\">🔷</a>",
    "<a href=\"https://www.soakseaweedbaths.com/seaweedbaths/benefits#:~:text=Scientific%20studies%20have%20confirmed%20that,excellent%20for%20some%20circulatory%20problems.\">🔷</a>",
    "<a href=\"https://knepublishing.com/index.php/KnE-Life/article/view/79/1276\">🔷</a>",
    "<a href=\"https://www.healthline.com/nutrition/seaweed-healthy-nutritious#types-of-seaweed\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/folic-acid/\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/calcium/\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/magnesium/\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/zinc/#:~:text=Zinc%20is%20a%20trace%20mineral,supporting%20a%20healthy%20immune%20system.\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/iron/\">🔷</a>",
    "<a href=\"https://www.hsph.harvard.edu/nutritionsource/selenium/\">🔷</a>",
    "<a href=\"https://howdaily.com/nori/\">🔷</a>",
    "<a href=\"https://www.justonecookbook.com/kombu/\">🔷</a>",
    "<a href=\"https://www.thespruceeats.com/what-is-wakame-seaweed-3376826\">🔷</a>",
    "<a href=\"https://www.wealsea.com/en/produit/ogonori-2/\">🔷</a>",
    "<a href=\"https://www.organicfacts.net/umibudo-sea-grapes.html#:~:text=Umibudo%20(Caulerpa%20lentillifera)%20is%20an,mouth%20when%20you%20eat%20them.\">🔷</a>",
    "<a href=\"https://www.notpla.com/\">🔷</a>",
    "<a href=\"https://www.smartfiber.de/en/seacell-fiber/\">🔷</a>"
  ],
}];

var layout6 = {
  margin: {l: 0, r: 0, b: 0, t:0},
  font: {size: 10},
  sunburstcolorway:["#05668D","#028090","#00A896","#02C39A","#F0F3BD","#9EE2BE","#6EBB7F"],
  height: 400,
  width: 400,
};

var config6 = {responsive: true}

Plotly.newPlot('mySunburstChart', data6, layout6, config6);

//Chloropleth Map 
//https://plotly.com/javascript/choropleth-maps/
d3.csv('https://raw.githubusercontent.com/Viromoon/Deco3100/main/Map.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

       var data7 = [{
            type: 'choropleth',
            locations: unpack(rows, 'CODE'),
            z: unpack(rows, 'FARMS'),
            text: unpack(rows, 'COUNTRY'),
            hovertemplate:
            "%{text}<br>" +
            "<b>%{location}</b><br><br>" +
            "<extra></extra>",
            colorscale: [
                [0,'#FFF6C4'],[1,'rgba(4,87,91,0.7)']],
            autocolorscale: false,
            showscale: false,
            reversescale: false,
            marker: {
                line: {
                    color: '#8B9697',
                    width: 1
                },
            },
            
            
            
      }];

      var layout7 = {
        title: 'Seaweed Farms Globally (Highlighted Green)',
        font: {size: 10},
      dragmode: false,
        height: 450,
        width: 1400,
        showlegend:false,
        geo:{
          bgcolor: '#A9DFF3',
          showframe: false,
            showcoastlines: false,
          projection:{
            type: 'robinson',
            }
        },
    };

    var config7 = { 
      responsive: true,
      scrollZoom: false,
      displayModeBar: false
};

      Plotly.newPlot("myMap", data7, layout7,{showLink: false, responsive: true}, config7);
});

//Your Help | Pie Chart2
//https://plotly.com/javascript/pie-charts/
var data8 = [{
  values: [3, 97],
  labels: [ 'net-zero carbon', 'world\'s ocean'],
  type: 'pie',
  textinfo: "percent+label",
  insidetextorientation: "outisde",
  marker: {
    colors: ['rgba(239,68,40,0.8)', 'rgba(173,216,230,.5)']
  },
  hovertemplate: '%{value}%<br>' +
                        '<b>%{label}</b>'+
                        '<extra></extra>'
                        
}];

var layout8 = {
  title:'What Percentage of the World\'s Ocean Can Make An Impact',
  font: {size: 9},
  height: 350,
  width: 400,
  showlegend: false,
  legend: {"orientation": "h",
  }
	    
};

var config8 = {responsive: true}

Plotly.newPlot('myPieChart', data8, layout8, config8);




