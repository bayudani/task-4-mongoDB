const { JsonWebTokenError } = require('jsonwebtoken');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message:'user berhasil register'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

exports.login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user) throw  Error('Username atau password salah');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Username atau password salah');


        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.cookie('token',token,{httpOnly: true});
        res.status(200).json({message:'login berhasil',token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};