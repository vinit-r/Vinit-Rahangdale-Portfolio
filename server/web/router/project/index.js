const express = require("express");
const { addProject, getProject, updateProject, deleteProject } = require("../../controller");

const ProjectRoute = express.Router();

ProjectRoute.post("/add", addProject);
ProjectRoute.get("/get", getProject);
ProjectRoute.put("/update", updateProject);
ProjectRoute.delete("/delete", deleteProject);

module.exports = ProjectRoute;
