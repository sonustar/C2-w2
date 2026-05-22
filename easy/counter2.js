
/*


Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)


*/


// let c = 0;

// function Counter(){
   
//   c++;
//   console.log(c);

//   // Counter should be called after 1 second
//   setTimeout(Counter,1000);



// }


// Counter()

// console.log(1);


// async function yoo(params) {
//   console.log(3);
// }

// setTimeout(()=>{
  //   yoo()
  // },0);
  
  // console.log(2);
  
  import { error } from "node:console";
  import fs, { readFile } from "node:fs"
  
  console.log("Done1")
  
  fs.readFile("./A.txt",'utf8',(err,data)=>{
       if(err){
          console.log(err)
    return
   }

  //  const hasWhitespace = /\s/.test(data);

  //  Only remove whiteSpaces : data.trim();
  //  Replace white Spaces with " " one white space 
   const ans  = data.replace(/\s+/g,' ').trim();


  //  How you write a file : 
  // (./filename.txt,data you want to write, Format)
  fs.writeFileSync("./example.txt","Hello maa",'utf-8')


  console.log(ans)
})
console.log("Done2")


/*
Output:

Done1
Done2
Hi I am Supratick

*/

/*

Without : utf-8 
We get something we call as : 
<Buffer 0d 0a 48 69 20 49 20 61 6d 20 43 52 37>
*/


// ReadFile();

/*
fs.readFile('filename','utf-8',(data,err)=> {

    //  if error => console.log()
    
    // data.replace(/\s/g+,' ').trim();
    // Whitespread spaces ko replace it with ' '(Single Space).trim() Removes the spaces . 

    const ans = data.trim(); // removes the whitespaces.


})

*/