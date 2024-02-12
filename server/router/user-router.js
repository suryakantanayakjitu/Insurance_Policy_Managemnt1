const express = require("express");
const UserModel = require('../Model/userModel');
const router = express.Router();

// router.get("/getadata", async (req,res)=>{
//     let result = await UserModel.find({}, { "_id": 0 });
//     try {
//         console.log("[Read All] - No. of  items get from database : " + result.length);
//         res.send(result);
//     }
//     catch (error) {
//         res.status(500).send(error);    
//     }
// });


router.post('/loginvalidate', async function (req, res) {
    const { userid, password } = req.body;
    try {
        const user = await UserModel.findOne({  UserID: userid, Password: password });
        if (user) {
            res.send({ success: true, message: 'Login Sucessfuly', data: user});
        } else {
            res.send({ success: false, message: 'Invalid credentials', data: user });
        }
    } catch (error) {
        res.send({ success: false, message: 'Server error' });
    }
});

router.post('/signUp', async function (req, res) {
    const { userid} = req.body;

    try {
        // Check if user with the same uid already exists
        const existingUser = await UserModel.findOne({ UserID: userid });
        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' });
        }
        // Create a new user
        const newUser = new UserModel({
            UserID: req.body.userid,
            Password: req.body.password
        });

        await newUser.save();

        res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.json({ success: false, message: 'Server error' });
    }
});

module.exports = router;