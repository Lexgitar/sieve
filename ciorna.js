 const tare = [[3,2,1],[9,7,9],[6,4,8]]

// console.log(tare.indexOf(tare.indexOf()))

const list = [ 'h', 'e', 'l', 'l', 'o'];
// list.map((currElement, index) => {
//   console.log("The current iteration is: " + index);
//   console.log("The current element is: " + currElement);
//   console.log("\n");
//   return currElement; //equivalent to list[index]
// });

const finder =(nested)=>{
    let location;
  const first = nested.findIndex(elem=> elem.includes(8))
  const second = nested[first].indexOf(8)
  location =  [first, second]
  return location
} 
//console.log(loc)
//console.log(tare.indexOf(8))
console.log(finder(tare))