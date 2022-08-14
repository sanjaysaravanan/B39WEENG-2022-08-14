const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const num of arr) {
  console.log(num);
}

arr.forEach((num) => {
  console.log(num)
});


