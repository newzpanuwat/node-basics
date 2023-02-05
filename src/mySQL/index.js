var mysql = require("mysql");
const express = require("express");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();

// create database

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Databases Created.");
  });
});

// Create employee table

app.get("/create_employee", (req, res) => {
  let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), des VARCHAR(255), PRIMARY KEY(id))";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee table has been created.");
  });
});

// Insert employee

app.get("/employee_1", (req, res) => {
  let post = { name: "Jake", desc: "Chef" };
  let sql = `INSERT INTO employee SET ?`;
  let query = db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee added");
  });
});

// select employees
app.get("/employees", (req, res) => {
  let sql = `SELECT * FROM employee`;
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }

    console.log(results);
    res.send("Employee details fetched");
  });
});

// update employee
app.get("/update_employee", (req, res) => {
  let newName = "Updated name";
  let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee updated");
  });
});

// delete employee
app.get("/delete_employee/:id", (req, res) => {
  let query = db.query(sql, (err) => {
    if (err) {
      throw err;
    }

    res.send("Employee deleted");
  });
});

app.listen("8000", () => {
  console.log("Server started on port 8000");
});
