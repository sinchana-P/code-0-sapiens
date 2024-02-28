import express from "express"
import mysql from "mysql2"

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:""
})
const port = 3000
const app = express()

app.listen(port,()=>{
    console.log("server started at http://localhost:"+port);
})

app.get("/",(req,res)=>{
    res.send("HI");
})