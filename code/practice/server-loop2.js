let i = 1;

setTimeout(function run() {
  console.log(i);
  i++;
  setTimeout(run, 10);
}, 10);
