import type { Contact } from "@/config/types";

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
};

export const getContactById = (id: string, contacts: Contact[]) => {
  return contacts.find((contact) => contact.id === id);
};
