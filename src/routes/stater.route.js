const express = require('express');
const { models } = require('mongoose');
const { getStateData, addStateData, editStateData } = require('../controller/state.controller');
const verifyToken = require('../middleware/auth.middleware');

const stateRouter = express.Router()

stateRouter.get("/states" ,verifyToken , getStateData)
stateRouter.post("/states" , verifyToken ,addStateData)
stateRouter.put("/states", verifyToken ,editStateData)


module.exports= stateRouter