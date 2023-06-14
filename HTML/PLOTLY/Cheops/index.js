const myPlot = document.getElementById('myPlot');

const data = [{
    x: [0, 230, 230, 0, 0, 115, 230, 230, 115, 0],
    y: [0, 0, 230, 230, 0, 115, 0, 230, 115, 230],
    z: [0, 0, 0, 0, 0, 139, 0, 0, 139, 0],
    mode: 'lines+markers',
    type: 'scatter3d',
    marker: {
        color: 'rgb(23, 190, 207)',
        size: 6,
    },
    line: {
        color: 'rgb(23, 190, 207)',
        width: 2,
    },
}];

const layout = {
    autosize: true,
    height: 900,
    width: 900,
    scene: {
        aspectratio: {
            x: 1,
            y: 1,
            z: 1,
        },
        camera: {
            center: {
                x: 0,
                y: 0,
                z: 0,
            },
            eye: {
                x: 1.25,
                y: 1.25,
                z: 1.25,
            },
            up: {
                x: 0,
                y: 0,
                z: 1,
            },
        },

        xaxis: {
            type: 'linear',
            zeroline: false,
            title: 'X Axis',
        },

        yaxis: {
            type: 'linear',
            zeroline: false,
            title: 'Y Axis',
        },

        zaxis: {
            type: 'linear',
            zeroline: false,
            title: 'Z Axis',
        },
    },
    title: 'Cheops Pyramide',
};

Plotly.newPlot(myPlot, data, layout);