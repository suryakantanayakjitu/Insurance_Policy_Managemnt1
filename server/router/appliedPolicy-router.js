const express = require("express");
const AppliedPolicyListModel = require('../Model/appliedPolicyModel');
const router = express.Router();

router.get("/getAppliedPolicies", async function (req, res) {

    let result = await AppliedPolicyListModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

// router.post('/addNewApplyPolicy', async function (req, res) {
//     var applyNewPolicyObj = new AppliedPolicyListModel({
//         ListId: req.body.listid,
//         PolicyAppliedUserName: req.body.policyappliedusername,
//         Status: "Pending"
//     });
//     let newObj = await applyNewPolicyObj.save();
//     var result = {};
//     result.status = "Record inserted in Database";
//     console.log("[Create] - Record inserted in Database");
//     res.send(result);
// });

router.put('/updateAppliedPolicy', async function (req, res) {
    var appliedPolicyObj = {};
        appliedPolicyObj.ListId=  req.body.listid;
        appliedPolicyObj.PolicyAppliedUserName=  req.body.policyappliedusername;
        appliedPolicyObj.Status=  req.body.status;

    let updateDetails = await AppliedPolicyListModel.findOneAndUpdate(
        { ListId: appliedPolicyObj.ListId }, { $set: appliedPolicyObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);
});


// router.delete('/deleteAppliedPolicy/:id', async function(req, res){
//     let pid= parseInt(req.params.id);
//     let resresult = await AppliedPolicyListModel.findOneAndDelete({ ListId: pid});
    
// 	var result = {};
// 	result.status  = "Record deleted from Database";
// 	console.log("[Delete] - Record deleted from Database");
// 	res.send(result);
// })

module.exports = router;