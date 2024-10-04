const express = require("express");
const plant = require("express").Router();
const plantController= require('../Controllers/plantController')
const authorization = require("../Middlewares/authorization")

const authentication = require("../Middlewares/authentication");




plant.use(authentication)

plant.get("/", plantController.getallPlant);
plant.post("/", plantController.postallPlant);
plant.get("/:id", plantController.plantById);
plant.put("/:id",plantController.editPlant);

plant.delete("/:id", plantController.deletePlant);

module.exports = plant;