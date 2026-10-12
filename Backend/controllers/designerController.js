const designerService = require("../services/designerService");

async function getDesigners(req, res) {
  try {
    const { city } = req.query;
    const designers = await designerService.getDesigners(city);

    return res.status(200).json({
      success: true,
      count: designers.length,
      data: designers
    });
  } catch (error) {
    console.error("Failed to fetch designers:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}

async function getDesignerById(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid designer ID"
    });
  }

  try {
    const designer = await designerService.getDesignerById(id);

    if (!designer) {
      return res.status(404).json({
        success: false,
        message: "Designer not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: designer
    });
  } catch (error) {
    console.error("Failed to fetch designer by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}

module.exports = {
  getDesigners,
  getDesignerById
};
