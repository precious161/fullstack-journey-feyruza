
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
     input=input.trimStart();
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







module.exports={
      removeExtraSpaces,
      capitalize,
      toCamelCase,
      toSnakeCase,
      isValidEmail,
};




