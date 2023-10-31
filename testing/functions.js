function sum (a, b){
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function odd(a) {
    if (a % 2 != 0) {
        return true;
    }else{
        return false;
    }
}

function sumOdd(a) {
    let sum = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] % 2 != 0) {
        sum += a[i];
      }
    }
}

function greaterThanZero(a){
    if (a>0) {
        return true
    } else {
        return false
    }
}

module.exports = {sum,subtraction,odd,sumOdd,greaterThanZero};