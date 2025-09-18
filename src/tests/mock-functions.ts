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
  const store = initStore();

  console.log("aaaa", message);
  const newMessageData: Message = {
    ...message,
    id: uuidv4(),
    conversationId: conversationId,
    senderId: message.senderId || "",
  };
  // Send the message to the store
  store.addMessage(newMessageData);

  console.log("bbbb", newMessageData);
  if (newMessageData.direction === MessageDirection.OUTBOUND) {
    console.log("cccc", initStore().messages);
    setTimeout(() => {
      const updatedMessage = updateMessageStatus(
        newMessageData,
        MessageStatus.SENT
      );

      // Update the message in the store
      store.setMessages(
        store.messages
          // @ts-expect-error - id is not in the type
          .map((msg) => (msg.id === newMessageData.id ? updatedMessage : msg))
          .filter((msg): msg is Message => "id" in msg)
      );
    }, 1000);
  } else {
    console.log("dddd", initStore().messages);

    setTimeout(() => {
      const updatedMessage = updateMessageStatus(
        newMessageData,
        MessageStatus.DELIVERED
      );
      // Update the message in the store
      store.setMessages(
        store.messages
          // @ts-expect-error - id is not in the type
          .map((msg) => (msg.id === newMessageData.id ? updatedMessage : msg))
          .filter((msg): msg is Message => "id" in msg)
      );
    }, 1000);
  }
};
