const express = require('express')
const router = express.Router()

const { createPodcast, getPodcast } = require('../controllers/podcast')

router.route('/create-podcast').post(createPodcast)
router.route('/get-podcast').get(getPodcast)

module.exports = router