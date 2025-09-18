import { updateMessageStatus } from "@/config/helpers";
import { MessageDirection, MessageStatus } from "@/config/enums";
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
  contact.id = uuidv4();
  conversation.id = uuidv4();
  conversation.contactId = contact.id;
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
  const messageId = uuidv4();
  // Add more info to the message
  const newMessageData: Message = {
    ...message,
    id: messageId,
    conversationId: conversationId,
    senderId: message.senderId || "",
  };
  // Send the message to the store
  initStore().addMessage(newMessageData);
  if (newMessageData.direction === MessageDirection.OUTBOUND) {
    setTimeout(() => {
      const updatedMessage = updateMessageStatus(
        newMessageData,
        MessageStatus.SENT
      );

      // Update the message in the store
      const updatedMessages = initStore().messages.map((msg) =>
        (msg as Message).id === messageId ? updatedMessage : msg
      );
      initStore().setMessages(updatedMessages as Message[]);
    }, 1000);
  } else {
    setTimeout(() => {
      const updatedMessage = updateMessageStatus(
        newMessageData,
        MessageStatus.DELIVERED
      );
      // Update the message in the store
      const updatedMessages = initStore().messages.map((msg) =>
        (msg as Message).id === messageId ? updatedMessage : msg
      );
      initStore().setMessages(updatedMessages as Message[]);
    }, 1000);
  }
};
