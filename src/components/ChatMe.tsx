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
  const updateConversation = useStore((state) => state.updateConversation);
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
  }, [onInit]);

  const handleNewConversation = (
    contact: Contact,
    conversation: Conversation
  ) => {
    if (onCreateNewConversation) {
      try {
        onCreateNewConversation(contact, conversation);
      } catch (error) {
        // Handle errors gracefully to prevent component crashes
        console.error("Error in onCreateNewConversation:", error);
      }
    }
  };

  const handleConversationSelect = (conversation: Conversation) => {
    // Set the selected conversation for local use
    setSelectedConversation(conversation);

    // Reset unread count to 0 when conversation is selected
    if (conversation.id && conversation.unreadCount > 0) {
      updateConversation(conversation.id, { unreadCount: 0 });
    }

    if (onConversationSelect) {
      try {
        onConversationSelect(conversation);
      } catch (error) {
        // Handle errors gracefully to prevent component crashes
        console.error("Error in onConversationSelect:", error);
      }
    }
  };

  const handleMessageSent = (message: NewMessage, conversationId: string) => {
    if (onMessageSent) {
      try {
        onMessageSent(message, conversationId);
      } catch (error) {
        // Handle errors gracefully to prevent component crashes
        console.error("Error in onMessageSent:", error);
      }
    }
  };

  const handleContactInfo = (contact: Contact) => {
    if (onContactInfo) {
      try {
        onContactInfo(contact);
      } catch (error) {
        // Handle errors gracefully to prevent component crashes
        console.error("Error in onContactInfo:", error);
      }
    }
  };

  const handleDeleteConversation = (conversation: Conversation) => {
    if (onDeleteConversation) {
      try {
        onDeleteConversation(conversation);
      } catch (error) {
        // Handle errors gracefully to prevent component crashes
        console.error("Error in onDeleteConversation:", error);
      }
    }
  };

  return (
    <div className="h-full">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4">
          <ConversationList
            onConversationSelect={handleConversationSelect}
            onNewConversation={handleNewConversation}
            onContactInfo={handleContactInfo}
            onDeleteConversation={handleDeleteConversation}
          />
        </div>
        <div className="col-span-8 h-full">
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
