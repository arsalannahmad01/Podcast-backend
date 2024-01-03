const mongoose = require('mongoose')

const PodcastSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    speaker:{
        type:String
    },
    type:{
        type:String
    },
    file:{
        type:String
    }
})

module.exports = mongoose.model('Podcast', PodcastSchema)