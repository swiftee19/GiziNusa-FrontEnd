import { useRef } from "react";

interface MessageInputField {
  message: string;
  setMessage: (message: string) => void;
}

export default function MessageInputField({
  message,
  setMessage,
}: MessageInputField) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    console.log("Message sent: ", message);

    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0]; // Get the first file selected
      console.log("File selected: ", file);
    }
  };

  return (
    <div className="mt-auto w-full rounded-md bg-lightgray py-4 px-6 flex items-center gap-4">
      <img
        className="size-6 hover:cursor-pointer"
        src="/messagesPage/clip_icon.svg"
        alt="paperclip icon"
        onClick={() => openFilePicker()}
      />
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <input
        className="bg-lightgray border-none focus:outline-none text-base flex-1"
        type="text"
        value={message}
        placeholder="Start typing..."
        onChange={(e) => {
          e.preventDefault();
          setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <img
        className="size-8 hover:cursor-pointer"
        src="/messagesPage/send_icon.svg"
        alt="paperclip icon"
        onClick={() => sendMessage()}
      />
    </div>
  );
}
