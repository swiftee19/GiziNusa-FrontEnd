import ChatBrowser from "../components/messagesPage/chatBrowser/ChatBrowser";
import ChatWindow from "../components/messagesPage/chatWindow/ChatWindow";

export default function MessagesPage() {
  return (
    <>
      <div className="w-full h-full flex items-center gap-4 px-4 py-8">
        <ChatBrowser />
        <ChatWindow />
      </div>
    </>
  );
}
