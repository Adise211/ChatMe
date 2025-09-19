import ChatMe from "@/components/ChatMe";
import {
  mockContacts,
  mockConversations,
  mockMessages,
} from "@/tests/mock-data";
import {
  deleteConversation,
  createNewConversation,
  sendMessage,
} from "@/tests/mock-functions";

interface HomePageProps {
  isMobileView: boolean;
}

// TESTING ONLY!!!
const HomePage = ({ isMobileView }: HomePageProps) => {
  return (
    <>
      <ChatMe
        contacts={mockContacts}
        conversations={mockConversations}
        messages={mockMessages}
        isMobileView={isMobileView}
        onInit={() => {
          console.log("onInit");
        }}
        onCreateNewConversation={(contact, conversation) => {
          createNewConversation(contact, conversation);
        }}
        onConversationSelect={() => {}}
        onContactInfo={() => {}}
        onDeleteConversation={(conversation) => {
          deleteConversation(conversation);
        }}
        onMessageSent={(message, conversationId) => {
          console.log("onMessageSent", message, conversationId);
          sendMessage(message, conversationId);
        }}
      />
    </>
  );
};

export default HomePage;
