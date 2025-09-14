import ChatMe from "@/components/ChatMe";
import {
  mockContacts,
  mockConversations,
  mockMessages,
} from "@/config/mock-data";

// TESTING ONLY!!!
const HomePage = () => {
  return (
    <>
      <ChatMe
        contacts={mockContacts}
        conversations={mockConversations}
        messages={mockMessages}
        onInit={() => {}}
        conversationId={""}
        onCreateNewConversation={() => {}}
        onConversationSelect={() => {}}
        onContactInfo={() => {}}
        onDeleteConversation={() => {}}
      />
    </>
  );
};

export default HomePage;
