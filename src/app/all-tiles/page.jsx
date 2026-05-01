"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTiles = async () => {
      const res = await fetch("http://localhost:5000/tiles");
      const data = await res.json();
      setTiles(data);
      setLoading(false);
    };
    fetchTiles();
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Search Bar */}
      <div
        className="py-12 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">All Tiles</h1>
        <p className="text-white opacity-60 mb-6">Explore our premium collection</p>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search tiles by title..."
            className="input w-full pl-5 pr-12 py-3 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {/* No Result */}
        {!loading && filteredTiles.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-2xl">😔 No tiles found</p>
            <p className="text-sm mt-2">Try a different search term</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ✅ আলাদা Component
const TileCard = ({ tile }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200">
      {/* Image */}
      <figure className="relative">
        <img
          src={tile.image}
          alt={tile.title}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 right-2 badge badge-sm text-white ${
            tile.inStock ? "badge-success" : "badge-error"
          }`}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-base">{tile.title}</h2>
        <p className="text-xs text-gray-400">{tile.dimensions}</p>
        <p className="text-primary font-bold text-lg">
          ${tile.price}{" "}
          <span className="text-xs text-gray-400">{tile.currency}</span>
        </p>
        <div className="card-actions mt-2">
          <Link
            href={`/tile/${tile.id}`}
            className="btn btn-neutral btn-sm w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
