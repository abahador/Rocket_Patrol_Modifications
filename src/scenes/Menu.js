class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/Squeak.wav'); //changed explosion to squeak
      this.load.audio('sfx_explosion', './assets/Catmeow.wav'); //changed explosion to meow
      this.load.audio('sfx_rocket', './assets/Ratsqueak.wav'); //changed rocket sound to rat squeak
    }
    create() {
      let menuConfig = {
        fontFamily: 'Comic Sans', //changed font
        fontSize: '28px',
        backgroundColor: '#E5618D', //changed background color
        color: '#5F046C', //changed color
        align: 'right',
        padding: {
        top: 5,
        bottom: 5,
        },
        fixedWidth: 0
    }
    // show menu text and changed for player 2 controls
    this.add.text(game.config.width/2, game.config.height/2 - 20 - borderUISize -
    borderPadding, 'CAT PATROL', menuConfig).setOrigin(0.5); //changed name
    this.add.text(game.config.width/2, game.config.height/2, 'P1 Use ←→ to move & (F) to fire\nP2 Use A/S to move & (R) to fire', menuConfig).setOrigin(0.5); 
    menuConfig.backgroundColor = '#6FB8D5'; //changed background color
    menuConfig.color = '#0C516D'; //changed color
    this.add.text(game.config.width/2, game.config.height/2 + 20 + borderUISize +
    borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }
update() {
  if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
    // easy mode
    game.settings = {
      spaceshipSpeed: 3,
      gameTimer: 60000    
    }
    this.sound.play('sfx_select');
    this.scene.start('playScene');    
  }
  if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
    // hard mode
    game.settings = {
      spaceshipSpeed: 4,
      gameTimer: 45000    
    }
    this.sound.play('sfx_select');
    this.scene.start('playScene');    
  }
}
}