
/*


Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)


*/


let c = 0;

function Counter(){
   
  c++;
  console.log(c);

  // Counter should be called after 1 second
  setTimeout(Counter,1000);



}


Counter()