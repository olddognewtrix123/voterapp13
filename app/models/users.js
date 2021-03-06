'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
   nbrClicks: {
      clicks: Number
   }
});


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
     surveys: [SurveySchema]
  });



module.exports = mongoose.model('User', User);

module.exports = mongoose.model('appUser', fccvotingapp);
