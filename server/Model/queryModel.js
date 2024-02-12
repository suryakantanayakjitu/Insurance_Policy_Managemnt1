var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/InsurancePolicy');

var Schema = mongoose.Schema;

var queryModelSchema = new Schema(
    {   
        id:Number,
        question: String,
       comment: String,
       name:String,
       date:String,
       cdate:String

    }, 
    { versionKey: false  } );

var PolicyQueryModel = mongoose.model('query', queryModelSchema );

// Exporting PolicyListModel 
module.exports = PolicyQueryModel;
