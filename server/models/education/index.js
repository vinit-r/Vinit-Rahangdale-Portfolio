const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  education: [
    {
      institution: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      details: {
        cgpa: {
          type: Number,
        },
        percentage: {
          type: Number,
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
        }
      }
    }
  ]
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
