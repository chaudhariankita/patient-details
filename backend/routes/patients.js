const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPatient = new Patient({
    username,
    description,
    duration,
    date,
  });

  newPatient.save()
  .then(() => res.json('Patient added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
      .then(patient => res.json(patient))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
      .then(() => res.json('Patient info deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Patient.findById(req.params.id)
      .then(patient => {
        patient.username = req.body.username;
        patient.description = req.body.description;
        patient.duration = Number(req.body.duration);
        patient.date = Date.parse(req.body.date);
  
        patient.save()
          .then(() => res.json('Patient updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;