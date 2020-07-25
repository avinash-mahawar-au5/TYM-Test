const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  empName: String,
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
