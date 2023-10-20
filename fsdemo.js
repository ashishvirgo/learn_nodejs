const fs=require("node:fs");
const { CLIENT_RENEG_LIMIT } = require("node:tls");
//const file=fs.readFileSync("./file.txt");
// console.log(file);
console.log("first"); 
const file=fs.readFileSync("./file.txt","utf-8");
console.log(file);
console.log("second"); 
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error); 
    }
    else{
        console.log(data);
    }
});
console.log("Third"); 
fs.writeFileSync("./greet.txt","Hello ashish");
fs.writeFile("./greet.txt"," Hello vivek",{flag: 'a'},(err)=>{
    if(err){
        console.log(err); 
    }
    else{
        console.log("file written");
    }

});