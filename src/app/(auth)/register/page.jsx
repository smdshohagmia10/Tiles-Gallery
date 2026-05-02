"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;
    const{data,error}= await authClient.signUp.email({
      name,
      email,
      photoUrl,
      password,

    })
    console.log(data, error)
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <div className="w-full max-w-md p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {/* Title */}
        <div className="text-center">
          <h1
            className="text-3xl font-extrabold tracking-wide"
            style={{ background: "linear-gradient(to right, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Create Account
          </h1>
          <p className="text-gray-400 text-sm mt-2">Register to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
             
              required
              className="w-full px-4 py-3 rounded-xl mb-4 text-white outline-none"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 rounded-xl mb-4 text-white outline-none"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Photo URL</label>
            <input
              type="url"
              name="photoUrl"
              placeholder="https://example.com/photo.jpg"

              className="w-full px-4 py-3 rounded-xl mb-4 text-white outline-none"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-xs font-semibold tracking-widest uppercase">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              className="w-full px-4 py-3 rounded-xl mb-4 text-white outline-none"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(124,58,237,0.3)",
              }}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300  mt-2"
            style={{
              background: "linear-gradient(to right, #7c3aed, #db2777)",
              color: "white",
              boxShadow: "0 0 20px rgba(124,58,237,0.4)",
            }}
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.3)" }} />
          <span className="text-gray-500 text-xs">OR</span>
          <div className="flex-1 h-px" style={{ background: "rgba(124,58,237,0.3)" }} />
        </div>

        {/* Google Button */}
        <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-black border-none w-full py-3 my-2">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold" style={{ color: "#a855f7" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
