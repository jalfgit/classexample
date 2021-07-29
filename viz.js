// this contains the logic code for my viz

var revenue = {
    x: sales.month,
    y: sales.revenue,
    mode: 'lines',
    type: 'scatter'
  };

Plotly.newPlot('revenue', [revenue]);

var cost = {
    x: sales.month.slice(-3),
    y: sales.cost.slice(-3),
    type: 'bar'
  };


  var layout = {
    title: 'cost by month',
    font:{
      family: 'Raleway, sans-serif'
    }}

Plotly.newPlot('cost', [cost],layout);


// danfo

df = new dfd.DataFrame(sales)
df.print()


// url, then a d3.json(url)

let url = "https://www.quandl.com/api/v3/datasets/YALE/US_CONF_INDEX_VAL_INDIV.json?api_key=oDnGxr34oe5gotFfKKNw";

// d3.json(url).then(data=>console.log(data.dataset.data));

var dates = [];
var index_values=[];

d3.json(url).then(data=>{
  data.dataset.data.forEach(record =>{
    dates.push(record[0]);
    index_values.push(record[1]);
  })
});

function buildSentiment(dates,index_values) {
  var mkt_confidence = {
    x: dates.map(x=>x),
    y: index_values.map(x=>x),
    type: 'scatter'
  };

  var layout = {
    title: 'Sentiment',
    font:{
      family: 'Raleway, sans-serif'
    }}
    Plotly.newPlot('sentiment', [mkt_confidence],layout);
}


buildSentiment(dates,index_values);



