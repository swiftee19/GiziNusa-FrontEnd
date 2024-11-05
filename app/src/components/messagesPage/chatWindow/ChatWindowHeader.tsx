export default function ChatWindowHeader() {
  return (
    <>
      <div className="w-full flex items-center gap-4">
        <img className="size-10 rounded-full object-contain" src="/GiziNusa_icon.svg" alt="user profile" />
        <div className="flex flex-col h-full justify-start">
            <h3 className="text-lg font-normal">John Doe</h3>
            <p className="text-gray">Online</p>
        </div>
      </div>
    </>
  );
}
