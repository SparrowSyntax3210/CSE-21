const fs = require("fs").promises;

const fileName = "student.txt";

async function createFile() {
  try {
    await fs.writeFile(fileName, "Name: Harsh Goel\nAge: 19\n");
    console.log("File created");
  } catch (err) {
    console.log(err);
  }
}

async function readFile() {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log("File content:");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function updateFile() {
  try {
    await fs.appendFile(fileName, "Course: B.Tech\n");
    console.log("Data updated");
  } catch (err) {
    console.log(err);
  }
}

async function deleteFile() {
  try {
    await fs.unlink(fileName);
    console.log("File deleted");
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  await createFile();
  await readFile();
  await updateFile();
  await readFile();
  await deleteFile();
}

main();
