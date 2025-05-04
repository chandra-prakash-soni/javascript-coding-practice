import React, { useEffect, useState } from "react";

export function App() {
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (debounceSearch) {
      console.log(debounceSearch);
    }
  }, [debounceSearch]);
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </>
  );
}
