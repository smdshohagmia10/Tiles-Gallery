"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const session = await authClient.getSession();
      if (!session?.data?.user) {
        router.push("/login");
      } else {
        setName(session.data.user.name || "");
        setImage(session.data.user.image || "");
      }
    };
    getSession();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    setLoading(false);
    if (error) {
      alert("Update failed!");
    } else {
      alert("Profile updated successfully!");
      router.push("/my-profile");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl flex flex-col gap-6"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(124,58,237,0.3)",
          boxShadow: "0 8px 32px rgba(124,58,237,0.2)",
        }}
      >
        {/* Title */}
        <div className="text-center">
          <h1
            className="text-3xl font-extrabold tracking-wide"
            style={{
              background: "linear-gradient(to right, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Update Profile
          </h1>
          <p className="text-gray-400 text-sm mt-2">Change your name or photo</p>
        </div>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
              Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-purple-500"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Preview */}
          {image && (
            <div className="flex items-center gap-3">
              <img
                src={image}
                alt="Preview"
                className="w-12 h-12 rounded-full object-cover border-2"
                style={{ borderColor: "#7c3aed" }}
              />
              <span className="text-gray-400 text-xs">Image Preview</span>
            </div>
          )}

          {/* Update Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 mt-2"
            style={{
              background: "linear-gradient(to right, #7c3aed, #db2777)",
              color: "white",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Updating..." : "Update Information"}
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => router.push("/my-profile")}
            className="w-full py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a78bfa",
            }}
          >
            Back to Profile
          </button>
        </form>
      </div>
    </div>
  );
}