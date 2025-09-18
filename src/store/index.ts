import type {
  Contact,
  Conversation,
  Message,
  NewMessage,
} from "@/config/types";
import type { FieldType } from "@/config/enums";
import { create } from "zustand";

interface StoreState {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[] | NewMessage[];
  setContacts: (contacts: Contact[]) => void;
  setConversations: (conversations: Conversation[]) => void;
  setMessages: (messages: Message[]) => void;
  resetAll: () => void;
  reset: (target: FieldType) => void;
  addContact: (contact: Contact) => void;
  addConversation: (conversation: Conversation) => void;
  addMessage: (message: Message | NewMessage) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  contacts: [],
  conversations: [],
  messages: [],
  // Setters
  setContacts: (contacts: Contact[]) => set({ contacts }),
  setConversations: (conversations: Conversation[]) => set({ conversations }),
  setMessages: (messages: Message[]) => set({ messages }),
  // Resetters
  resetAll: () => set({ contacts: [], conversations: [], messages: [] }),
  reset: (target: FieldType) => set({ [target]: [] }),
  // Add methods
  addContact: (contact: Contact) =>
    set({ contacts: [...get().contacts, contact] }),
  addConversation: (conversation: Conversation) =>
    set({ conversations: [...get().conversations, conversation] }),
  addMessage: (message: Message | NewMessage) =>
    set({ messages: [...get().messages, message] }),
}));
