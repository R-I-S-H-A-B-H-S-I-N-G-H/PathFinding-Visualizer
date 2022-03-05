var opacity = 255;

class Node { 
    constructor(x, y, s) {
        this.parent = null;
        this.index = { x: x, y: y };
        this.x = x*s;
        this.y = y*s;
        this.s = s;
        this.start=false;
        this.end = false;
        this.wall = false;
        this.visited = false;
        this.path = false;
        this.neighbour = false;
        this.gcost = 0;
        this.hcost = 0;
        this.fcost = 0;
        this.open = false;
        this.close = false;

        
    }
    randomize(n=3) {
        if (random() <= n/10) { 
            this.wall=true;
        }
    }
    setClose() { 
        this.open = false;
        this.close = true;
    }
    setOpen() { 
        this.open = true;
        this.close = false;
    }
    setWall(val) { 
        if (!this.start && !this.end&&!isSearching) {
            this.wall = val
        } else { 
            console.log('cannot update this cause not wall');
            this.wall = false;
        }
    }
    setStart_util(val) {
        this.start = val;
    }
    setEnd_util(val) {
        if (isSearching) { 
            console.log('cannon set end');
            return;
        }
        this.end = val;
    }
    setStart() {
        
        if (isSearching) {
            return;
        }
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                nodes[y][x].setStart_util(false);
            }
        }
        this.setWall(false);
        this.setStart_util(true);
        start = this;
        // this.fcost = 0;
        // this.gcost = 0;
        // this.hcost = 0;
        return this;
    }
    setEnd() { 
        if (isSearching) { 
            return;
        }
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) { 
                nodes[y][x].setEnd_util(false);
            }
        }  
        this.setWall(false);
        this.setEnd_util(true);
        end = this;
        return this;
    }
    resetNode() { 
        this.visited = false;
        this.path = false;
        this.parent = null;
        this.open = false;
        this.close = false;
        this.gcost = 0;
        this.hcost = 0;
        this.fcost = 0;

    }

    pointInRect(mx, my) {
        if (this.x<mx&&this.y<my&&this.x+this.s>mx&&this.y+this.s>my) { 
            return true;
        }
        return false;

    }
    update() {
        stroke(199, 228, 250);
        fill(255, opacity);
        strokeWeight(3);
        this.bfsAnimation();
        this.astarAnimation();
        this.basicAnimation(opacity);
        
        rect(this.x, this.y, this.s);
    }




    mouseInterface() {

        if ((this.pointInRect(mouseX, mouseY))) {
            fill(0, 255, 255, opacity)
                
                
            if (mouseCLick) {
                if (canSetStart) {
                    this.setStart();
                }
                if (canSetEnd) {
                    this.setEnd();
                }
                if (canCreateWall) {
                    this.setWall(true);
                }
                if (canRemoveWall) {
                    this.setWall(false);
                }
                mouseCLick = false;
            }
        }

    }

    basicAnimation() {
        this.mouseInterface(opacity);
        if (this.path) {
            fill(244, 196, 48);
        }
        if (this.start) {
            // fill(0, 255, 0, opacity);
            fill(244, 196, 48);

        }
        if (this.end) {
            // fill(255, 0, 0, opacity);
            fill(244,196,48);
            // rgb(244,196,48)
        }
        if (this.wall) { 
            fill(12,53,71,opacity);
        }
    }
    astarAnimation() { 
        if (this.close) { 
            fill(64,227,116);
            // fill(200, 0, 0);
            // fill(255)
        }
        if (this.open) { 
            fill(200, 0, 0);
            // fill(64,227,116);
        }

    }
   
    bfsAnimation() { 
        if (this.visited) { 
            fill(64,227,116);
        }
       
        if (this.neighbour) { 
            fill(0, 200, 0);
            setTimeout(() => {
                this.neighbour = false;

            }, 100);
        }
    }
}