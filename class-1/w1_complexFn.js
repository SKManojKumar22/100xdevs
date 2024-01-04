function complexFn(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var startTime = new Date().getTime();

complexFn(10000000);

var endTime = new Date().getTime();

console.log((endTime - startTime) / 10000);
