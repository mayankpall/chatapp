import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
  
  try {
    const {message}= req.body;
    const {id: receiverId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants:{$all : [senderId, receiverId]},
    });

    if(!conversation){
      conversation = await Conversation.create({
        participants:[senderId,receiverId],
      });
    }

    const newMessage = new Message ({
      senderId,
      receiverId,
      message
    });

    if(newMessage){
      conversation.messages.push(newMessage._id);
    }

    //socket io functionality 

    // Saving the conversation with the updated messages array
    //this will run parallely which make it efficient
    await Promise.all([conversation.save(), newMessage.save()]);

    // await conversation.save();   this syntax will run one by one and make slower
    // await newMessage.save();

    res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendmessage controller :", error.message);
    res.status(500).json({
      error: "Internal server error "
    })
  }

};

export const getMessages = async (req,res)=>{

  try {
    const {id : userToChatId}=req.params;
    const senderId=req.user._id;

    const conversation = await Conversation.findOne({
      participants:{$all :[senderId,userToChatId]},
    }).populate("messages"); //inbuit to give message content or array object rather than array id 

    if(!conversation){
      return res.status(200).json([]);
    }
    
    const messages=conversation.messages;
    res.status(200).json(messages);
    
  } catch (error) {
    console.log("Error in getmessage controller :", error.message);
    res.status(500).json({
      error: "Internal server error "
    })
  }

}