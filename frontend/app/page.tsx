import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">
          College Discovery Platform
        </h1>

        <p className="text-center text-lg mb-12 text-gray-700">
          Discover, compare, and explore top colleges
          across India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/colleges">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">
                Colleges
              </h2>

              <p>
                Browse colleges with filters, fees,
                ratings, and search.
              </p>
            </div>
          </Link>

          <Link href="/compare">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">
                Compare
              </h2>

              <p>
                Compare colleges side-by-side for
                smarter decisions.
              </p>
            </div>
          </Link>

          <Link href="/colleges/1">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">
                College Details
              </h2>

              <p>
                Explore placements, reviews, and
                courses offered.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
