// src/server.ts
// import app from "./app";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

console.log("Server is running...");

// closer

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // 1
increment();