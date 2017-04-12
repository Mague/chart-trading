var socket = io("http://localhost:8080");
socket.on('connect', function(socket){
  	console.log("asd")
});
socket.on('disconnect', function(){
console.log('user disconnected');
});

var chart = AmCharts.makeChart("chartdiv", {
	"type": "serial",
	"theme": "light",
	"dataDateFormat": "YYYY-MM-DD",
	"valueAxes": [{
		"position": "left"
	}],
	"graphs": [{
		"id": "g1",
		"proCandlesticks": true,
		"balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
		"closeField": "close",
		"fillColors": "#7f8da9",
		"highField": "high",
		"lineColor": "#7f8da9",
		"lineAlpha": 1,
		"lowField": "low",
		"fillAlphas": 0.9,
		"negativeFillColors": "#db4c3c",
		"negativeLineColor": "#db4c3c",
		"openField": "open",
		"title": "Price:",
		"type": "candlestick",
		"valueField": "close"
	}],
	"chartScrollbar": {
		"graph": "g1",
		"graphType": "line",
		"scrollbarHeight": 30
	},
	"chartCursor": {
		"valueLineEnabled": true,
		"valueLineBalloonEnabled": true
	},
	"categoryField": "date",
	"categoryAxis": {
		"parseDates": true
	},
	"dataProvider": [{
		"date": "2011-08-01",
		"open": "136.65",
		"high": "136.96",
		"low": "134.15",
		"close": "136.49"
	}, {
		"date": "2011-08-02",
		"open": "135.26",
		"high": "135.95",
		"low": "131.50",
		"close": "131.85"
	}],
	"export": {
		"enabled": true,
		"position": "bottom-right"
	}
});

chart.addListener("rendered", zoomChart);
zoomChart();
// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
chart.zoomToIndexes(chart.dataProvider.length - 50, chart.dataProvider.length - 1);
}