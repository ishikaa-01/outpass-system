const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3006; // or any other port you prefer

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.static('Public'));
app.use(express.json());


const pool = mysql.createPool({
  host: 'localhost', // or your MySQL server host
  user: 'root', // or your MySQL username
  password: 'root', // or your MySQL password
  database: 'db2' // your MySQL database name
});










// TO GET THE STUDENTS WHOSE OUTOASS IS PENDING AND NEEDS TO BE APPROVED
app.get('/Pending', (req, res) => {
  
  const query = `
    SELECT o.out_no,s.branch,o.status,s.name, s.image, o.go_date, o.return_date, o.reason
    FROM student s
    JOIN outpass o ON s.email = o.email
    WHERE o.status = 'pending';
  `;

  pool.query(query, (error, results) => {
    if (error) throw error;
      res.json(results);
  

  
})
});





// history page 
app.get('/history',(req,res)=> {


  const query=`select s.*, o.out_no ,o.go_date ,o.return_date ,o.reason ,o.status from outpass o , student s where o.email=s.email;
  `;

  pool.query(query,(error, results) => {
    if (error) throw error;
      res.json(results);
  
})
});



// modals in pending
app.get("/Pending/:outno",function(req,res){
    
  const query=`Select a.*, b.* from outpass a, student b where a.email=b.email
               and a.out_no=?;`;
  pool.query(query,[req.params.outno],function(err,results){
      if(!err){
          console.log(results);
          res.send(results);
          
      }
      else{
          console.log("Error"+err);
      }
      
      
  })
  
 
});


//cards for home page
app.get("/approved",(req,res)=>{
  pool.query("Select count(*) as count from outpass where status='approved'",function(err,results){
      if(!err){
          res.send(results);
          
      }
      else{
          console.log("Error"+err);
      }
      
      
  })
  
 
});

app.get("/ppending",(req,res)=>{
  pool.query("Select count(*) as count from outpass where status='pending'",function(err,results){
      if(!err){
          res.send(results);
          
      }
      else{
          console.log("Error"+err);
      }
      
      
  })
  
 
});


app.get("/denied",function(req,res){
  pool.query("Select count(*) as count from outpass where status='denied'",function(err,results){
      if(!err){
          res.send(results);
          
      }
      else{
          console.log("Error"+err);
      }
      
      
  })
  
 
});



// approve button 

app.put('/ButtonApprove/:outpassId', (req, res) => {
  const { outpassId } = req.params;


  const query =`UPDATE outpass SET status = "approved" WHERE out_no = ?;`;

  // Update the outpass status in the MySQL database
  pool.query(query, [outpassId], (error, results) => {
    if (error) {
      console.log("Error updating outpass status:", error);
    }
    // Respond with success message
    else{console.log("Done!");}
  });

});


//deny button

app.put('/ButtonDeny/:outpassId', (req, res) => {
  const { outpassId } = req.params;
  const { reason_denied } = req.body;

  if (!reason_denied) {
    return res.status(400).json({ message: 'The reason_denied field is required.' });
  }

  const query = `UPDATE outpass SET status = "denied", reason_denied = ? WHERE out_no = ?;`;

  // Update the outpass status and reason_denied in the MySQL database
  pool.query(query, [reason_denied, outpassId], (error, results) => {
   
    if (error) {
      console.log("Error updating outpass status and reason:", error);
    }

    else
    { console.log("done!"); }
    });
});










app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


