const mysql = require("mysql");
const express = require("express");
const url =require('url');
const bodyParser=require('body-parser');


var app = express();
app.use(express.json());
var urlencoded=bodyParser.urlencoded({extended:false});
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "project",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

//get all employees
app.get("/getAllEmployee", (req, resp) => {
  connection.query("SELECT * from employee", (err, data) => {
    if (err) throw err;
    console.log("data received from database");
     var str = JSON.stringify(data);
    resp.send(str);
  });
});

//get employee with id
app.get("/getEmployee/:id", (req, resp) => {
    
    var id=req.params.id;
    console.log("id is "+id);
   
    connection.query("SELECT * from employee where empid="+id, (err, data) => {
        
      if (err) throw err;
      console.log("data received from database");
       var str = JSON.stringify(data);
      resp.send(str);
    });
  });
  
//add employee
app.post("/addEmployee",(req,resp)=>{
    console.log("in post");
    var empname=req.body.empname;
    var empdesgn=req.body.empdesgn;
    var esal=req.body.esal;
    var fk1=req.body.fk1;
    console.log("in post");
    connection.query('insert into employee (empname,empdesgn,esal,fk1) values ("'+empname+'","'+empdesgn+'","'+esal+'","'+fk1+'")', (err, data) => {
        
        if (err) throw err;
        console.log("data received from database");
        // var str = JSON.stringify(data);
        resp.send(data);
      });
    });

    app.put("/updateEmployee/:empid",(req,resp)=>{
        console.log("in post");
        var empid=req.params.empid;
        var empname=req.body.empname;
        var empdesgn=req.body.empdesgn;
        var esal=req.body.esal;
        var fk1=req.body.fk1;
        var sql='update employee set empname ="'+empname+'",empdesgn="'+empdesgn+'", esal='+esal+',fk1='+fk1+' where empid='+empid;
        console.log(sql);
        console.log("in post");
        connection.query(sql, (err, data) => {
            
            if (err) throw err;
            console.log("data received from database");
            // var str = JSON.stringify(data);
            resp.send(data);
          });
        });
    




//get all department
app.get("/getAllDept", (req, resp) => {
    connection.query("SELECT * from dept", (err, data) => {
      if (err) throw err;
      console.log("data received from database");
       var str = JSON.stringify(data);
      resp.send(str);
    });
  });
  

  //get department by id
  app.get("/getDept/:id", (req, resp) => {
    
    var id=req.params.id;
    console.log("id is "+id);
   
    connection.query("SELECT * from dept where depid="+id, (err, data) => {
        
      if (err) throw err;
      console.log("data received from database");
       var str = JSON.stringify(data);
      resp.send(str);
    });
  });

  
//add department
app.post("/addDept",(req,resp)=>{
    console.log("in post");
    var deptname=req.body.deptname;
    connection.query('insert into dept (deptname) values ("'+deptname+'")', (err, data) => {
        
        if (err) throw err;
        console.log("data received from database");
        // var str = JSON.stringify(data);
        resp.send(data);
      });
    });



app.listen(8989, () => {
  console.log("server started on 8989");
});
