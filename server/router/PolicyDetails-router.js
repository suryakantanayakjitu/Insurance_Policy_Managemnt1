const express = require("express");
const PolicyDetailsModel = require('../Model/policyDetailsModel');
const router = express.Router();

router.get("/getPolicyHolderDetails", async function (req, res) {

    let result = await PolicyDetailsModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});



router.post('/addPolicyHolder', async function (req, res) {
    var policyObj = new PolicyDetailsModel({
        PolicyId: req.body.policyid,
        PolicyName: req.body.policyname,
        PolicyCategory: req.body.policycategory,
        PolicyDescription: req.body.policydesc,
        PolicyPremium: req.body.policypremium,
    });
    let newObj = await policyObj.save();
    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    // console.log(policyObj.PolicyName); checking if the data is getting the input or not.
    res.send(result);
});



router.put('/updatePolicyHolder', async function (req, res) {
    var policyObj = {};
        policyObj.PolicyId=  req.body.policyid;
        policyObj.PolicyName=  req.body.policyname;
        policyObj.PolicyCategory=  req.body.policycategory;
        policyObj.PolicyDescription=  req.body.policydesc;
        policyObj.PolicyPremium=  req.body.policypremium;

    let updateDetails = await PolicyDetailsModel.findOneAndUpdate(
        { PolicyId: policyObj.PolicyId }, { $set: policyObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});



router.delete('/deletePolicyHolder/:id', async function(req, res){
    let pid= parseInt(req.params.id);
    let resresult = await PolicyDetailsModel.findOneAndDelete({ PolicyId: pid});
    
	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
})
module.exports = router;
