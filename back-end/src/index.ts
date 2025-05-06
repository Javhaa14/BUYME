import express from "express"


const app=express()
app.get("/",(req,res)=>{
    res.send("Hello")

})
app.listen(9999,()=>{
    console.log("running at  http://localhost:9999/" );
})
