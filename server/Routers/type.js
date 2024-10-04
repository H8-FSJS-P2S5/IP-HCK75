const express = require("express");
const typeController = require("../Controllers/typeController");
const type = require("express").Router();

type.get("/", typeController.getType);
type.post("/", typeController.postType);
type.put("/:id", typeController.editType);
type.delete("/:id",typeController.delete)

module.exports = type;