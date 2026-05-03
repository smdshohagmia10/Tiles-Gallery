import SearchBox from "./SearchBox"; // ← uncomment + correct path

const AllTilesPage = async () => {
  const res = await fetch("https://tiles-gallery-eta.vercel.app/data.json");
  const data = await res.json();
  const tiles = data.tiles;

  return <SearchBox tiles={tiles} />;
};

export default AllTilesPage;