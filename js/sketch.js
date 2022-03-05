let res = 20, w, h;
let mouseCLick = false;
let canCreateWall = false;
let canRemoveWall = false;
let canSetStart = false;
let canSetEnd = false;
let canvas;


// let searchIndicator = document.querySelector('#isSearching');
let wallButton = document.querySelector('#createWall');
let remWallButton = document.querySelector('#removeWall');
let startButton = document.querySelector('#setStart');
let endButton = document.querySelector('#setEnd');

var nodes=[];
function setup() { 
    var canvasW = innerWidth-(innerWidth%res), canvasH = innerHeight-(innerHeight%res);
    
    canvas = createCanvas(canvasW-res, canvasH-(150-(150%res)));
    w = width / res;
    h = height / res;
    canvas.parent('canvas');
    generateMatrix(w, h);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setStartHandler() {
    canCreateWall = false;
    canRemoveWall = false;
    canSetEnd = false;
    canSetStart = true;

    wallButton.checked = canCreateWall;
    remWallButton.checked = canRemoveWall;
    endButton.checked = canSetEnd;
    startButton.checked = canSetStart;

}


function setEndHandler() { 
    canCreateWall = false;
    canRemoveWall = false;
    canSetEnd = true;
    canSetStart = false;

    wallButton.checked = canCreateWall;
    remWallButton.checked = canRemoveWall;
    endButton.checked = canSetEnd;
    startButton.checked = canSetStart;
    
}

function createWallHandler() { 
    canCreateWall = true;
    canRemoveWall = false;
    canSetEnd = false;
    canSetStart = false;

    wallButton.checked = canCreateWall;
    remWallButton.checked = canRemoveWall;
    endButton.checked = canSetEnd;
    startButton.checked = canSetStart;
}
function removeWallHandler() { 
    canCreateWall = false;
    canRemoveWall = true;
    canSetEnd = false;
    canSetStart = false;

    wallButton.checked = canCreateWall;
    remWallButton.checked = canRemoveWall;
    endButton.checked = canSetEnd;
    startButton.checked = canSetStart;
}
function pointInCanvas() {
        if (mouseX<width&&mouseX>0&&mouseY<height&&mouseY>0) { 
            return true;
        }
        return false;
}

function mouseDragged(){ 
if (pointInCanvas()) {
        mouseCLick = true;
    }
}

function mouseClicked(){ 
    // console.log('mouse');
    // console.log(mouseX, ",", mouseY);
    if (pointInCanvas()) {
        mouseCLick = true;
    }
}
function draw() { 
    // searchIndicator.textContent = isSearching;
    drawGrid();
}


function drawGrid() {
    background(200);
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) { 
            nodes[y][x].update();
        }
    }
    // console.log(dx,",",dy);
   
}