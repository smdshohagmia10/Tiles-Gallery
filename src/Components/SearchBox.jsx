"use client";
import { useState } from "react";
import Link from "next/link";

export default function SearchBox({ tiles }) {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search tiles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          onKeyDown={handleKeyDown}
          className="input input-bordered w-full max-w-md"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {searchTerm && (
        <p className="text-sm text-gray-400 mb-4">
          {filtered.length} tile{filtered.length !== 1 ? "s" : ""} found for "{searchTerm}"
        </p>
      )}

      {searchTerm && filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No tiles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(searchTerm ? filtered : tiles).map((tile) => (
            <div
              key={tile.id} 
              className="card bg-base-100 shadow-md border border-base-200"
            >
              <figure>
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base">{tile.title}</h2>
                <p className="text-xs text-gray-400">{tile.dimensions}</p>
                <p className="text-primary font-bold">${tile.price}</p>
                <div className="card-actions mt-2">
                  <Link href={`/tile/${tile.id}`}>View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}