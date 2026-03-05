import React from "react";
import { useStore } from "../store/useStore.js";

function SearchBar() {
const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  
  return (
   <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search by title or genre..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
