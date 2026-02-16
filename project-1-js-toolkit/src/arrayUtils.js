// ---Array Utilities---

// 1, Removing Duplicates

function removeDuplicates(input){
  try{

    if(!Array.isArray(input)){
      throw new Error("Input invalid, enter an array!");
    }



    let seen=[];

    let output=input.filter(element=>{
      if(seen.includes(element)){
         return false;
      }
      else{
        seen.push(element);
        return true;
      }
    })

    return output;

  }
  catch(e){
    throw e;
  }
}


// 2, Flattening nested input array

function flattenArray(input){

  try{

     if(!Array.isArray(input)){
      throw new Error("Invalid input, enter an array!");
     }

     let output=[];

     for(let i=0;i<input.length;i++){

      if(Array.isArray(input[i])){
        let array1=input[i];
        for(let j=0;j<array1.length;j++){
           output.push(array1[j]);
        }
      }
      else{
        output.push(input[i]);
      }
     }
     return output;

  }
  catch(e){
    throw e;
  }
}


// 3, Findind Maximum from input array

function findMax(input){

  try{

    if(!Array.isArray(input)){
      throw new Error("Invalid input, enter an array!");
    }

     if(input.length==0){
      return null;
     }

     let max=input[0];
     for(let i=1;i<input.length;i++){
        if(max<input[i]){
          max=input[i];
        }
     }
     return max;

  }
  catch(e){
     throw e;
  }
}


// 4, Finding average from input array

function findAverage(input){

  try{

    if(!Array.isArray(input)){
      throw new Error("Invalid input, enter an array!");
    }

    if(input.length==0){
      return null;
    }

     let total=input.reduce((sum,num)=>{
       return sum+num;
     },0);
     let average=total/input.length;

     return average;
  }
  catch(e){
    throw e;
  }
}

// 5, Calculating discount from input array of objects

function getDiscount(input){

  try{

    if(!Array.isArray(input)){
      throw new Error("Invalid input, enter an array!");
    }

    let discountedItems=input.filter(item=>{
        return item.price>100;
    }).map(item=>{
       return {...item ,price: item.price*0.7};
    });
    return discountedItems;

  }
  catch(e){
    throw e;
  }
}



module.exports={removeDuplicates,
      flattenArray,
      findMax,
      findAverage,
      getDiscount,
      };