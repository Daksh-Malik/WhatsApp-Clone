import Conversation from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    try { 
        const senderID = request.body.senderID;
        const receiverID = request.body.receiverID;

        const exist = await Conversation.findOne({ members: {$all: [receiverID, senderID]}}); //it will check all members i.e. both IDs should match

        if(exist){
            return response.status(200).json('Conversation already exists');
        }

        const newConversation = new Conversation({
            members : [senderID,receiverID]
        })

        await newConversation.save();
        return response.status(200).json('Conversation saved successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}  