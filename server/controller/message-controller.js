import conversation from '../model/Conversation.js';
import Message from '../model/Message.js'

export const newMessage = async (request, response) => {
    try {
        const newMessage = new Message(request.body);

        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text}); //updating latest message in conversation to show on conversations bar

        return response.status(200).json('Message sent successfully');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getMessages = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}