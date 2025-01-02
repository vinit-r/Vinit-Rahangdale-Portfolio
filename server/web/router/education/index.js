const express = require("express");
const { addEducation, getEducation, updateEducation, deleteEducation } = require("../../controller");

const EducationRoute = express.Router();

EducationRoute.post("/add", addEducation);
EducationRoute.get("/get", getEducation);
EducationRoute.put("/update", updateEducation);
EducationRoute.delete("/delete", deleteEducation);

module.exports = EducationRoute;
