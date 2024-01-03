function printToScreen() {
  console.log("Hello World!");
}

setTimeout(printToScreen, 1000);

let counter = 0;
for (let i = 0; i < 1000; i++) {
  counter += i;
}

console.log(counter);
