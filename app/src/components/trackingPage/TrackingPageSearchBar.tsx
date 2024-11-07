import React, { useState } from 'react'

export default function TrackingPageSearchBar() {
    const [searchQuery, setSearchQuery] = useState<string>("");


  return (
    <>
      <div className="px-4 py-1 rounded-full w-2/5 border border-solid border-gray flex items-center bg-white">
        <img className="size-6" src="/search_icon.svg" alt="search icon" />
        <input
          className="bg-white border-none focus:outline-none w-full"
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
  )
}
