const Shelter = require('../models/animals')
const express = require('express')
const router = express.Router()

// CREATE

router.post('/', (req, res) => {
  Shelter.create({
    name: req.body.name,
    breed: req.body.breed,
    DOB: req.body.DOB,
    gender: req.body.gender,
    family: req.body.family,
    imageURL: req.body.imageURL,
    status: 'Abandoned'
  }, (errrrr, item) => {
    if (errrrr) {
      Shelter.find({}, (err, animalsList) => {
        if (err) {
          console.log(err)
          return
        } else {
          res.render('animals', { animalsList: animalsList, error: errrrr })
          return
        }
      })
    } else {
      res.redirect('/animals')
    }
  })
})

// READ (list)

router.get('/', (req, res) => {
  Shelter.find({}, (err, animalsList) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.render('animals', { animalsList: animalsList, error: null })
    }
  })
})

router.get('/')

// UPDATE

router.put('/:idx', (req, res) => {
  Shelter.findOneAndUpdate({ _id: req.params.idx }, req.body, { runValidators: true }, (err, data) => {
    if (err) {
      console.log(err)
      return
    } else {
      res.redirect('/animals')
    }
  })
})

module.exports = router
