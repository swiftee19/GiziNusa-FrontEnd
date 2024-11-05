interface ChatContentItemProps {
  isMe: boolean;
  message: string;
}

export default function ChatContentItem({isMe, message}: ChatContentItemProps) {
  return (
    <>
      {!isMe && (
        <div className="w-fit max-w-[50%] bg-primary p-4 flex items-center justify-center rounded-md rounded-bl-none">
          <p className="text-base text-white break-words">
            {message}
          </p>
        </div>
      )}
      {isMe && (
        <div className="ml-auto w-fit  max-w-[50%] bg-lightgray p-4 flex items-center justify-center rounded-md rounded-br-none">
          <p className="text-base text-black break-words">
            {message}
          </p>
        </div>
      )}
    </>
  );
}
