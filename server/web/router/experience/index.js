const express = require("express");
const { addExperience, getExperience, updateExperience, deleteExperience } = require("../../controller");

const ExperienceRoute = express.Router();

ExperienceRoute.post("/add", addExperience);
ExperienceRoute.get("/get", getExperience);
ExperienceRoute.put("/update", updateExperience);
ExperienceRoute.delete("/delete", deleteExperience);

module.exports = ExperienceRoute;
