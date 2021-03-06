const express = require("express")

const server = express()

const carsRouter = require("./cars/cars-router");
// DO YOUR MAGIC
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
    res.json({ message: "Server is live"})
})

server.use((err, req, res, next) => { 
    console.log(err);
    res.status(500).json({
      message : "Something went wrong",
      errMessage : err.message
    });
  });

module.exports = server
