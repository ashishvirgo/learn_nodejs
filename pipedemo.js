const fs=require("node:fs");
const zlib=require("node:zlib");
const gzip=zlib.createGzip();

const readablestream=fs.createReadStream("./file.txt",{encoding: "utf-8",
                                                      highWaterMark: 2});
readablestream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
const writablestream=fs.createWriteStream("./file2.txt");
readablestream.pipe(writablestream)
// readablestream.on("data",(chunk)=>{
//     console.log(chunk);
//     writablestream.write(chunk);
// });