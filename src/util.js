const util = {
    calculateVisualizerDimensions,
    generateRandomBars,
};

/*
*   @param visualizerDiv represents the div element behind the visualizer
 */
function calculateVisualizerDimensions(visualizerDiv, barThickness, spaceBetweenBars) {

    if(visualizerDiv === null || visualizerDiv === undefined)
        return { width: 0, height: 0 };

    const divWidth  =  visualizerDiv.offsetWidth;

    const rows = calculateVisualizerRows(divWidth, barThickness, spaceBetweenBars);

    return { width: rows, height: 0.65 * window.innerHeight };
}

// returns the maximum number of rows we can fill the visualizer with
function calculateVisualizerRows(parentWidth, barThickness, spaceBetweenBars) {
    if(parentWidth < 500)
        parentWidth -= 10;
    else
        parentWidth -= 100;
    return Math.floor(parentWidth / (barThickness + spaceBetweenBars) - 5);
}

function generateRandomBars(len, maxHeight) {
    const ret = new Array(len);

    for(let i = 0;i < len;++i)
        ret[i] = {
            height: randomBetween(10, maxHeight),
            color: 'black'
        };

    return ret;
}

function randomBetween(a, b) {
    return Math.floor(a + Math.random() * (b - a));
}

export default util;