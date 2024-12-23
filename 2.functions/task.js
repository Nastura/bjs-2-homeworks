function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let avg = arr[0];
  let sum = 0;
  let avt = 0;

  for(i = 0; i < arr.length; i++ ) {
    
    if(arr[i] <= min) {
      min = arr[i];
     
    }
    if(arr[i] >= max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avt = (sum / arr.length).toFixed(2);
  avg = parseFloat(avt); 

  return { 
    min: min, 
    max: max, 
    avg: avg 
  };
}

function summElementsWorker(...arr) { //находить сумму элементов массива и возвращать её.
let sum = 0;
  for(let i = 0; i < arr.length; i++) {
     sum += arr[i]; 
  }
  return sum;
}


function differenceMaxMinWorker(...arr) { // для вычисления разницы максимального и минимального элементов.
  let min = arr[0];
  let max = arr[0];

  if(arr.length === 0) {
    return 0;

  } else {
      for(i = 0; i < arr.length; i++) {
         if(min > arr[i]) {
         min = arr[i];
        }
        if(max < arr[i]) {
         max = arr[i]
    } else {

    }
  }
} 
  let result = max - min;
  return result;
}  

function differenceEvenOddWorker(...arr) {  //вычисления разницы сумм чётных и нечётных элементов.
let sumEvenElement = 0;
let sumOddElement = 0;


if (arr.length === 0) {
  return 0;

} else { 
  
  for(i = 0; i < arr.length; i++) {

  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
  } else {
    sumOddElement += arr[i];
  }
 }
}
return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) { // которая будет вычислять среднее значение чётных элементов.

  let sumEvenElement = 0;
  let element = [];

  if (arr.length === 0) {
    return 0;
  } else {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      element.push(arr[i]); 
    }
  }
}
  let result = sumEvenElement / element.length;
  return result;


}

function makeWork (arrOfArr, func) {
  
  let maxWorkerResult = -Infinity;
  
  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);

  if(result > maxWorkerResult) {
    maxWorkerResult = result;
  }
  }
  return maxWorkerResult;
}
