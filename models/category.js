const mongoose = require('mongoose')

const categoryDataSchema = new mongoose.Schema({
  name:{type: String, required: true},
  type:{type: String, required: true}
});

const categoryModel = mongoose.model("categoryDB",categoryDataSchema);

module.exports = categoryModel;