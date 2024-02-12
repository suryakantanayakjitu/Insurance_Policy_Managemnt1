const express = require("express");
const PolicyQueryModel = require('../Model/queryModel');
const router = express.Router();

router.get("/policyquery", async function (req, res) {

    let result = await PolicyQueryModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// Create 
router.post('/policyquery', async function (req, res) {
    var deptObj = new PolicyQueryModel({
        id: req.body.id,
        question: req.body.question,
        date: req.body.date,
        comment: req.body.comment,
        name: req.body.name,
        
    });

    console.log(deptObj);

    // Logic to insert new dept in database
    let newObj = await deptObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});

router.put('/policyquery', async function (req, res) {
    var deptObj = {};
    deptObj.id = parseInt(req.body.id),
        deptObj.name = req.body.name,
        deptObj.question = req.body.question,
        deptObj.comment = req.body.comment,
        deptObj.cdate = req.body.cdate,
        deptObj.date = req.body.date



    // Logic to insert new dept in database
    let resResult = await PolicyQueryModel.findOneAndUpdate({ id: deptObj.id }, { $set: deptObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});

module.exports = router;