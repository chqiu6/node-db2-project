const { restart } = require("nodemon");
const carsModel = require("./cars-model");
var vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  try {
    // const id = req.params.id
    const carId = await carsModel.getById(req.params.id)
    if(!carId) {
      res.status(400).json({ message: "car with id <car id> is not found" })
    } else {
      req.carId = carId;
      next();
    }
  } catch(err){ 
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage) {
    res.status(400).json({ message: "<field name> is missing" })
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  var isValidVin = vinValidator.validate(req.body.vin)
  if(!isValidVin) {
    res.status(400).json({ message: "vin <vin number> is invalid" })
  } else { 
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try { 
    const vinUnique = await carsModel.getAll()
    const vinFilter = vinUnique.filter(item => {
     return item.vin == req.body.vin
    })
    if(vinFilter.length > 0) {
      res.status(400).json({ message: "vin <vin number> already exists" })
    } else {
      next();
    }
  } catch(err) { 
    next(err);
  }
}
