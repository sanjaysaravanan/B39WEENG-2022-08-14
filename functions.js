// Fucntion key word function

function Sum(a, b) {
  return a + b;
}

// Same can be written like 
const Sum = function (a, b) {
  return a + b;
}


// Arrow function 
const isOdd = (num) => {
  return num % 2;
}

// IIFE
(function () {
  console.log('Sanjay');
})();