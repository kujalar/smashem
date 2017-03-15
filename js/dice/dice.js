var dice = {  //namespace dice
  d20: function(){
    return getRandomInt(1,20);
  },
  roll: function(diceString) {
    var result = "roll "+diceString;

    var number = '';
    var dice = '';
    var sum = 0;
    for(i=diceString.length-1;i>=0;i--){
      char = diceString[i];
      if(!isNaN(char)) {
        number = char.concat(number);
      } else if(char=='+'||char=='-') {
        var diceRoll = 0;
        if(dice!=''){
          for(j=0;j<number;j++){
            diceRoll += getRandomInt(1,dice);
          }
          dice = '';
          number = diceRoll;
        }
        if(char=='-'){
          number *= -1;
        }
        sum += Number(number);
        number = '';
      } else if(char=='d') {
        dice = number;
        number = '';
      }
      if(i==0){
        if(dice!=''){
          if(number==''){
            number = 1;
          }
          var diceRoll = 0;
          for(j=0;j<number;j++){
            diceRoll += getRandomInt(1,dice);
          }
          number = diceRoll;
        }
        if(number!=''){
          sum += Number(number);
        }
      }
    }
    return sum;
  }
};



// Returns a random integer between min (included) and max (included)
function getRandomInt(min, max) {
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("randomInt("+min+","+max+")="+randomInt);
  return randomInt;
}
