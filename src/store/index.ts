import type { Contact, Conversation, FieldType, Message } from "@/config/types";
import { create } from "zustand";

interface StoreState {
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  setContacts: (contacts: Contact[]) => void;
  setConversations: (conversations: Conversation[]) => void;
  setMessages: (messages: Message[]) => void;
  resetAll: () => void;
  reset: (target: FieldType) => void;
}

export const useStore = create<StoreState>((set) => ({
  contacts: [],
  conversations: [],
  messages: [],
  setContacts: (contacts: Contact[]) => set({ contacts }),
  setConversations: (conversations: Conversation[]) => set({ conversations }),
  setMessages: (messages: Message[]) => set({ messages }),
  resetAll: () => set({ contacts: [], conversations: [], messages: [] }),
  reset: (target: FieldType) => set({ [target]: [] }),
}));
