import { ConversationView, ConversationList } from "@/components/core";

import type { Contact, Conversation, Message } from "../config/types";
import { useEffect } from "react";
import { useStore } from "@/store";

interface ChatMeProps {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  onInit(): void;
  conversationId: string;
  onCreateNewConversation: (
    contact: Contact,
    conversation: Conversation
  ) => void;
  onConversationSelect: (conversation: Conversation) => void;
  onContactInfo: (contact: Contact) => void;
  onDeleteConversation: (conversation: Conversation) => void;
}

const ChatMe = ({
  contacts,
  conversations,
  messages,
  onInit,
  onCreateNewConversation,
  onConversationSelect,
  onContactInfo,
  onDeleteConversation,
}: ChatMeProps) => {
  const setContacts = useStore((state) => state.setContacts);
  const setConversations = useStore((state) => state.setConversations);
  const setMessages = useStore((state) => state.setMessages);

  useEffect(() => {
    // Set the contacts, conversations, and messages
    if (contacts) {
      setContacts(contacts);
    } else {
      setContacts([]);
    }

    if (conversations) {
      setConversations(conversations);
    } else {
      setConversations([]);
    }

    if (messages) {
      setMessages(messages);
    } else {
      setMessages([]);
    }
  }, [
    contacts,
    conversations,
    messages,
    setContacts,
    setConversations,
    setMessages,
  ]);

  useEffect(() => {
    onInit();
  }, []);

  const handleNewConversation = (
    contact: Contact,
    conversation: Conversation
  ) => {
    if (onCreateNewConversation) {
      onCreateNewConversation(contact, conversation);
    }
  };

  const handleConversationSelect = (conversation: Conversation) => {
    if (onConversationSelect) {
      onConversationSelect(conversation);
    }
  };

  const handleContactInfo = (contact: Contact) => {
    if (onContactInfo) {
      onContactInfo(contact);
    }
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    if (onDeleteConversation) {
      onDeleteConversation(conversation);
    }
  };

  return (
    <>
      <ConversationList
        onConversationSelect={handleConversationSelect}
        onNewConversation={handleNewConversation}
        onContactInfo={handleContactInfo}
        onDeleteConversation={handleDeleteConversation}
      />
      <ConversationView />
    </>
  );
};

export default ChatMe;
