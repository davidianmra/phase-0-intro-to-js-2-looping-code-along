/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(stringNameArray = [], events) {
    let newArray = [];
    
    for (let i = 0; i < stringNameArray.length; i++){
        newArray = [...newArray, `Thank you, ${stringNameArray[i]}, for the wonderful surprise gift!`];
    }
    return newArray;
}

function countDown(x) {
    while (x >= 0){
        console.log(x);
        x--;
    }
}