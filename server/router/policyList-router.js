const express = require("express");
const PolicyListModel = require('../Model/policyListModel');
const router = express.Router();

router.get("/getPolicies", async function (req, res) {

    let result = await PolicyListModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.post('/addPolicy', async function (req, res) {
    var policiesObj = new PolicyListModel({
        PolicyId: req.body.policyid,
        PolicyCategory: req.body.policycategory,
        Premium: req.body.premium
    });
    let newObj = await policiesObj.save();
    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    console.log("policies Obj1",policiesObj.PolicyId);
    console.log("policies Obj2",policiesObj.PolicyCategory);
    console.log("policies Obj3",policiesObj.Premium);
    res.send(result);
});


router.put('/updatePolicy', async function (req, res) {
    var policiesObj = {};
        policiesObj.PolicyId = req.body.policyid;
        policiesObj.PolicyCategory=  req.body.policycategory;
        policiesObj.Premium=  req.body.premium;

    let updatePolicies = await PolicyListModel.findOneAndUpdate(
        { PolicyId: policiesObj.PolicyId }, { $set: policiesObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});


router.delete('/deletePolicy/:id', async function(req, res){
    let pid= parseInt(req.params.id);
    let resresult = await PolicyListModel.findOneAndDelete({ PolicyId: pid});
    
	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
});

module.exports = router;
