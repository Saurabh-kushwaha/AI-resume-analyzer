const run = async () => {
  console.log("start");
  await delay(10000);
  console.log("end");
};
run();
function delay(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("delay function");
      resolve();
    }, n);
  });
}
//output
// start
// delay of n sec
// delay function
// end
