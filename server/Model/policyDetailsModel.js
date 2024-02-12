var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/InsurancePolicy');

var Schema = mongoose.Schema;

var PolicyDetailsModelSchema = new Schema(
    {
        PolicyId: Number,
        PolicyName: String,
        PolicyCategory: String,
        PolicyDescription: String,
        PolicyPremium: Number

    }, 
    { versionKey: false  } );

var PolicyDetailsModel = mongoose.model('policyDetails', PolicyDetailsModelSchema );

// Exporting PolicyDetailsModel 
module.exports = PolicyDetailsModel;