const State = require("../model/state.model"); // Adjust the path as necessary

const getStateData = async (req, res) => {
  try {
    const userData = await State.find({});
    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" }); // Return an error response
  }
};

const addStateData = async (req, res) => {
  try {
    const { stateName, stateCode } = req.body;
    console.log(req.body)

    if (!stateName || !stateCode) {
      return res.status(400).json({ message: "State name and state code are required" });
    }

    const createEntry = await State.create({
      stateName,
      stateCode,
      status: true, 
    });

    return res.status(200).json(createEntry);

  } catch (error) {
    console.error("Error creating state entry:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


const editStateData = async (req, res) => {
  try {
    const { id, stateName, stateCode, status } = req.body;
    const updateData = {};

    if (stateName !== undefined) {
      updateData.stateName = stateName;
    }
    if (stateCode !== undefined) {
      updateData.stateCode = stateCode;
    }
    if (status !== undefined) {
      updateData.status = status;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ msg: "No fields provided for update" });
    }

    const updatedState = await State.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true } 
    );
    

    if (!updatedState) {
      return res.status(404).json({ msg: "State not found" });
    }

    return res.status(200).json({ msg: "Data successfully updated", updatedState });
  } catch (error) {
    return res.status(500).json({ msg: "An error occurred while updating state", error: error.message });
  }
};

module.exports = {
  getStateData,
  addStateData,
  editStateData
};
