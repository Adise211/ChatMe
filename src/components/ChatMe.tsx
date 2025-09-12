import { FullChat } from "@/components/core";
import type { Contact, Conversation, Message } from "../config/types";
import { useEffect } from "react";
import { useStore } from "@/store";

interface ChatMeProps {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  onInit(): void;
  conversationId: string;
}

const ChatMe = ({ contacts, conversations, messages, onInit }: ChatMeProps) => {
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

  return (
    <>
      <FullChat />
    </>
  );
};

export default ChatMe;
