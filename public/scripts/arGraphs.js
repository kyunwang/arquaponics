// fake data
var data = [10, 20, 30, 15, 25, 35, 40, 45, 50, 70, 100, 120, 130, 12, 18, 22, 29, 33, 44, 59, 200];

// we scale the height of our bars using d3's linear scale
var hscale = d3
	.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, 3]);

// we select the scene object just like an svg
var scene = d3.select('#a-greenhouse');

// we use d3's enter/update/exit pattern to draw and bind our dom elements
// var bars = scene.selectAll('a-cube.bar').data(data);

scene
	.selectAll('a-box')
	.data(data)
	.enter()
	.append('a-box')
	.attr('color', 'red')
	.attr('width', 1)
	.attr('height', function(d, i) {
		return d / 20;
	})
	.attr('position', function(d, i) {
		var position =
			String(0.25 * (i * 2)) + ' ' + String('.25' * (i * 2)) + ' ' + String('-.25' * (i * 2));
		return position;
		// position = '.25 .25 -.25';
	})
	.attr('depth', 0.5);
