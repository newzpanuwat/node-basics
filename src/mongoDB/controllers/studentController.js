const express = require("express");

var router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");

const insertRecord = (req, res) => {
  var student = new Student();
  student.fullName = req.body.fullName;
  student.email = req.body.email;
  student.city = req.body.city;
  student.save((err, doc) => {
    if (!err) {
      res.redirect("student/list");
    } else {
      console.log("Err", +err);
    }
  });
};

const updateRecord = (req, res) => {
  Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("student/list");
    } else {
      console.log("Error during update", +err);
    }
  });
};

router.get("/", (req, res) => {
  res.render("student/addOrEdit", {
    viewTitle: "Insert student",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

router.get("/list", (req, res) => {
  Student.find((err, docs) => {
    if (!err) {
      res.render("student/list", {
        list: docs,
      });
    } else {
      console.log("Err in retrieval", +err);
    }
  });
});

router.get("/:id", (req, res) => {
  Student.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("student/addOrEdit", {
        viewTitle: "Update Student",
        student: doc,
      });
      console.log(doc);
    }
  });
});

router.get("delete/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.render("student/list");
    } else {
      console.log("Err during deletion", +err);
    }
  });
});

module.exports = router;
