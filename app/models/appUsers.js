'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const OptionSchema = new Schema({
     optionName: String,
     numClick: Number
  });

  const SurveySchema = new Schema({
     surveyName: String,
     options: [OptionSchema]
  })

  const fccvotingapp = new Schema({
     userName: String,
     password: String
    // surveys: [SurveySchema]
  });




module.exports = mongoose.model('appUser', fccvotingapp);