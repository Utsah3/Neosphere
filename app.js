const add=require('./calculate');
const subtract=require('./calculate');
const calculate=require('./calculate');
console.log(calculate.add(2,3));
console.log(calculate.subtract(10,4));

const calculate=require('./calculate');
console.log(calculate.multiply(2,3));
console.log(calculate.div(10,10));

 const fs=require('fs');
 fs.readFile('user.txt','utf8',(err,data)=>{
   if (err) {
    console.error(err);
    return;
   }
   console.log(data)
 })


 const express=require('express');
 const app=express();
 const port=3000;
 app.use(express.json());

 app.get('/users',(req,res)=>{
  const users=[
    {id:1, name:'John'},
    {id:2, name:'Jane'},
    {id:3, name:'Bob'}
  ];
  res.json(users);
 });

app.get('/users/:id',(req,res)=>{
  const user={id:req.params.id, name:'John'};
  res.json(user);
});

app.get('/users/name',(req,res)=>{
  res.send(`Hello ${req.params.name}`);
});

 app.listen(port,()=>{
  console.log(`Server listening on port ${port}`);
 });