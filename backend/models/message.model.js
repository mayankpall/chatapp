import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId, // Data type is ObjectId which comes from mongoose
    ref:"User", // Refers to the "User" model for population
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  },
  message: {
    type: String,
    required: true
  },

},  {timestamps:true} // Adding timestamps for createdAt and updatedAt fields
);

// Creating a Mongoose model named "Message" based on the messageSchema
const Message =mongoose.model("Message",messageSchema);

export default Message;