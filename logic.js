const screenWidth = 640;
const screenHeight = 480;
let screenFullHeight = screenHeight;
const arraySize = 32;
const buttonAreaSize = 100;
const margin = 30;
let delta = 1;
let isInit = false;

let array = [];

function setup() {
    screenFullHeight += buttonAreaSize;
    createCanvas(screenWidth, screenFullHeight);
    colorMode(HSB, 360, 255, 255);
    frameRate(30);
    background(15);

    let buttonInitialize = createButton('initialize');
    let buttonShuffle = createButton('shuffle');
    let buttonSort = createButton('sort');

    buttonInitialize.position(25, 25);
    buttonShuffle.position(95, 25);
    buttonSort.position(157, 25);

    buttonInitialize.mousePressed(() => initializeArray(arraySize));
    buttonShuffle.mousePressed(() => randomMixArray());
    buttonSort.mousePressed(() => moveElement());
}

function initializeArray(size) {
    for (let i = 0; i < size; i++) {
        
            let elementColor = color(360 / size * i, 195, 230, 255);
            array[i] = new Element(arraySize - i, elementColor);
    }
    isInit = true;
}

function mixArray() {
    for (let i = 0; i < arraySize / 2; i++) {
        if (i % 2 == 0) {
            let temp = array[i];
            array[i] = array[arraySize - i];
            array[arraySize - i] = temp;
        }
    }
}

function randomMixArray() {
    for (let i = 0; i < arraySize; i++) {
        let randomIndex = getRandomInt(arraySize - 1);
        while (true) {
            if (i != randomIndex) {
                let temp = array[i];
                array[i] = array[randomIndex];
                array[randomIndex] = temp;
                break;
            } else {
                randomIndex = getRandomInt(arraySize - 1);
            }
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function draw() {
    background(15);
    redrawArray();
    // if (isInit) {
    //     moveElement();
    // }
}

function redrawArray() {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            drawElement(array[i], i);
        }
    }
}

function moveElement() {
    drawElement(array[0], delta);
    delta++;
}

class Element {
    constructor(value, elementColor) {
        this.value = value;
        this.elementColor = elementColor;
    }
}

function drawElement(element, index) {
    fill(element.elementColor);
    if (index == getRandomInt(32) || index == getRandomInt(32)) {
        stroke('white');
        strokeWeight(4);
    } else {
        // let colArr = element.elementColor.color;
        // let col = color(colArr., colArr[1], colArr[2]);
        stroke('white');
        strokeWeight(4);
        noStroke();
    }
    rect(index * screenWidth / arraySize + 1, 
            screenHeight + buttonAreaSize, 
            screenWidth / arraySize - 2, 
            -screenHeight / arraySize * element.value);
}