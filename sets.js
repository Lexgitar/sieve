const sieveOfEratosthenes = (input) => {
    const result =[]
  for (i=2; i<=input; i++){
    result.push(i);
    result.forEach((value, index)=>{
      if((value !==2&& value!==3&& value!==5)&& (Number.isInteger(value/2)||Number.isInteger(value/3)||Number.isInteger(value/5))){
        result.pop(index)
      }
    })
    }
    
  
    return result
  }
  
  const test = sieveOfEratosthenes(45);
  // should return [2, 3, 5, 7, 11, 13]
  console.log(test);