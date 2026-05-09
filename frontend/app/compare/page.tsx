"use client";

import { useState } from "react";

const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    fees: "₹2,00,000",
    placement: "95%",
    rating: 4.8,
    location: "Delhi",
  },
  {
    id: 2,
    name: "NIT Trichy",
    fees: "₹1,50,000",
    placement: "90%",
    rating: 4.6,
    location: "Tamil Nadu",
  },
  {
    id: 3,
    name: "BITS Pilani",
    fees: "₹3,00,000",
    placement: "92%",
    rating: 4.7,
    location: "Rajasthan",
  },
];

export default function ComparePage() {
  const [selected1, setSelected1] = useState(colleges[0]);
  const [selected2, setSelected2] = useState(colleges[1]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          className="border p-3 rounded-lg"
          onChange={(e) =>
            setSelected1(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )!
            )
          }
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded-lg"
          onChange={(e) =>
            setSelected2(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )!
            )
          }
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-4">Feature</th>
            <th className="border p-4">
              {selected1.name}
            </th>
            <th className="border p-4">
              {selected2.name}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-4">Fees</td>
            <td className="border p-4">
              {selected1.fees}
            </td>
            <td className="border p-4">
              {selected2.fees}
            </td>
          </tr>

          <tr>
            <td className="border p-4">Placement</td>
            <td className="border p-4">
              {selected1.placement}
            </td>
            <td className="border p-4">
              {selected2.placement}
            </td>
          </tr>

          <tr>
            <td className="border p-4">Rating</td>
            <td className="border p-4">
              ⭐ {selected1.rating}
            </td>
            <td className="border p-4">
              ⭐ {selected2.rating}
            </td>
          </tr>

          <tr>
            <td className="border p-4">Location</td>
            <td className="border p-4">
              {selected1.location}
            </td>
            <td className="border p-4">
              {selected2.location}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
