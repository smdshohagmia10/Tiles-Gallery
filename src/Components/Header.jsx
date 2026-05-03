import Button from "daisyui/components/button";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <main>

        <section className="flex flex-col items-center justify-center text-center px-6 py-6 gap-6">
          <h1
            className="animate__animated animate__bounceOut text-5xl md:text-7xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(to right, #a78bfa, #f472b6, #f6d365)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",}}>
            Discover Your Perfect Aesthetic
          </h1>

          
          <p className=" animate__animated animate__backInLeft text-gray-400 text-lg md:text-xl max-w-xl">
            Explore our premium collection of tiles — from classic ceramics to modern geometric designs.
          </p>
        </section>
             <section className="animate__animated animate__backInLeft mt-2  py-6 flex items-center justify-center rounded-full...">
              <Link href={"/all-tiles"}><button className="btn btn-outline btn-primary">Browser Now</button></Link>
             </section>

        <section
          className="w-full py-4 overflow-hidden"
          style={{ borderTop: "1px solid rgba(124,58,237,0.3)", borderBottom: "1px solid rgba(124,58,237,0.3)" }}
        >
          <div
            className="flex gap-12 text-sm font-semibold tracking-widest uppercase whitespace-nowrap"
            style={{
              animation: "marquee 20s linear infinite",
              color: "#a78bfa",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex gap-12">
                <span>✦ New Arrivals: Ceramic Blue</span>
                <span>✦ Weekly Feature: Modern Geometric Patterns</span>
                <span>✦ Join the Community</span>
                <span>✦ Premium Quality Tiles</span>
                <span>✦ Free Shipping on Orders Over $200</span>
              </span>
            ))}
          </div>
        </section>

        <section className="px-6 py-2 max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Ceramic Blue", category: "Ceramic", price: 45.99, color: "#38bdf8" },
              { id: 2, title: "Marble White", category: "Marble", price: 89.99, color: "#e2e8f0" },
              { id: 3, title: "Geometric Gold", category: "Mosaic", price: 120.0, color: "#f6d365" },
              { id: 4, title: "Obsidian Black", category: "Porcelain", price: 65.0, color: "#1e1e2e" },
            ].map((tile) => (
              <div
                key={tile.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              ></div>
            ))}
          </div>
        </section>

        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
      </main>
    </div>
  );
};

export default Header;
