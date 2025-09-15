import ChatMe from "@/components/ChatMe";
import {
  mockContacts,
  mockConversations,
  mockMessages,
} from "@/tests/mock-data";
import { deleteConversation } from "@/tests/mock-functions";

// TESTING ONLY!!!
const HomePage = () => {
  return (
    <>
      <ChatMe
        contacts={mockContacts}
        conversations={mockConversations}
        messages={mockMessages}
        onInit={() => {
          console.log("onInit");
        }}
        conversationId={""}
        onCreateNewConversation={() => {}}
        onConversationSelect={() => {}}
        onContactInfo={() => {}}
        onDeleteConversation={(conversation) => {
          deleteConversation(conversation);
        }}
      />
    </>
  );
};

export default HomePage;
