const designerRepository = require("../repositories/designerRepository");

async function getDesigners(city) {
  return await designerRepository.findAll(city);
}

async function getDesignerById(id) {
  return await designerRepository.findById(id);
}

module.exports = {
  getDesigners,
  getDesignerById
};
