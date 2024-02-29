import express from "express"
import mysql from "mysql2"
import bodyParser from "body-parser"
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:""
})
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log("server started at http://localhost:"+port);
})

app.get("/login",(req,res)=>{
    let role = req.body.role;
    let userid = req.body.userid;
    let password = req.body.password;

    sql = ""
    db.query(sql,(err,result)=>{
        if(err){
            res.json({authentication:false})
        }
        else{
            if(result.length == 0){
                res.json({authentication:false}
                )
            }
            else{
                res.json({authentication:true})
            }
        }
    })
})