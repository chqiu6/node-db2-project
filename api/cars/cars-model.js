const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars")
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars")
  .where({id})
  .first()
}

const create = (cars) => {
  // DO YOUR 
  return db("cars")
  .insert(cars)
  .then(ids => {
    return getById(ids[0]);
  });
}

module.exports = {
  getAll, 
  getById,
  create
}