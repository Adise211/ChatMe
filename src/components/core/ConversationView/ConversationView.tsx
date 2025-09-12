interface ConversationViewProps {
  conversationId: string;
}

const ConversationView = ({ conversationId }: ConversationViewProps) => {
  return (
    <>
      <div>
        <h1>Conversation View</h1>
        <p>{conversationId}</p>
      </div>
    </>
  );
};

export default ConversationView;
