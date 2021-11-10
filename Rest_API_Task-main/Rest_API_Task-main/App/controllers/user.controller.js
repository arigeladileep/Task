const express = require("express");
const sql = require("../models/db.js");

//Creating new item in database

exports.create = (req, res) => {
  const name = req.body.uname
  const username=req.body.username
  const password=req.body.upassword
  var query = `INSERT INTO users1 (uname,username,upassword) VALUES ('${name}' , '${username}' , '${password}')`
  sql.query(query,(err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    else{
      res.json(data)
    }
  });
};

////////////////////////////////////////////////////////////////

// Selecting all items from database

exports.findAll = (req, res) => {
  sql.query("SELECT * FROM users1", (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }else{
      res.json(data)
    }
  });
};

///////////////////////////////////////////////////////////////

// Selecting one item from Database

exports.findOne = (req, res) => {
  sql.query(`SELECT * FROM users1 WHERE id= ${req.params.id}`, (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    else{
      res.json(data)
  };
}
)};



////////////////////////////////////////////////////////////

//Updating the user name and username

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  sql.query(
    `UPDATE users1 SET  uname = '${req.body.uname}' , username='${req.body.username}' WHERE id= '${req.params.id}'`,
    (err, data) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      if (res.affectedRows == 0) {
        return;
      }else{
        res.json(data)
      }
    }
  );
};

///////////////////////////////////////////////////////

// Deleting one item from database

exports.delete = (req, res) => {
  sql.query(`DELETE FROM users1 WHERE id= '${req.params.id}'`, (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    if (res.affectedRows == 0) {
      return;
    }else{
      res.json(data)
    }

  });
};

////////////////////////////////////////////////////////////

//Deleting All Columns  from the database

exports.deleteAll = (req, res) => {
  sql.query("DELETE FROM users1", (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }else{
      res.json(data)
    }    
  });
};