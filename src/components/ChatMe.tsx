import { ConversationView, ConversationList } from "./core";

interface ChatMeProps {
  conversationId: string;
}

const ChatMe = ({ conversationId }: ChatMeProps) => {
  return (
    <>
      <ConversationList />
      <ConversationView conversationId={conversationId} />
    </>
  );
};

export default ChatMe;
