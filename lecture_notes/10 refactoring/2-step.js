'use strict';

// Function that iterates each element in polyline checks if it's an obj; parse it using JSON.
const PointParse = (points) => {
    return points.map((point) => {
        // Using ternary operator
        return typeof point != 'object' ? JSON.parse(point) : point
    });
}

// Taking a result from PointParse and shifting it
const PointsShift = (arr, dot_param) => {
    return arr.map((dot) => {
        dot['x'] += dot_param['x']
        dot['y'] += dot_param['y']
        return dot;
    });
}

const polyline = [
    { x: 0, y: 0 },
    { x: 10, y: 10 },
    '{ "x": 20, "y": 20 }',
    { x: 30, y: 30 },
];


const path = PointParse(polyline)
console.log(PointsShift(path, { x: 10, y: -5 }))
