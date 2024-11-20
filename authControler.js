const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {User,validateRegisterUser} = require("../models/User");


module.exports.registerUserCtrl = asyncHandler(async (req, res) => {
    const { error } = validateRegisterUser(req.body);
    if (error){
        return res.status(400).json({message:error.details[0].message});
    }
});