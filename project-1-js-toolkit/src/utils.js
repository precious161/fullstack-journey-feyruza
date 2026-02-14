
// ---String Utilities---

// 1, Removing extra spaces ( whitespaces )

function removeExtraSpaces(input){

  try{

    if(typeof input !=='string'){
      throw new Error("Invalid input!")
    }

    input=input.trim();
    let input2=input.split(" ");
     input2=input2.filter(str=>{
       return str!=="";
    })
    let output=input2.join(" ");

    return output;
  }
  catch(e){
    throw e;
  }
}


// 2, Capitalizing Input string

function capitalize(input){

  try{

    if(typeof input != 'string' ){
      throw new Error("Invalid input!");
    }

    let output=[];
    let input2= input.split("");
     for(let i=0;i<input2.length;i++){
      if(i===0){
        output.push(input2[i].toUpperCase());
      }
      else if(input2[i-1]===" "){
       output.push(input2[i].toUpperCase());
      }
      else{
        output.push(input2[i].toLowerCase());
      }
     }

      output=output.join("");

     return output;

  }
  catch(e){
    throw e;
  }
}

// 3, Converting input string into CamelCase

function toCamelCase(input){

  try{

    if(typeof input != 'string'){
       throw new Error("Invalid input!");
    }

    input=input.trimStart();
    let output=[];
    let input2=input.split("");
      for(let i=0;i<input2.length;i++){

         if(input2[i]===" "){
          output.push("");
        }
        else if(input2[i-1]===" "){
           output.push(input2[i].toUpperCase());
        }
        else{
          output.push(input2[i].toLowerCase());
        }
      }

      output=output.join("");
      return output;
  }
  catch(e){
    throw e;
  }
}

// 4, Converting input string into snake_case

function toSnakeCase(input){

  try{

    if(typeof input !='string'){
      throw new Error("Invalid input!");
    }
    input=input.trimStart();
    let input2=input.split("");
    let output=[];

    for(let i=0;i<input2.length;i++){
        if(input2[i]===" "){
          output.push("_");
        }
        else{
          output.push(input2[i].toLowerCase());
        }
    }

    output=output.join("");

    return output;
  }
  catch(e){
    throw e;
  }
}

// 5, Email Validation

function isValidEmail(email){

  try{

    if(typeof email !='string'){
      throw new Error("Invalid Email!");
    }

    let hasAt=false;
    let hasDot=false;

   for(let i=0;i<email.length;i++){
     if(email[i]==="@"){
      hasAt=true;
     }
     if(email[i]==="."){
      hasDot=true;
     }
   }

   return hasAt && hasDot;

  }
  catch(e){
    throw e;
  }
}


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

