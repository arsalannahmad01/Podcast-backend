const express = require('express')
const router = express.Router()

const { createPodcast } = require('../controllers/podcast')

router.post('/create-podcast', createPodcast)

module.exports = router