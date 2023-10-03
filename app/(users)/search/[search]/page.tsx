import React from "react";

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const Search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=${searchTerm}&api_key=${process.env.APi_Key}`
  );

  const data: SearchResult = await res.json();
  return data;
};

// Tem que ser o mesmo nome do folder [search] não pode ser outro nome
const SearchResultPage = async ({ params }: { params: { search: string } }) => {
  const searchResults: SearchResult = await Search(params.search);
  return (
    <div>
      <p className="text-grey-500 text-sm">You search for: {params.search}</p>

      <ol className="spave-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResultPage;
