import { WriteStream, createWriteStream, createReadStream } from "fs";

const readFileStream = createReadStream("./bigData.txt", { encoding: "utf-8" });
const writeFileStream = createWriteStream("./chunkData.txt", { encoding: "utf-8" });

readFileStream.on("data", (chunk) => {
  console.log("---newChunk---");
  console.log(chunk.toString());
});

readFileStream.pipe(writeFileStream);
