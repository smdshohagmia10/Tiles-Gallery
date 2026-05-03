"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function MyProfile() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const session = await authClient.getSession();
      if (!session?.data?.user) {
        router.push("/login");
      } else {
        setUser(session.data.user);
      }
    };
    getSession();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
        <span className="text-white text-lg">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12"
      style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <div className="max-w-md mx-auto">

        {/* Card */}
        <div className="rounded-2xl p-8 flex flex-col items-center gap-6"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 8px 32px rgba(124,58,237,0.2)",
          }}>

          {/* Profile Photo */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-4"
            style={{ borderColor: "#7c3aed" }}>
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold"
                style={{ background: "linear-gradient(to right, #7c3aed, #db2777)", color: "white" }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Name */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white">{user.name}</h1>
            <p className="text-gray-400 text-sm mt-1">{user.email}</p>
          </div>

          <div className="w-full border-t" style={{ borderColor: "rgba(124,58,237,0.2)" }} />

          {/* Info */}
          <div className="w-full flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span className="text-white font-medium">{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="text-white font-medium">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Account</span>
              <span className="text-green-400 font-medium">Active</span>
            </div>
          </div>

          {/* Update Button */}
          <Link
            href="/my-profile/update"
            className="w-full text-center py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(to right, #7c3aed, #db2777)",
              color: "white",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
            }}
          >
            Update Profile
          </Link>

          {/* Logout Button */}
          <button
            onClick={async () => {
              await authClient.signOut();
              router.push("/login");
            }}
            className="w-full py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#f472b6",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}