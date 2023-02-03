import { readFile, appendFile, writeFile, unlink } from "fs";

// read file
readFile("./subscribe.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// write data to file

const data = `Subscribe it! when ${Date.now()}`;

appendFile("hello.txt", data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Data added");
  }
});

// create new file
writeFile(`subscribe_${Date.now()}.txt`, data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Write it!! added");
  }
});

// delete file

unlink("hello.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File has been deleted");
  }
});

// create new file
writeFile("hello.txt", data, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File had been created.");
  }
});
