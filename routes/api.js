var express = require('express')
var router = express.Router()
var StationController = require('../controllers/StationController')

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if (resource == 'station') {
		StationController.find(req.query, function(err, results) {
			if (err) {
				res.json({
					confirmation: "fail",
					message: err
				})
				return
			} else {
				res.json({
					confirmation: "success",
					message: results
				})
			}
		})
	}
})

router.get('/:resource/:stopid', function(req, res, next) {
	var resource = req.params.resource
	var id = req.params.stopid

	if (resource == 'station') {
		StationController.findById(id, function(err, results) {
			if (err) {
				res.json({
					confirmation: "fail",
					message: "Not Found"
				})
			} else {
				res.json({
					confirmation: "success",
					message: results
				})
			}
		})
	}

})

module.exports = router
