console.log("game");
var a = document.getElementById("name");
var b = document.getElementById("result");
var c = document.getElementById("submit");
var d = document.getElementById("number");
console.log(a.id)
console.log(b.id)
console.log(c.id)
console.log(d.id)
var randomNumber = Math.floor(Math.random() * 10) + 1;
var counter = 0;
var preNumber = 0 ;

var guessGame = function(){
var guess = a.value;
var result = 0;

if(guess < randomNumber){
 if (guess == preNumber){
        result = "same number";
    }
    else {
counter++;
   result="small";rthrthrt5uhw45y
    }
}

else if (guess > randomNumber ){
    if (guess == preNumber){
        result = "same number";
    }
else {
  counter++ ;
    result="large";
  }
}
else if (guess==randomNumber){
    counter++;
    result="<h1>You Win!</h1>";
}

     preNumber = guess;                                            

b.innerHTML=result;
d.innerHTML="number of trials : "+ counter;
}
c.addEventListener('click', guessGame);

//Ali ossaily first

//Ali ossaily second

//Ali ossaily third