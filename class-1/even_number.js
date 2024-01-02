let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let evenNo = [];

for (var i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    evenNo.push(a[i]);
  }
}

console.log(evenNo);
