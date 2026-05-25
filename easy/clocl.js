
let c = 0;
let hr = 0;
let min = 0 ;

function clock(){

  c++;

  if(c >= 60){
   
    min = min + Math.floor(c/60);
    c=0;

    if(min >= 60){
      hr += min/60;
      min = 0;
    }


  }

  if(hr > 0){
    console.log(`Hours:`,hr,`Minutes :`, min , `Seconds :`, c);
  }else if(min > 0){
    console.log(`Minutes :`, min , `Seconds :`, c);
  }else{
    console.log(`Seconds :`, c);
  }

   

  setTimeout(clock,1000);


}

clock()