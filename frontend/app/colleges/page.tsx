"use client";

import { useState } from "react";

const allColleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: 200000,
    rating: 4.8,
  },
  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.6,
  },
  {
    id: 3,
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 300000,
    rating: 4.7,
  },
];

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredColleges = allColleges.filter((college) => {
    return (
      college.name.toLowerCase().includes(search.toLowerCase()) &&
      college.location.toLowerCase().includes(location.toLowerCase())
    );
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        College Listing
      </h1>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full"
        />

        <input
          type="text"
          placeholder="Filter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="border p-6 rounded-xl shadow"
          >
            <h2 className="text-2xl font-semibold">
              {college.name}
            </h2>

            <p>{college.location}</p>
            <p>₹ {college.fees}</p>
            <p>⭐ {college.rating}</p>
          </div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <p className="mt-6 text-red-500">
          No colleges found.
        </p>
      )}
    </div>
  );
}
