import { SpriteController } from './SpriteController.js';

/**
 * Class for the enemy sprite. Extends the SpriteController class.
 *
 * @extends SpriteController - controls the sprite images for the enemy sprite
 * @class Enemy - controls the enemy sprite
 * @author Philip
 */
export class Enemy extends SpriteController{
    /**
     * Constructor for the enemy sprite. Sets the position, speed, path, health, coins, sprite images, width, height and frames for the enemy sprite.
     * @constructor
     * @param position - position of the enemy sprite
     * @param speed - speed of the enemy sprite
     * @param path - path the enemy sprite should follow
     * @param health - health of the enemy sprite
     * @param coins - coins the enemy is worth
     * @param spriteImages - sprite images for the enemy sprite
     * @param width - width of the enemy hitbox
     * @param height - height of the enemy hitbox
     * @param frames - settings for sprite frames in sprite controller
     * @author Philip
     */
    constructor( //start of constructor, sets the position, speed, path, health, sprite images, width, height and frames for the enemy sprite
        {position = {x: 0, y: 0}},
        speed,
        path,
        health,
        coins,
        {spriteImages = {upp : '', down: '', right: '', left: ''}},
        width,
        height,
        {frames = {
            max: 6,
            min: 0,
            hold: 6,
            cropOffsetX: 0,
            cropOffsetY: 0,
            scale: 1}}) { // end of constructor
        
        super( // Set the sprite images for the enemy sprite and other sprite settings
            {position}, 
            {spriteImages}, 
            {
                max: frames.max, 
                min: frames.min, 
                hold: frames.hold, 
                cropOffsetX: frames.cropOffsetX, 
                cropOffsetY: frames.cropOffsetY, 
                scale: frames.scale
            }); // end of super

        this.position = position;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.path = path;
        this.pathIndex = 0;
        this.health = health;
        this.threshold = 2;
        this.oriantaion = 'unknown';
        this.worth = coins;

        this.center = { //give the enemy sprite a center point
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2

        }
    }

    /**
     * function to control what should be drawn on the canvas.
     * @param gameCtx - the game context
     * @author Philip
     */
    draw(gameCtx) {
        super.drawSprite(gameCtx, this.oriantaion);
        this.drawHitBox(gameCtx);
    }

    /**
     * Draws the hitbox for the enemy sprite.
     * @param gameCtx - the game context
     * @author Philip
     */
    drawHitBox(gameCtx) {
        gameCtx.strokeStyle = '#ff0000';
        gameCtx.lineWidth = 3;
        gameCtx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }

    /**
     * Updates the enemy sprite. Makes calculations to get the next position of the enemy sprite. based on the path.
     * Also checks if the enemy sprite has reached the end of the path.
     * @param gameCtx - the game context
     * @param reduceHealth - function to reduce the health of the player
     * @returns {boolean} - returns true if the enemy sprite has reached the end of the path or if the health of the enemy sprite is 0.
     * @author Philip
     */
    update(gameCtx, reduceHealth, addCoins) {
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

        this.oriantaion = this.calculateOrientation(xDistance, yDistance);

        if (this.health <= 0) {
            addCoins(10);
            this.oriantaion = 'death';
            return true;
        }

        const distanceToNextPoint = Math.sqrt(Math.pow(this.center.x - path.x, 2) + Math.pow(this.center.y - path.y, 2));
        if (distanceToNextPoint < this.threshold) {
            this.pathIndex++;
        }

        if (this.pathIndex === this.path.length) {
            reduceHealth();
            return true;
        }
    }


    /**
     * Calculates the orientation of the enemy sprite based on the distance between the current position and the next position in the path.
     * @param xDistance - distance between the current x position and the next x position in the path
     * @param yDistance - distance between the current y position and the next y position in the path
     * @returns {string} - returns the orientation of the enemy sprite based on the distance between the current position and the next position in the path.
     * @author Philip
     */
    calculateOrientation(xDistance, yDistance) {
        if (Math.abs(xDistance) > Math.abs(yDistance)) {
            if (xDistance > 0) {
                return 'right';
            } else {
                return 'left';
            }
        } else {
            if (yDistance > 0) {
                return 'down';
            } else {
                return 'up';
            }
        }

    }
}

/*
--- Old code used for reference ---

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