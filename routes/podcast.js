const express = require('express')
const router = express.Router()

const { createPodcast, getPodcast } = require('../controllers/podcast')

router.route('/create-podcast').post(createPodcast)

module.exports = router