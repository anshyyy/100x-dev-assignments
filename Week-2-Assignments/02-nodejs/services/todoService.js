const fs = require('fs');


const create  = async ( content ) => {
    return new Promise((resolve, reject) => {
      const newContext = JSON.stringify(content)+"+";
      fs.appendFile('todoDB.txt',newContext,'utf8',(err)=>{
       if (err) reject(err);
       console.log('todo Created successfully!');
       resolve(content);
      });
    }) 
}

const readAll = async()=> {
return new Promise((resolve, reject) => {
    fs.readFile('todoDB.txt','utf8',(err,data)=>{
      if(err) reject(err);
      const content = data.split("+");
      content.pop();
      let todos = [];
      content.forEach(function(todo){
           todos.push(JSON.parse(todo));
      })
      console.log(todos);
      resolve(todos);
    })
})
}

const read = async(title) => {

return new Promise((resolve, reject) => {
fs.readFile('todoDB.txt','utf8',(err,data)=>{
  if(err) reject(err);
   
  const content = data.split("+");
 // console.log(content);
  content.pop();
  //console.log(content);

  for(let i = 0;i<content.length;i++){
        const parsedData = JSON.parse(content[i]);
        if(parsedData.title == title){
            resolve(parsedData);
            break;
        }
  }
});
})
}

const update = async(title,todo) => {

return new Promise((resolve, reject) => {
fs.readFile('todoDB.txt','utf8',(err,data)=>{
  if(err) reject(err);
      
  const content = data.split("+");
  //console.log(content);
  content.pop();
  //console.log(content);

  for(let i = 0;i<content.length;i++){
        let parsedData = JSON.parse(content[i]);
        if(parsedData.title == title){
             parsedData = todo;
             //console.log(parsedData);
             content[i] = JSON.stringify(parsedData);
             break;
        }
  } 
 // console.log(content);
  let updatedFile = "";
  for(let i = 0;i<content.length;i++){
       updatedFile += content[i] + "+";
  }
  
  fs.writeFile('todoDB.txt',updatedFile,'utf8',(err) => {
    if (err) reject(err);
   // console.log('File updated successfully!');
    resolve('File updated successfully! ')
  });
});
});
}

const deleteTodo = (title)=>{
return new Promise((resolve, reject) => {
fs.readFile('todoDB.txt','utf8',(err,data)=>{
  if(err) reject(err);
      
  const content = data.split("+");
  //console.log(content);
  content.pop();
 // console.log(content);

  let updatedFile = "";
  for(let i = 0;i<content.length;i++){
       let jsonData = JSON.parse(content[i]);
       console.log(jsonData);
       if(jsonData.title!=title){
              updatedFile += content[i] + "+";
       }
  }
  console.log(updatedFile);
  fs.writeFile('todoDB.txt',updatedFile,'utf8',(err) => {
    if (err) throw reject(err);
            resolve('File deleted successfully!');
  });
});
})
}



async function process () {

await create({
  title : "xyz",
  description: "do homework",
});

console.log(await create({
title : "do shopping",
description: "khana pina",
}));

//console.log(await read(1));

// console.log(read(1).then((data)=>{
//   console.log("readed",data);
// }));


// console.log(update(1,"hello boi").then((data)=>{
//   console.log(data);
// }));

//console.log(await deleteTodo(1));

}
// process();






module.exports = {
create,read,readAll,update,deleteTodo
}
