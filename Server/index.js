import express from "express"
import mysql from "mysql2"
import bodyParser from "body-parser"
import corsOptions from './config/corsOptions.mjs'
import cors from 'cors'
// const corsOptions = require('./config/corsOptions')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"S@nketh2",
    database:"college"
})
const port = 3500
const app = express()





app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(corsOptions))

app.listen(port,()=>{
    console.log("server started at http://localhost:"+port);
})

app.get("/login",(req,res)=>{
    let role = req.query.role;
    let userid = req.query.name;
    let password = req.query.password;
    console.log(role,userid,password)
    let sql = `select * from user where name='${userid}' and password = '${password}' and role='${role}';`
    db.query(sql,(err,result)=>{
    if(err) throw err;
        if(result.length == 0){
            res.json({authentication:false})
        }
        else{
            res.json({authentication:true})
        }
    })
})

app.get("/register",(req,res)=>{
    let id = req.body.id;
    let name = req.query.name;
    let password = req.query.password;
    let role = req.query.role;
    let phone = req.query.phone;
    let classnum = req.body.class || null;

    let sql = `insert into user values ('001','${name}','${password}','${role}',null,'${phone}');`

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

app.post("/notes",(req,res)=>{
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
    let moduleno = req.body.module;
    let chapter = req.body.chapter;
    let pdf = req.body.pdf;
    let classno = req.body.class;
    let link = req.body.link;

    let sql = `update notes set pdf = '${pdf}', link = '${link}'  where class_id = '${classno}' and sub_id = '${subject}' and mod_id = '${moduleno}' and chp_id = '${chapter}';`;

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.json({message:"success"})
        }
    })
})

app.post("/getstudents",(req,res)=>{
    let classno = req.body.class;
    let subject = req.body.subject;

    let sql = `SELECT s.id,s.name,(select count(sin.id) from user sin,attendance a where sin.id=a.id and sin.id=s.id and a.sub_id='${subject}' and s.cls_id='${classno}') as total,count(s.id) as attended from user s,attendance a where s.id=a.id and a.sub_id='${subject}' and s.cls_id='${classno}' and a.has_attended=1 group by id;`;

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.json(result)
        }
    })
})

app.post("/sendattendance",(req,res)=>{
    let subject = req.body.subject;
    let date = req.body.date;
    let time = req.body.time;

})

app.post("/getlessonplan",(req,res)=>{
    let classnum = req.body.class;
    let subject = req.body.subject;

    let sql = `select * from lesson_plan where cls_id = '${classnum}' and sub_id = '${subject}';`

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.json(result);
        }
    })
})

app.post("/updatelessonplan",(req,res)=>{
    let sql = `update lesson_plan set is_completed='1' where cls_id = '9' and sub_id = '1' and mod_id = '1' and chp_id = '1';`
})

app.post("/getattendancesub",(req,res)=>{
    let classno = req.body.class;
    let subject = req.body.subject;
    let student = req.body.student;

    let sql = `SELECT s.id,a.sub_id,(select count(sin.id) from user sin,attendance a where sin.id=a.id and sin.id=s.id and a.sub_id='${subject}' and s.cls_id='${classno}') as total,count(s.id) as attended from user s,attendance a where s.id=a.id and a.sub_id='${subject}' and s.id='${student}' and s.cls_id='${classno}' and a.has_attended=1 group by s.id,a.sub_id;`;

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.json(result)
        }
    })
})

