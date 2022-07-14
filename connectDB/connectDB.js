const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Mongoose-Checkpoint');
        console.log("we are connected")
      } catch (error) {
        console.log(error);
      }
}

module.exports = connectDB