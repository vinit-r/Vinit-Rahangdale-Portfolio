const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  project: [
    {
      projectName:{
        type: String,
        require: true
      },
      source:{
        type:String,
        require: true
      },
      discription: {
        type: String,
      },
      projectGitUrl:{
        type: String
      }
    }
  ]
});

const Project = mongoose.model('Experience', projectSchema);

module.exports = Project;
