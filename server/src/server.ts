// src/server.ts
// import app from "./app";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Find duplicate elements in array
const arr = [1,2,3,2,4,1];
const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates);