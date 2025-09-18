import { type Conversation } from "@/config/types";
import { MessageStatus } from "@/config/enums";
import { useStore } from "@/store";

// # GENERAL HELPERS
export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
};

// # STORE/DATA HELPERS

// Get access to the data/states from the store for the helpers
const initStore = () => {
  return useStore.getState();
};

// Helper function to get messages by conversation ID
export const getMessagesByConversationId = (conversationId: string) => {
  const { messages } = initStore();
  return messages.filter(
    (message) => message.conversationId === conversationId
  );
};

// Helper function to get conversation by contact ID
export const getConversationByContactId = (contactId: string) => {
  const { conversations } = initStore();

  return conversations.find(
    (conversation) => conversation.contactId === contactId
  );
};

// Helper function to get contact by ID
export const getContactById = (contactId: string) => {
  const { contacts } = initStore();
  return contacts.find((contact) => contact.id === contactId);
};

// Helper function to get all data for a conversation (contact + conversation + messages)
export const getConversationFullDataById = (conversationId: string) => {
  const { conversations } = initStore();
  const conversation = conversations.find((conv) => conv.id === conversationId);
  if (!conversation) return null;

  const contact = getContactById(conversation.contactId);
  const messages = getMessagesByConversationId(conversationId);

  return {
    contact,
    conversation,
    messages,
  };
};

// Helper function to get conversation by ID
export const getConversationById = (id: string) => {
  const { conversations } = initStore();
  return conversations.find((conversation) => conversation.id === id);
};

// Helper function to mark a conversation as read
export const markConversationAsRead = (conversation: Conversation) => {
  return {
    ...conversation,
    lastMessageStatus: MessageStatus.READ,
  };
};

// Helper function to get messages for a conversation
export const getMessagesForConversation = (conversationId: string) => {
  const { messages } = initStore();
  return messages.filter(
    (message) => message.conversationId === conversationId
  );
};
