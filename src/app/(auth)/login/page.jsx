"use client";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <div className="w-full max-w-md p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-1">Welcome Back</h1>
        <p className="text-center text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          Please enter your details to sign in.
        </p>

        {/* Email */}
        <label className="block text-sm font-medium text-white mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-xl mb-4 text-white outline-none"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-sm font-medium text-white mb-1">Password</label>
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-3 rounded-xl text-white outline-none pr-12"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm" style={{ accentColor: "#a855f7" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Remember Me
            </span>
          </label>
          <a href="#" className="text-sm font-medium" style={{ color: "#a855f7" }}>
            Forgot Password
          </a>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleLogin}className="w-full py-3 rounded-xl font-semibold text-white text-base mb-4"style={{ background: "linear-gradient(to right, #ec4899, #a855f7)" }}>
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.15)" }}></div>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            OR
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.15)" }}></div>
        </div>

        {/* Google Button */}
        <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-black border-none w-full py-3 my-2">
          <svg  aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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

        {/* Register Link */}
        <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold" style={{ color: "#a855f7" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
