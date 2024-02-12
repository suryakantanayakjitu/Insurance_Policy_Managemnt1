const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");  

const PoliciesRouter = require('./router/policyList-router');
const PolicyDetailsRouter = require('./router/PolicyDetails-router');
const AppliedPolicyListRouter = require('./router/appliedPolicy-router');
const UserRouter = require('./router/user-router');
const QueryRouter=require('./router/query-router')

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", PoliciesRouter);
app.use("/api", PolicyDetailsRouter);
app.use("/api", AppliedPolicyListRouter);
app.use("/api", UserRouter);
app.use("/api",QueryRouter);

app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});

var server=app.listen(3005,function() {});
console.log("Server Started. URL:http://localhost:3005");