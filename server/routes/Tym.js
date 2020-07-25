const express = require("express");
const Employee = require("../models/Employee");
const Survey = require("../models/Survey");
const router = express.Router();

router.post("/create-employee", (req, res) => {
  const { empName } = req.body;
  Employee.findOne({ empName }).then((emp) => {
    if (emp) {
      return res
        .status(403)
        .json({ code: 403, response: "Employee already exists" });
    } else {
      new Employee({ empName })
        .save()
        .then((emp) => {
          res.status(200).json({ code: 200, resonse: "Added Successfully" });
          res.send(emp);
        })
        .catch((e) => res.status(500).send("There were some error"));
    }
  });
});

router.post("/create-survey", (req, res) => {
  const { surveyName } = req.body;
  Survey.findOne({ surveyName }).then((survey) => {
    if (survey) {
      return res
        .status(403)
        .json({ code: 403, response: "Survey already exists" });
    } else {
      new Survey({ surveyName })
        .save()
        .then((survey) => {
          res.status(200).json({ code: 200, resonse: "Added Successfully" });
          res.send(survey);
        })
        .catch((e) => res.status(500).send("There were some error"));
    }
  });
});

router.get("/all-employees", (req, res) => {
  Employee.find({})
    .then((emp) => {
      res.status(200).json({ code: 200, response: emp });
    })
    .catch((error) =>
      res
        .sendStatus(500)
        .json({ code: 500, response: "Error in fetching recoreds" })
    );
});
router.get("/all-surveys", (req, res) => {
  Survey.find({})
    .then((survey) => {
      res.status(200).json({ code: 200, response: survey });
    })
    .catch((error) =>
      res
        .sendStatus(500)
        .json({ code: 500, response: "Error in fetching recoreds" })
    );
});

router.get("/test", (req, res) => {
  //   res.sendStatus(200).json({ code: 200, response: "API is Working" });
  res.send("working");
});
module.exports = router;
