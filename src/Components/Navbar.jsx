"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const links = 
    <>
      <li>
        <Link href="/" className="text-gray-300 hover:text-purple-400 font-semibold tracking-widest uppercase text-xs">
          Home
        </Link>
      </li>
      <li>
        <Link href="/all-tiles" className="text-gray-300 hover:text-purple-400 font-semibold tracking-widest uppercase text-xs">
          All Tiles
        </Link>
      </li>
      <li>
        <Link href="/my-profile" className="text-gray-300 hover:text-purple-400 font-semibold tracking-widest uppercase text-xs">
          My Profile
        </Link>
      </li>
    </>

      const { data: session , isPending } = authClient.useSession()
    const userData = session?.user;
    console.log(userData)



  return (
    <div
      className="navbar sticky top-0 z-40 px-6"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        boxShadow: "0 4px 30px rgba(120, 80, 255, 0.3)",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 rounded-box z-50 shadow-lg"
            style={{ background: "#1a1035", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            {links}
            <li className="mt-2">
              <Link
                href="/login"
                className="font-bold text-xs tracking-widest uppercase text-white"
                style={{
                  background: "linear-gradient(to right, #7c3aed, #db2777)",
                  borderRadius: "999px",
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <span className="text-2xl">💠</span>
          <span
            className="text-xl font-extrabold tracking-wide"
            style={{
              background: "linear-gradient(to right, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TilesGallery
          </span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end">
        {isPending ? 
          <span className="loading loading-dots loading-xl"></span>
        : userData ? (
          <div className="space-x-3">
            <button onClick={async () => await authClient.signOut()} className="btn btn-error text-base-300 font-semibold">
              Logout
              <IoLogOutOutline />
            </button>
          </div>
        ) : (
          <Link href={"/login"} className="btn btn-primary  font-semibold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
