const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/user')
const {getPodcast} = require('../controllers/podcast')

router.post('/register', register)
router.post('/login', login)
router.route('/get-podcast').get(getPodcast)



module.exports = router