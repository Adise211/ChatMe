import { type Contact, type Conversation } from "@/config/types";
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

export const getContactById = (id: string, contacts: Contact[]) => {
  return contacts.find((contact) => contact.id === id);
};

export const getConversationById = (
  id: string,
  conversations: Conversation[]
) => {
  return conversations.find((conversation) => conversation.id === id);
};

export const getConversationsForUI = (conversations: Conversation[]) => {
  return conversations.map((conversation) => ({
    ...conversation,
    lastMessageTime: conversation.lastMessageAt,
  }));
};

export const markConversationAsRead = (conversation: Conversation) => {
  return {
    ...conversation,
    lastMessageStatus: MessageStatus.READ,
  };
};

export const getMessagesForConversation = (conversationId: string) => {
  const messages = initStore().messages || [];
  return messages.filter(
    (message) => message.conversationId === conversationId
  );
};
