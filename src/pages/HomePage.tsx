import ChatMe from "@/components/ChatMe";
import {
  mockContacts,
  mockConversations,
  mockMessages,
} from "@/tests/mock-data";
import {
  deleteConversation,
  createNewConversation,
} from "@/tests/mock-functions";

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
        onCreateNewConversation={(contact, conversation) => {
          createNewConversation(contact, conversation);
        }}
        onConversationSelect={() => {}}
        onContactInfo={() => {}}
        onDeleteConversation={(conversation) => {
          deleteConversation(conversation);
        }}
        onMessageSent={(message) => {
          console.log("onMessageSent", message);
        }}
      />
    </>
  );
};

export default HomePage;
