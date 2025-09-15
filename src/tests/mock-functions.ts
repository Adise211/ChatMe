import type { Conversation } from "@/config/types";
import { useStore } from "@/store";

const initStore = () => {
  return useStore.getState();
};

export const deleteConversation = (conversation: Conversation) => {
  // Delete the conversation from the store
  initStore().setConversations(
    initStore().conversations.filter((c) => c.id !== conversation.id)
  );
};
