export class Enemy {
    constructor({position = {x: 0, y: 0}}, speed, path, health){
        this.position = position;
        this.width = 50;
        this.height = 50;
        this.speed = speed;
        this.path = path;
        this.pathIndex = 0;
        this.health = health;
        this.threshold = 2;

        this.center = { //give the enemy sprite a center point
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2

        }
    }
    draw(gameCtx) { //draw the enemy sprite
        gameCtx.fillStyle = '#ff0000';
        gameCtx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    /*
    update(gameCtx) { //Makes calculation to get the next position of the enemy sprite
        this.draw(gameCtx);

        const path = this.path[this.pathIndex]
        console.log(this.position.y)
        const yDistance = path.y - this.center.y
        const xDistance = path.x - this.center.x

        const angle = Math.atan2(yDistance, xDistance);
        this.position.x += Math.cos(angle) * this.speed;
        this.position.y += Math.sin(angle) * this.speed;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        if (Math.round(this.center.x) === Math.round(path.x) && Math.round(this.center.y) === Math.round(path.y)) {
            this.pathIndex++;
        }

        return this.pathIndex === this.path.length;
    }
        /*
        if (Math.round(this.center.x) === Math.round(path.x) &&  Math.round(this.center.y) === Math.round(path.y) && this.pathIndex < this.path.length - 1) {
            this.pathIndex++;
        }

         */



    update(gameCtx) {
        this.draw(gameCtx);

        const path = this.path[this.pathIndex]
        let xDistance = path.x -  this.center.x
        let yDistance = path.y -  this.center.y


        const length = Math.sqrt(xDistance * xDistance + yDistance * yDistance);


        xDistance /= length;
        yDistance /= length;


        this.position.x += xDistance * this.speed;
        this.position.y += yDistance * this.speed;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        console.log(this.position.y)
        
        const distanceToNextPoint = Math.sqrt(Math.pow(this.center.x - path.x, 2) + Math.pow(this.center.y - path.y, 2));
        if (distanceToNextPoint < this.threshold) {
            this.pathIndex++;
        }

        return this.pathIndex === this.path.length;
    }
    
    



}