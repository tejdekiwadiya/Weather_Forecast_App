import mongoose from "mongoose";

const dbConnection = async () => {
    const dbURI = process.env.MONGODB_URI; // Use the MONGODB_URI variable

    console.log(dbURI); // Log the connection string for debugging

    try {
        const connection = await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("☁️ " + `Database Connected\n⚡ Host: ${connection.connection.host}`);
    } catch (e) {
        console.log(`❌ Database failed to connect due to error: ${e}`);
    }
}

export default dbConnection;
