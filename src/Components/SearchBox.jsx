"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("q") || "");
    const [focused, setFocused] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (search.trim()) {
            params.set("q", search.trim());
        } else {
            params.delete("q");
        }
        router.push(`/allTiles?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border bg-white transition-all duration-200 mx-2 mb-6 ${
                focused
                    ? "border-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]"
                    : "border-gray-200"
            }`}
        >
            <svg
                className={`w-5 h-5 shrink-0 transition-colors ${focused ? "text-emerald-500" : "text-gray-400"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
                type="text"
                placeholder="Search tiles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />

            {search && (
                <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                        <line x1="1" y1="1" x2="11" y2="11" />
                        <line x1="11" y1="1" x2="1" y2="11" />
                    </svg>
                </button>
            )}

            <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-1.5 rounded-xl transition-colors shrink-0"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBox;