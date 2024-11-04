import { useState } from "react";
import MessagesSearchBar from "../chatBrowser/MessagesSearchBar";
import { dummyChatItems } from "../../../typesEnumsInterfaces/dummyChatItems";
import ChatItem, { ChatItemProps } from "./ChatItem";

export default function ChatBrowser() {
  const [chatItemsData, setChatItemsData] =
    useState<ChatItemProps[]>(dummyChatItems);

  return (
    <>
      <div className="h-full max-h-full w-[30%] bg-white rounded-xl p-4 flex flex-col gap-4">
        <h2>Pesan</h2>
        <MessagesSearchBar />
        {/* divider */}
        <span className="divider" />
        {chatItemsData.map((chatItem) => {
          return (
            <ChatItem
              key={chatItem.chatId}
              chatId={chatItem.chatId}
              userImage={chatItem.userImage}
              userName={chatItem.userName}
              lastMessage={chatItem.lastMessage}
              lastMessageTime={chatItem.lastMessageTime}
            />
          );
        })}
      </div>
    </>
  );
}
