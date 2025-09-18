import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "@/config/types";
import { useStore } from "@/store";
import { v4 as uuidv4 } from "uuid";

// # Local Use Only! - DO NOT USE IN PRODUCTION
const initStore = () => {
  return useStore.getState();
};

// # Exported mock functions (database operations) For Testing Use Only! - DO NOT USE IN PRODUCTION
export const createNewConversation = (
  contact: Contact,
  conversation: Conversation
) => {
  console.log("createNewConversation", contact, conversation);
  // Create a new conversation in the store
  initStore().addConversation(conversation);
  initStore().addContact(contact);
};

export const deleteConversation = (conversation: Conversation) => {
  // Delete the conversation from the store
  initStore().setConversations(
    initStore().conversations.filter((c) => c.id !== conversation.id)
  );
};

export const sendMessage = (message: NewMessage, conversationId: string) => {
  const newMessageData: Message = {
    ...message,
    id: uuidv4(),
    conversationId: conversationId,
    senderId: message.senderId || "",
  };
  // Send the message to the store
  initStore().addMessage(newMessageData);
  console.log("bbbb", initStore().messages);
};
