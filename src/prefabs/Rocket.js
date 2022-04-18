

// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, keyL, keyR, keyFire) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this); // add to existing, displayList, updateList
      this.isFiring = false;    // tracks rocket's firing status
      this.horizMoveSpeed = 2;
      this.moveSpeed = 2;       // pixels per frame
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
      this.keyLft = keyL;
      this.keyRht = keyR;
      this.keyFre = keyFire;
    }
    update() {
        // left/right movement
        if(!this.isFiring) {
            if(this.keyLft.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.horizMoveSpeed;
            } else if (this.keyRht.isDown && this.x <= game.config.width -
            borderUISize - this.width) {
                this.x += this.horizMoveSpeed;
            }
        }
        // fire button for player 1 and 2
        //if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
        console.log(this.keyFre);
        
        if(Phaser.Input.Keyboard.JustDown(this.keyFre)) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }
    //reset rocket to ground
    reset () {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    } 
}