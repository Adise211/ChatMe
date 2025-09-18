import { ConversationView, ConversationList } from "@/components/core";

import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "../config/types";
import { useEffect, useState } from "react";
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
  onMessageSent: (message: NewMessage, conversationId: string) => void;
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
  onMessageSent,
}: ChatMeProps) => {
  const setContacts = useStore((state) => state.setContacts);
  const setConversations = useStore((state) => state.setConversations);
  const setMessages = useStore((state) => state.setMessages);
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

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
    // Set the selected conversation for local use
    setSelectedConversation(conversation);
    if (onConversationSelect) {
      onConversationSelect(conversation);
    }
  };

  const handleMessageSent = (message: NewMessage, conversationId: string) => {
    if (onMessageSent) {
      onMessageSent(message, conversationId);
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
    <div className="h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <ConversationList
            onConversationSelect={handleConversationSelect}
            onNewConversation={handleNewConversation}
            onContactInfo={handleContactInfo}
            onDeleteConversation={handleDeleteConversation}
          />
        </div>
        <div className="col-span-8 h-screen">
          <ConversationView
            selectedConversation={selectedConversation}
            onMessageSent={handleMessageSent}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMe;
