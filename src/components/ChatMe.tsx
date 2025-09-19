import { ConversationView, ConversationList } from "@/components/core";

import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "../config/types";
import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { ArrowLeft } from "lucide-react";
import { getContactName } from "@/config/helpers";

interface ChatMeProps {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  isMobileView?: boolean;
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
  isMobileView = false,
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
    <>
      {/* Desktop View */}
      {!isMobileView ? (
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
      ) : (
        <div className="h-full w-full">
          {!selectedConversation ? (
            <ConversationList
              onConversationSelect={handleConversationSelect}
              onNewConversation={handleNewConversation}
              onContactInfo={handleContactInfo}
              onDeleteConversation={handleDeleteConversation}
            />
          ) : (
            <>
              {/* Mobile View */}
              <div className="flex items-center p-4 bg-white border-b border-gray-200 gap-2">
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                  onClick={() => setSelectedConversation(null)}
                >
                  <ArrowLeft />
                </button>
                <div className="text-lg font-semibold text-gray-900 truncate">
                  {getContactName(
                    selectedConversation?.contactId || "Unknown Contact"
                  )}
                </div>
              </div>
              <div className="h-[calc(100vh-120px)]">
                <ConversationView
                  selectedConversation={selectedConversation}
                  onMessageSent={handleMessageSent}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatMe;
