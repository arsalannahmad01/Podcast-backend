require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');


const connectDB = require('./db/connect')
const { authMiddleware } = require('./middleware/authentication')


const UserRouter = require('./routes/user')
const PodcastRouter = require('./routes/podcast')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(cors());


// routes
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/podcast', authMiddleware,  PodcastRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Database connection established...')
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
