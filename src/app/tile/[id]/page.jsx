import Link from "next/link";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://tiles-gallery-eta.vercel.app/data.json");
  const data = await res.json();
  const tile = data.tiles.find((t) => t.id === id);
  return (
     <div className="min-h-screen bg-gray-100 px-6 py-8">

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto text-sm text-gray-400 mb-6">
        Home &gt; All Tiles &gt;{" "}
        <span className="text-gray-600">{tile.title}</span>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8">

        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-[380px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-4">

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            {tile.title}
          </h1>

          {/* Price + Stock */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-yellow-600">
              ${tile.price} <span className="text-sm text-gray-400">USD</span>
            </span>

            {tile.inStock && (
              <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full font-semibold">
                In Stock
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {tile.description}
          </p>

          {/* Specs */}
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Dimensions</span>
              <span className="text-gray-700">{tile.dimensions}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Material</span>
              <span className="text-gray-700">{tile.material}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Category</span>
              <span className="text-gray-700">{tile.category}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Style</span>
              <span className="text-gray-700">{tile.style}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Finish</span>
              <span className="text-gray-700">{tile.finish}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap pt-2">
            {tile.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Created By */}
          <div className="text-sm text-gray-400 pt-2">
            Created By <span className="text-gray-600">TileGallery Team</span>
          </div>

          {/* Back Button */}
          <Link
            href="/all-tiles"
            className="mt-4 w-fit px-5 py-2 rounded-lg text-sm font-medium text-white bg-gray-900 hover:bg-gray-800"
          >
            Back
          </Link>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
