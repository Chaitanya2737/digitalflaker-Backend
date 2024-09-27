const express = require("express");
const {
  getWarehouseData,
  addWarehouseData,
  editWarehouseData,
} = require("../controller/Warehouse.controller.js");
const verifyToken = require("../middleware/auth.middleware");

const WarehouseRouter = express.Router();

WarehouseRouter.get("/warehouse", verifyToken , getWarehouseData);
WarehouseRouter.post("/warehouse", verifyToken,addWarehouseData);
WarehouseRouter.put("/warehouse", verifyToken,editWarehouseData);

module.exports = WarehouseRouter;
