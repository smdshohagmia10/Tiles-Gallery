import Link from "next/link";

const AllTilesPage = async () => {
  const res = await fetch("https://tiles-gallery-eta.vercel.app/data.json");
  const data = await res.json();
  const tiles = data.tiles;

  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {tiles.map((tile) => (
        <div key={tile.id} className="card bg-base-100 shadow-md border border-base-200">
          <figure>
            <img src={tile.image}
              alt={tile.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-base">{tile.title}</h2>
            <p className="text-xs text-gray-400">{tile.dimensions}</p>
            <p className="text-primary font-bold">${tile.price}</p>
            <div className="card-actions mt-2">
              <Link href={`/tile/${tile.id}` } >View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTilesPage;
