const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/kave_wishes'; // Replace with your actual database URI

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;