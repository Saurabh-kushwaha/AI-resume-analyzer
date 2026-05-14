// performing api get post request

// async function getData() {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   console.log(data);
// }

// async function postData() {
//     const response = await fetch("", {
//         method: "POST",
//         headers: {
//            "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//         })
//     })

//     const data = await response.json();
//     console.log(data)
// }
// getData();

// closer

function outerFunction() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const innerfunction = outerFunction();
console.log(innerfunction());
console.log(innerfunction());
console.log(innerfunction());

const array = [1, 30, 4, 21, 100000];
array
  .sort((a, b) => {
    return a - b;
  })
  .reverse();
console.log(array);

// convert array to object
const arr = ["a", "b", "c"];
const obj = {};
arr.map((item, index) => {
  obj[index] = item;
});
console.log(obj);
