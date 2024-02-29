import express from "express"
import mysql from "mysql2"
import bodyParser from "body-parser"
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"college"
})
const port = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log("server started at http://localhost:"+port);
})

app.post("/login",(req,res)=>{
    let role = req.body.role;
    let userid = req.body.userid;
    let password = req.body.password;

    let sql = `select * from user where id='${userid}' and password = '${password}' and role='${role}';`
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            if(result.length === 0){
                res.json({authentication:false}
                )
            }
            else{
                res.json({authentication:true})
            }
        }
    })
})

app.post("/register",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let password = req.body.password;
    let role = req.body.role;
    let phone = req.body.phone;

    let sql = `insert into user values ('${id}','${name}','${password}','${role}','${phone}');`

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
            res.json({message:'you are already registered'})
        }
        else{
            res.json({message:'registered successfully'})
        }
    })
})

app.post("/addnotes",(req,res)=>{
    let subject = req.body.subject; 
    let classno = req.body.class;

    let sql = `select * from notes where sub_id = '${subject}' and class_id = '${classno}'; `;

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.send(result)
        }
    })
})

app.patch("/addnotestodb",(req,res)=>{
    let subject = req.body.subject;
    let module = req.body.module;
    let chapter = req.body.chapter;
    let pdf = req.body.pdf;
    let classno = req.body.class;

    let sql = `update notes set pdf = ${pdf} where class_id = '${classno}' and sub_id = '${subject}' and mod_id = '${module}' and chp_id = '${chapter}';`;

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.json({message:"success"})
        }
    })
})

app.patch("/addlinktodb",(req,res)=>{
    let subject = req.body.subject;
    let module = req.body.module;
    let chapter = req.body.chapter;
    let link = req.body.link;
    let classno = req.body.class;

    
})