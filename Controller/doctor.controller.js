const express = require("express");
const doctorModel = require("../Model/doctor.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        let data = await doctorModel.find();
        return res.status(200).send(data)
    } catch (error) {
        return res.status(400).send({message: "error occured"})
    }
})

router.get("/:id", async (req, res) => {
    console.log(req.body);
    try {
        let data = await doctorModel.find({_id: req.params.id});
        return res.status(200).send(data)
    } catch (error) {
        return res.status(400).send({message: "error occured"})
    }
})


module.exports = router