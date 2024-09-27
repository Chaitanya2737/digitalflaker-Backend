const Warehouse = require("../model/warehouse.model"); 

const getWarehouseData = async (req, res) => {
  try {
    const userData = await Warehouse.find({});
    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addWarehouseData = async (req, res) => {
  try {
    const { cityName, warehouseName, stateName } = req.body;
    console.log(req.body);
    if (!cityName || !warehouseName || !stateName) {
      return res.status(400).json({ msg: "data req" });
    }
    const createEntry = await Warehouse.create({
      cityName,
      warehouseName,
      stateName,
      status: true,
    });
    return res.status(201).json(createEntry);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const editWarehouseData = async (req, res) => {
  try {
    const { warehouseName, cityName, stateName, status, id } = req.body;
    const updateData = {};

    // Populate updateData only if fields are provided
    if (stateName !== undefined) {
      updateData.stateName = stateName;
    }
    if (cityName !== undefined) {
      updateData.cityName = cityName; 
    }
    if (warehouseName !== undefined) {
      updateData.warehouseName = warehouseName; 
    }
    if (status !== undefined) {
      updateData.status = status;
    }

    // Check if any fields are being updated
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ msg: "No fields provided for update" });
    }

    // Find and update the warehouse document
    const editData = await Warehouse.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // This option returns the updated document
    );

    // Handle case where the warehouse doesn't exist
    if (!editData) {
      return res.status(404).json({ msg: "Warehouse not found" });
    }

    return res.status(200).json({ editData, msg: "Data successfully updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = {
  getWarehouseData,
  addWarehouseData,
  editWarehouseData,
};
