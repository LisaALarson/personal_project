//var number = 4;

//var usedNumArray = [];
//
var randomNumber= function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

function GameCode(){
    //x = randomNumber(1, 10);
    //for(var i = 0; i<usedNumArray.length; i++){
    //    if(x == usedNumArray[i]){
    //        gameCode();
    //    }
    //    else{
    //        usedNumArray.push(x);
    //        return x;
    //    }
    ////}
    var number = randomNumber(1, 1000);
    return number;
}

module.exports = GameCode;