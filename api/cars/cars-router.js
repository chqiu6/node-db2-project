// DO YOUR MAGIC
const express = require("express");
const carsModel = require("./cars-model");
const router = express.Router();


//get cars 
router.get("/", async (req, res, next) => {
    try {
        const carsData =  await carsModel.getAll()
        res.status(200).json(carsData)
    } catch(err){
        next(err);
    }
})

//get cars id 
router.get("/:id", async (req, res, next) => {
    try {
        const carsId = await carsModel.getById(req.params.id)
        res.status(200).json(carsId)
    } catch (err) {
        next(err);
    }
})

//post cars
router.post("/", async (req, res, next) => {
    try{ 
        const carCreate = await carsModel.create(req.body)
        res.status(201).json(carCreate)
    } catch(err) {
        next(err);
    }
})

module.exports = router;