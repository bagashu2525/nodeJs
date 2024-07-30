const fs = require("fs");
const bioData = {
    name : "Ashu",
    age : 26,
    channel : "hello world",
};

// console.log(bioData.name);

//const jsonData = JSON.stringify(bioData); //convert object to json file
// console.log(jsonData);

//const object = JSON.parse(jsonData); //convert json file to object
// console.log(object);



// 1) Convert to JSON
const jsonData = JSON.stringify(bioData);
// 2) Add this to another File
fs.writeFile("json1.json",jsonData, (err)=>{
    console.log("done");
})
// 3) readfile
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data)
})

// 4) again convert back to js obj original
// 5)console.log



