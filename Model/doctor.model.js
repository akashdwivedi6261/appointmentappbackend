const mongoose = require("mongoose");

const doctorModel = new mongoose.Schema(
    {
      name: { type: String, required: true },
      speciality: [{ type: Number, required: true }],
      availability: [{type: String, required: true}],
      cost: {type: Number, required: true}
    },
    {
      versionKey: false,
      timestamps: true
    }
  );
  
  module.exports = mongoose.model("doctor", doctorModel);