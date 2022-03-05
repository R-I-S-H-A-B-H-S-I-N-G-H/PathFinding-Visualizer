 function astar() { 
    if (isSearching||!start || !end) { 
        console.log('start and end empty');
        return;
    }
    clearMat();
    isSearching = true;
    astar_util().then(() => {
         isSearching = false;
    });
    
}

async function astar_util() {
 
    const closedset = []
    const openset = []
    openset.push(start.index);
    start.open = true;
    while (openset.length > 0) {
        var indx = lowestFcost(openset);
        var current = getNode(openset[indx].x, openset[indx].y);
       

        // removing from open set
        openset.splice(indx, 1);

        // adding to closed
        closedset.push(current.index);
        current.setClose();
        
        
        if (current === end) {
            console.log('found the path');
            generatePath();
            return true;
        }
        

        // getting neighbours
        var neighbours = getNeighbours(current.index.x,current.index.y);
        await sleep(delay);
        var c = 0;
        for (var i = 0; i < neighbours.length; i++) {
            var n = getNode(neighbours[i].x, neighbours[i].y);
           
            if (closedset.includes(n.index)) {
                continue;
            }
            var gcost = current.gcost + getdist(n.index, current.index);
            // console.log("gcost", gcost);
            if (!openset.includes(n.index)) {
                n.setOpen();
                openset.push(n.index);
                c++;
               
            } else if (gcost>=n.gcost) { 
                continue;
            }
            n.gcost = gcost;
            n.hcost = getdist(n.index, end.index);
            n.fcost = n.gcost + n.hcost;
            // console.log('fcost : ', n.fcost);
            // console.log('hcost : ',n.hcost);
            
            n.parent = current;

        }
            
            


        }


    

    
   
    return false;

}

function getdist(a,b)
{
    return dist(a.x,a.y,b.x,b.y);
}
function generatePath() {
    const path = [];
    var itr = end;
    while (itr) {
        path.push(itr.index);
        itr.path = true;
        itr = itr.parent;
        sleep(delay);
    }
}