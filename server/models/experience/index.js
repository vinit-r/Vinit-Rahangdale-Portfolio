const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  experience: [
    {
      designation:{
        type: String,
        require: true
      },
      company: {
        type: String,
        required: true
      },
      startingYear: {
        type: Date,
        required: true
      },
      endingYear: {
        type: Date,
        required: true
      },
      location: {
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        }
      },
      discription: {
        type: String,
        require: true
      },
    }
  ]
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
