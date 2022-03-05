

function bfs() { 
    if (isSearching||!start || !end) { 
        console.log('start and end  are empty');
        return null;
    }
    isSearching = true;
    clearMat();
    bfs_util().then(() => {
        console.log('done finding');
        isSearching = false;
    });
    
}

async function bfs_util() {
    console.log('bfs');
    var queue = [];
    var t = start.index;
    // console.log(t);
    queue.push(t);

    while (queue.length > 0) {
        
        let cur = queue.shift();
        getNode(cur.x, cur.y).visited = true;
        if (cur==end.index) { 
            console.log('element found');
            const path = [];
            var itr = end;
            while (itr) { 
                path.push(itr.index);
                itr.path = true;
                itr = itr.parent;
            }
            path.reverse();
            // console.log(path);
                    break;
        }
        
        
        var neighbours = getNeighbours(cur.x, cur.y);
        await sleep(delay);
        for (var i = 0; i < neighbours.length; i++) {
            var n =getNode(neighbours[i].x,neighbours[i].y);
           
            if (n.visited) { 
                continue;
            }
             n.neighbour = true;
            n.parent = getNode(cur.x,cur.y);
            n.visited = true;
            queue.push(n.index);
            

        }

    }
}