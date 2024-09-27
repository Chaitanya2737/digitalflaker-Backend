const Cities = require("../model/city.model"); 

const getCitieData = async (req, res) => {
  try {
    const userData = await Cities.find({});
    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addCitieData = async (req, res) => {
  try {
    const { cityName, cityCode, stateName } = req.body;


    const createEntry = await Cities.create({
      cityName,
      cityCode,
      stateName,
      status: true,
    });

    return res.status(201).json(createEntry);
    
  } catch (error) {
    console.error(error);

    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};


const editCitieData = async (req, res) => {
  try {
    const { cityName, cityCode, stateName, status, id } = req.body;
    const updateData = {};

    if (stateName !== undefined) {
      updateData.stateName = stateName;
    }
    if (cityName !== undefined) {
      updateData.cityName = cityName;
    }
    if (cityCode !== undefined) {
      updateData.cityCode = cityCode;
    }
    if (status !== undefined) {
      updateData.status = status;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ msg: "No fields provided for update" });
    }

    const editData = await Cities.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true } 
    );

    return res.status(200).json({ editData, msg: "Data successfully updated" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = {
  getCitieData,
  addCitieData,
  editCitieData,
};
