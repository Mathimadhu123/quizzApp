const connect = "mongodb+srv://quizz:quizz123@cluster0.dlnvk.mongodb.net/quizz_db?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(connect)
        console.log("DB is connected")
    }catch(error){
        console.log(error)
    }
}

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         console.log("⏳ Connecting to MongoDB...");
        
//         await mongoose.connect("mongodb+srv://quizz:quizz123@cluster0.dlnvk.mongodb.net/quizz_db?retryWrites=true&w=majority&appName=Cluster0", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log("✅ MongoDB is connected successfully!");
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:", error.message);
//         process.exit(1); // Exit if connection fails
//     }
// };

// Call the function directly for testing

