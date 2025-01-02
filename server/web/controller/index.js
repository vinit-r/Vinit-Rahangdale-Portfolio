const whatsAppConnect = require("./whatsAppMsg");
const {createUser, getUser, updateUser, deleteUser} = require("./user");
const {addProject, getProject, updateProject, deleteProject} = require("./project");
const {addExperience, getExperience, updateExperience, deleteExperience} = require("./experience");
const {addEducation, getEducation, updateEducation, deleteEducation} = require("./education");

module.exports = { 
    whatsAppConnect,

    createUser, 
    getUser, 
    updateUser, 
    deleteUser,

    addProject, 
    getProject, 
    updateProject, 
    deleteProject,

    addExperience, 
    getExperience, 
    updateExperience, 
    deleteExperience,

    addEducation, 
    getEducation, 
    updateEducation, 
    deleteEducation
 };
