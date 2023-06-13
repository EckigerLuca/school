const TESTER = document.getElementById('tester');
Plotly.newPlot(TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16],
	z: [1, 2, 8, 16, 32] }], {
		margin: { t: 0 }
	});
