import { useState } from "react";
import ChatWindowHeader from "./ChatWindowHeader";
import InputReplyField from "./MessageInputField";
import ChatContentItem from "./ChatContentItem";

export default function ChatWindow() {
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className="h-full max-h-full w-full max-w-full bg-white rounded-xl p-6 flex flex-col gap-4">
        <ChatWindowHeader />
        <div className="flex-1 bg-white max-h-[70vh] overflow-y-auto flex flex-col gap-4 px-2">
          <ChatContentItem isMe={false} message={"Halo, ada yang bisa dibantu?"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={false} message={"Halo, ada yang bisa dibantu?"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
          <ChatContentItem isMe={true} message={"Halo, bisa nih"} />
        </div>
        <InputReplyField message={message} setMessage={setMessage} />
      </div>
    </>
  );
}
