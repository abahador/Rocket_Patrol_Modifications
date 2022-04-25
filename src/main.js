// Amanda Bahadori, CAT PATROL, 4/18/22, time = 12 hours to complete
// Implement a simultaneous two-player mode (30)
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (60)
// Implement parallax scrolling (10)
// Help Souces: William morales, David Diaz and Omar Alkharji
// Credit audio: Free sounds
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
  }

let game = new Phaser.Game(config);
  // set UI sizes

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyA, keyS, keyF, keyR, keyZ, keyLEFT, keyRIGHT;