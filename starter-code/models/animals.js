const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'a name is required'
    ],
    minlength: [
      4,
      'the provided name is way too short'
    ]
  },
  breed: {
    type: String,
    required: [
      true,
      'we need to know the animal\'s breed'
    ]
  },
  DOB: {
    type: Date,
    required: [
      true,
      'the animal\'s date of birth is necessary'
    ]
  },
  gender: {
    type: String,
    required: [
      true,
      'we need to know the animal\'s gender'
    ]
  },
  family: {
    type: String,
    required: [
      true,
      'the animal\'s family is required'
    ]
  },
  imageURL: {type: String},
  status: { type: String }
})

const Shelter = mongoose.model('Shelter', animalSchema)

module.exports = Shelter
