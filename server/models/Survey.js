const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema = new Schema({
  surveyName: String,
});

const survey = mongoose.model("survey", surveySchema);

module.exports = survey;
