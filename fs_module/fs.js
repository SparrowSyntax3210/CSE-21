const fs = require("fs");

// CREATE
try {
  fs.writeFileSync("student.txt", "Name: Rahul\nRoll No: 101");
  console.log("File created successfully");
} catch (err) {
  console.log(err);
}

// READ
let data;

try {
  data = fs.readFileSync("student.txt", "utf-8");
  console.log("File content:");
  console.log(data);
} catch (err) {
  console.log(err);
}

// UPDATE
try {
  fs.appendFileSync("student.txt", "\nCourse: B.Tech");
  console.log("File updated successfully");
} catch (err) {
  console.log(err);
}

// READ UPDATED FILE
try {
  data = fs.readFileSync("student.txt", "utf-8");
  console.log("Updated content:");
  console.log(data);
} catch (err) {
  console.log(err);
}

// DELETE
try {
  fs.unlinkSync("student.txt");
  console.log("File deleted successfully");
} catch (err) {
  console.log(err);
}