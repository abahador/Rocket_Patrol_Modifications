// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this); // add to existing scene
      this.points = pointValue;    // store point vlaue
      this.moveSpeed = game.settings.spaceshipSpeed;       // pixels per frame
    }
    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap arounf from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
    // position reset
    reset () {
        this.x = game.config.width;
    }
}
