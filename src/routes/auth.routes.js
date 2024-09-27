const express = require('express');
const register = require('../controller/register.controller');
const login = require('../controller/login.controller');
const verifyToken = require('../middleware/auth.middleware.js');
const Auth = express.Router();

Auth.post("/register" , register);
Auth.post("/login"  , login);


module.exports = Auth