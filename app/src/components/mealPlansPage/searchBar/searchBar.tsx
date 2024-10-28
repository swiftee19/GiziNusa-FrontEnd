import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <>
      <div className="px-4 py-1 rounded-full w-2/5 border border-solid border-gray flex items-center">
      <img className="size-6" src="/search_icon.svg" alt="search icon"/>
      <input className="bg-offwhite border-none focus:outline-none w-full" value={searchQuery} placeholder="Search for a province here" type="text" onChange={(e)=>{
        e.preventDefault();
        setSearchQuery(e.target.value);
      }} />
      </div>
    </>
  );
}
