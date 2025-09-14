import { ConversationView, ConversationList } from "@/components/core";
const FullChat = () => {
  return (
    <>
      <ConversationList
        onConversationSelect={() => {}}
        onNewConversation={() => {}}
        refreshTrigger={0}
        onContactInfo={() => {}}
        onDeleteConversation={() => {}}
      />
      <ConversationView />
    </>
  );
};

export default FullChat;
