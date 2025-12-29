import express from "express";

const app=express();

const PORT=8080;

app.get('/',(req,res)=>{
    res.send("Api are working fine");
})

app.listen(PORT,()=>{
    console.log(`app is listening at port:${PORT}`);
})

