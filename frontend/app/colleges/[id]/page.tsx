const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: "₹2,00,000",
    rating: 4.8,
    courses: ["CSE", "ECE", "Mechanical"],
    placements: "95%",
    reviews: [
      "Excellent placements",
      "Great campus life",
    ],
  },
  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: "₹1,50,000",
    rating: 4.6,
    courses: ["CSE", "Civil", "EEE"],
    placements: "90%",
    reviews: [
      "Strong academics",
      "Good hostel facilities",
    ],
  },
];

export default async function CollegeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          College Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="mb-2">
        📍 {college.location}
      </p>

      <p className="mb-2">
        💰 Fees: {college.fees}
      </p>

      <p className="mb-2">
        ⭐ Rating: {college.rating}
      </p>

      <p className="mb-6">
        🎯 Placements: {college.placements}
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Courses Offered
        </h2>

        <ul className="list-disc ml-6">
          {college.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Reviews
        </h2>

        <ul className="list-disc ml-6">
          {college.reviews.map((review) => (
            <li key={review}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
