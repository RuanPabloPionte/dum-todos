"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Escreva algo"
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
