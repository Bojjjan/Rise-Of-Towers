export default class Tower {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.range = 100; // not a value we want, just to try
        this.damage = 50; // start damage, test values
        this.cost = 100; // test, susceptible to changes
        this.upgradeCost = 100; // Starting upgrade cost
        this.maxLevel = 5; // Maximum level of the tower
        this.shootingSpeed = 2; // needs reworking and more specification
        this.level = 1;
    }

    draw(context) {
        context.fillStyle = '#000';
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI * 2); // test value
        context.fill();
    }

    upgrade() {
        if (this.level < this.maxLevel) {
            this.level += 1;
            this.range += 20; // for ex. Increase range by 20 each upgrade
            this.damage += 15; // and damage by 15 each upgrade
            this.upgradeCost *= 1.5; // it increases cost for upgrading by 50%
        } else {
            console.log("Tower is at maximum level!");
        }
    }

    canUpgrade(playerCoins) {
        return playerCoins >= this.upgradeCost;
    }

    performUpgrade(player) {
        if (this.canUpgrade(player.coins)) {
            player.coins -= this.upgradeCost; // update players coins, do cost
            this.upgrade();
            console.log("Tower upgraded to level" ${this.level});
        } else {
            console.log("Not enough coins to upgrade!");
        }
    }


}