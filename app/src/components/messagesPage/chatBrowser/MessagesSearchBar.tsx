import { useState } from "react";

export default function MessagesSearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <div className="p-3 rounded-md w-full flex items-center bg-lightgray">
        <img className="size-6" src="/search_icon.svg" alt="search icon" />
        <input
          className="border-none focus:outline-none w-full bg-lightgray text-base"
          value={searchQuery}
          placeholder="Search"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
        />
      </div>
    </>
  );
}
