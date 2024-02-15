const express = require("express");
const AdminModel = require('../Model/adminModel');
const router = express.Router();



router.post('/Aloginvalidate', async function (req, res) {
    const { userid, password } = req.body;
    try {
        const user = await AdminModel.findOne({  UserID: userid, Password: password });
        if (user) {
            res.send({ success: true, message: 'Login Sucessfuly', data: user});
        } else {
            res.send({ success: false, message: 'Invalid credentials', data: user });
        }
    } catch (error) {
        res.send({ success: false, message: 'Server error' });
    }
});

router.post('/AsignUp', async function (req, res) {


    var Obj = new AdminModel({
        UserID: req.body.userid,
        Password: req.body.password
    });

    console.log(Obj);
    let newObj = await Obj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.json({ result:true, message: 'Admin registered successfully' });
});

module.exports = router;