// ---Numeric Utilities---

// 1, Clamping a number in a range

function toClamp(num,min,max){

  try{

    if(typeof num !='number' || typeof min!='number' || typeof max !='number'){
      throw new Error("Invalid input, enter numbers!");
    }

    if(num<min){
      num=min;
    }
    else if(num>max){
        num=max;
    }

    return num;
  }
  catch(e){
       throw e;
  }
}


// 2, Generatig Range

function generateRange(start,end,step){

  try{

    if(typeof start !='number'|| typeof end !='number' || typeof step !='number'){
       throw new Error("Invalid input, enter numbers");
    }

    if(step<=0){
     return null;
    }

    let range=[];

    for(let i=start;i<=end;i+=step){

      range.push(i);
    }

    return range;

  }
  catch(e){
     throw e;
  }
}

// 3, Ensuring Range

function checkRange(num,min,max){

  try{

    if(typeof num != 'number'|| typeof min != 'number' || typeof max != 'number'){
       throw new Error("Invalid input, enter only numbers!");
    }

    let inRange=false;

    if(num>=min && num<=max){
      inRange=true;
    }

    return inRange;
  }
  catch(e){
    throw e;
  }
}

      module.exports={toClamp,
      generateRange,
      checkRange};