// fake data
// var graphData = [10, 20, 30, 45, 50, 70, 100, 120, 130, 12, 29, 59, 200];
// var randomNum = d3.randomNormal(0, 200);

// Data container (max length of 20)
var graphData = [];

// we scale the height of our bars using d3's linear scale
var hscale = d3.scaleLinear().range([0, 5]);

var greenhouseLine = d3.select('#a-greenhouse-line');

function renderLine(data) {
	// Assign and update the scale at each (re)render
	// hscale.domain([0, d3.max(data)]);
	// hscale.domain([0, 1000]);
	hscale.domain([80, 160]);

	// We select the scene object just like an svg
	var curveTrack = greenhouseLine.selectAll('a-curve-point').data(data);

	// We use d3's enter/update/exit pattern to draw and bind our dom elements
	curveTrack
		.enter()
		.append('a-curve-point')
		.merge(curveTrack)
		.attr('position', function(d, i) {
			var position = {
				x: 0.15 * (i * 2),
				y: 0,
				z: 0 - hscale(d.consumption) / 2,
			};
			return position;
		});

	// For testing the points. Renders a box at each curve point
	// .attr('geometry', function(d) {
	// 	var attr = {
	// 		primitive: 'box',
	// 		height: 0.1,
	// 		width: 0.1,
	// 		depth: 0.1,
	// 	};

	// Remove old elements as needed.
	curveTrack.exit().remove();
}

// Initial render
renderLine(graphData);

// setInterval(async function() {
// 	console.log('Call');
//		graphData.push(randomNum());
//		graphData.shift();
// 	renderLine(graphData);
// }, 1500);
