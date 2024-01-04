const Podcast = require('../models/Podcast')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const createPodcast = async (req, res) => {
   
    const {name, description, category, speaker, type, file} = req.body

    if(!name || !description || !category || !speaker || !type || !file)
        throw new BadRequestError('Please provide all the details')

    const podcast = await Podcast.create({...req.body})    
    console.log(podcast);
    res.status(StatusCodes.CREATED).json({msg:"Created Succesfully"})
    
}

const getPodcast = async (req, res) => {
    const data = await Podcast.find()

    if(data == null)
        throw new NotFoundError('Not available')

    res.status(StatusCodes.OK).json(data)
}

module.exports = {createPodcast, getPodcast}