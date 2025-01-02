const mongoose = require('mongoose');

const portfolioUserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date },
    phone: { type: Number, required: true },
    totalExperience: { type: Number },
    totalProjects: { type: Number },
    totalCertification: { type: Number },
    description: { type: String, required: true },
    technologies: [
      {
        name: { type: String, required: true },
        category: {
          type: String,
          enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Languages'],
          required: true,
        },
        proficiency: {
          type: String,
          enum: ['Beginner', 'Intermediate', 'Advanced'],
        },
        icon: { type: String },
      },
    ]
    },
);

module.exports = mongoose.model('PortfolioUser', portfolioUserSchema);
