var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/InsurancePolicy');

var Schema = mongoose.Schema;

var AppliedPolicyModelSchema = new Schema(
    {   
        ListId: Number,
        PolicyAppliedUserName: String,
        Status: String

    }, 
    { versionKey: false  } );

var AppliedPolicyListModel = mongoose.model('appliedpolicylists', AppliedPolicyModelSchema );

// Exporting PolicyListModel 
module.exports = AppliedPolicyListModel;