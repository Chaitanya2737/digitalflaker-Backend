const express = require('express');
const { models } = require('mongoose');
const { getCitieData, addCitieData, editCitieData } = require('../controller/city.controller');
const verifyToken = require('../middleware/auth.middleware');

const cityRouter = express.Router()

cityRouter.get("/cities" ,verifyToken, getCitieData)
cityRouter.post("/cities" , verifyToken ,addCitieData)
cityRouter.put("/cities"  , verifyToken,editCitieData)

module.exports= cityRouter
