// Data container (max length of 20)
var graphData = [];

// We scale the height of our bars using d3's linear scale
var vScale = d3.scaleLinear().range([0, 5]);

// Getting the containers to assign the curve points to
var greenhouseConsumption = d3.select('#a-greenhouse-consumption');
var greenhouseSolar = d3.select('#a-greenhouse-solar');

var greenhouseCon = d3.select('#a-greenhouse-con');

function renderLine(data) {
	if (data.length === 0) return;

	// if (data.length === 1) {
	// 	console.log('Got first data');
	// 	// renderY(data);
	// }

	// yScale.domain([
	// 	150,
	// 	d3.max(data, function(d) {
	// 		return d.consumption + 20;
	// 	}),
	// ]);

	// Assign and update the scale at each (re)render
	vScale.domain([getMinimum(data), getMaximum(data)]);

	// We select the scene object just like an svg
	var curveTrack = greenhouseConsumption.selectAll('a-curve-point').data(data);

	// We use d3's enter/update/exit pattern to draw and bind our dom elements
	curveTrack
		.enter()
		.append('a-curve-point')
		.merge(curveTrack)
		.attr('position', function(d, i) {
			var position = {
				x: 0.1 * (i * 2),
				y: 0,
				z: 0 - vScale(d.consumption) / 2,
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

//Trying out rendering ticks
function renderY(data) {
	console.log('dd', data);
	greenhouseCon.append('a-entity').call(d3.axisLeft(yScale));

	// .append('a-text')
	// .attr('position', '0 0 0')
	// .attr('value', 'Hello');

	// text label for the y axis
	// greenhouseCon
	// .append('a-text')
	// .attr('position', '0 0 0')
	// .attr('value', 'Hello');
}

function getMinimum(data) {
	var min = d3.min(data, function(d) {
		return d.consumption;
	});

	return min - 5;
}

function getMaximum(data) {
	var max = d3.max(data, function(d) {
		return d.consumption;
	});
	return max + 5;
}
