import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 99
           
    }
    
});

export default mongoose.model("User", Userschema);

