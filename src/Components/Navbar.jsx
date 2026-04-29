"use client";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav
      className="w-full px-8 py-4 flex items-center justify-between"
      style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", boxShadow: "0 4px 30px rgba(120, 80, 255, 0.3)" }}
    >
      <div className="flex items-center ">
        <Image src="/tiles_icon_svg.svg" alt="TilesGallery" width={160} height={55} />
        <span
          className="text-2xl font-extrabold tracking-wide"
          style={{
            background: "linear-gradient(to right, #a78bfa, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TilesGallery
        </span>
      </div>

      <div className="flex gap-8 text-sm font-semibold tracking-widest uppercase">
        <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
          Home
        </Link>
        <Link href="/all-tiles" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
          All Tiles
        </Link>
        <Link href="/my-profile" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
          My Profile
        </Link>
      </div>

      <div>
        <Link
          href="/login"
          className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300"
          style={{
            background: "linear-gradient(to right, #7c3aed, #db2777)",
            color: "white",
            boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
