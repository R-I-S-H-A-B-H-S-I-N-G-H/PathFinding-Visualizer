let start = undefined, end = undefined;
var delay = 10;
let isSearching = false;
function generateMatrix(w,h) {   
    for (let y = 0; y < h; y++) {
        let temp = [];
        for (let x = 0; x < w; x++) {
            let n = new Node(x, y, res)
            temp.push(n);
        }
        nodes.push(temp);
    }
    nodes[(int)(h / 3)][(int)(w / 3)].setStart();
    nodes[nodes.length - 1][nodes[0].length - 1].setEnd();

}


function getNeighbours(x, y) { 
    const neighbours = [];
   
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if ((i == 0 && j == 0)) {
                continue;
            }
            if (isValid(x+i,y+j)) {
                var t = {};
                t.x = x + i;
                t.y = y + j;
                neighbours.push(t);
            }
                
        }
    }
    return neighbours;
}
function lowestFcost(open) {
    var lfcost = getNode(open[0].x, open[0].y);
    // console.log("first element of
    // open",open[0]);
    
    var index = 0;
    for (var i = 0; i < open.length; i++) {
        var n = getNode(open[i].x, open[i].y);
        if (n.fcost < lfcost.fcost||n.fcost==lfcost.fcost&&n.hcost<lfcost.hcost) {
            lfcost = n;
            index = i;
        }
    }

    return index;
}


function getNode(x,y) {
    if (isValid(x,y)) { 
        return nodes[y][x];
    }
    console.log('node doest exist for : ',x,y);
    return null;
}
// function getNode(indx) { 
//     console.log("from get node",indx);
//     return getNode(indx.x,indx.y);
// }

function isValid(x, y) {
    return (x>=0&&y>=0&&x<nodes[0].length&&y<nodes.length&&!nodes[y][x].wall);

}
function clearMat() { 
    console.log('cleared previous result');
    for (var i = 0; i < nodes.length;i++) { 
        for (var j = 0; j < nodes[0].length; j++) {
            var n = nodes[i][j];
            n.resetNode();
            



        }
    }
}