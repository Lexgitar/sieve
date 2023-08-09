const prompt = require('prompt-sync')({sigint: true});
const Field = require('./hathelp')

const hat = '^';
const hole = 'O';
const fiel = '░';
const pon = '*';

const testArr= [
[fiel, fiel, hole],
[fiel, pon, fiel],
[fiel, hat, fiel]
];

const test2= [
  [pon, fiel, hole, fiel],
  [fiel, hole, fiel, fiel],
  [fiel,fiel, hat, fiel]
  ];

const myField = new Field(test2)

//myField.print()
// myField.game()
// myField.play('r')

//myField.game()
//-------- ---------//

while(!myField._gameOver){
  myField.game()
  let playerMove = prompt('use R, D, L , U to move <*> : ')
  myField.play(playerMove)
  
}
