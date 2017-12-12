var express = require('express')
var router = express.Router()
var StationController = require('../controllers/StationController')

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if (resource == 'station') {
		StationController.find(req.query, function(err, results) {
			if (err) {
				res.json({
					confirmation:"fail",
					message: err
				})
				return
			} else {
				res.json({
					confirmation:"success",
					message: results
				})
			}
		})
	} else {
		res.json({
			confirmation:"fail",
			message: "no such resources"
		})
	}
})

module.exports = router
