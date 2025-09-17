import type { Contact, Conversation } from "@/config/types";
import { useStore } from "@/store";

const initStore = () => {
  return useStore.getState();
};

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
