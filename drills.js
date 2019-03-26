//1. curent max & min

function max(numbers) {
    let currentMax = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > currentMax) {
            currentMax = numbers[i];
        }
        i++;
    }
    return currentMax;
}

function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < currentMin) {
            currentMin = numbers[i];
        }
        i++;
    }
    return currentMin;
}

function average(arr){
    let total = 0;
      arr.forEach(function (a){
           total+= a;
      });
      return total/arr.length;
  }
  console.log(average([1,2]));
