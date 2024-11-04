export interface ChatItemProps {
  chatId: string;
  userImage: string;
  userName: string;
  lastMessage: string;
  lastMessageTime: Date;
}

export default function ChatItem({
  chatId,
  userImage,
  userName,
  lastMessage,
  lastMessageTime,
}: ChatItemProps) {
  const timeSince = (date: Date) => {
    const now: Date = new Date();
    const differenceInMilliseconds: number = now - date;

    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7)
    );
    const months = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30)
    );

    if (minutes < 1) {
      return "just now";
    } else if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (days < 7) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (weeks < 4) {
      return `over ${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    }
  };

  const lastMessageTimeAgo = timeSince(lastMessageTime);

  return (
    <>
      <div className="w-full px-4 py-2 flex gap-4 items-center">
        <img
          className="size-10 rounded-full object-contain"
          src={userImage}
          alt="user image"
        />
        <div className=" flex flex-col justify-start">
          <h3>{userName}</h3>
          <p className="text-gray truncate max-w-40">{lastMessage}</p>
        </div>
        <p className="ml-auto h-full max-w-28 text-gray text-right text-sm">{lastMessageTimeAgo}</p>
      </div>
    </>
  );
}
