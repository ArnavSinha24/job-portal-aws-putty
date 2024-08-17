import mongoose from 'mongoose'

const dbConnection = async () => {
    const DB_URI = "mongodb+srv://user:codeforinterview@job-portal.4zinb.mongodb.net/";
    try {
        await mongoose.connect(DB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message)
    }
}

export default dbConnection;