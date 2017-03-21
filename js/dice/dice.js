var dice = {  //namespace dice
  debugLog: false,
  d20: function(){
    return getRandomInt(1,20);
  },
  roll: function(diceString) {
    var number = '';
    var dice = '';
    var sum = 0;
    for(i=diceString.length-1;i>=0;i--){
      char = diceString[i];
      if(!isNaN(char)) {
        number = char.concat(number);
      } else if(char=='+'||char=='-') {

        if(dice!=''){
          number = sumMultiRandomInt(number,1,dice);
          dice = '';
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
          number = sumMultiRandomInt(number,1,dice);
        }
        if(number!=''){
          sum += Number(number);
        }
      }
    }
    return sum;
  }
};
//returns sum of times random integers between min (included) and max (included)
function sumMultiRandomInt(times,min,max) {
  var sum = 0;
  for(j=0;j<times;j++){
    sum += getRandomInt(min,max);
  }
  return sum;
}

// Returns a random integer between min (included) and max (included)
function getRandomInt(min, max) {
  var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  if(dice.debugLog) console.log("randomInt("+min+","+max+")="+randomInt);
  return randomInt;
}
