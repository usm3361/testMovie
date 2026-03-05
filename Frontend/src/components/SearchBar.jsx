import React from "react";
import { useStore } from "../store/useStore.js";

function SearchBar() {
  const setSearchQuery = useStore((s) => s.setSearchQuery);
  return (
    <input
      placeholder="Search movie or genre"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
