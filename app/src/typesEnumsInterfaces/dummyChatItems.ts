import { ChatItemProps } from "../components/messagesPage/chatBrowser/ChatItem"

export const dummyChatItems: ChatItemProps[] = [
    {
        chatId: "1",
        userImage: "/GiziNusa_icon.svg",
        userName: "John Doe",
        lastMessage: "Hello, how are you?",
        lastMessageTime: new Date("2024-01-01T00:00:00Z"),
    },
    {
        chatId: "2",
        userImage: "/GiziNusa_icon.svg",
        userName: "Jane Doe",
        lastMessage: "Hello, how are you?",
        lastMessageTime: new Date("2024-01-01T00:00:00Z"),
    },
    {
        chatId: "3",
        userImage: "/GiziNusa_icon.svg",
        userName: "John Smith",
        lastMessage: "Hello, how are you? Hello Hello Hello",
        lastMessageTime: new Date("2024-11-01T00:00:00Z"),
    },
    {
        chatId: "4",
        userImage: "/GiziNusa_icon.svg",
        userName: "Jane Smith",
        lastMessage: "Hello, how are you?",
        lastMessageTime: new Date("2024-01-01T00:00:00Z"),
    }
]