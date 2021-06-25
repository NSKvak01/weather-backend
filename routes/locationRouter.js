var express = require('express');
var router = express.Router();
let {
  getAllLocations,
  addLocation,
  deleteLocation} = require ("./controller/locationController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get-all-searched-locations', getAllLocations)
router.post('/add-location', addLocation)
router.delete('/delete-location-by-id/:id', deleteLocation)

module.exports = router;
