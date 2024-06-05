import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Handcrafted Haven</h1>
        <p className="text-lg mb-8">Explore the best handmade products by our artisans.</p>
        <Link href="/handcrafted-haven">
          <button className="bg-golden rounded-md px-10 py-2 mt-10 hover:bg-[#F7BE38]/60">
            Go to the Store
          </button>
        </Link>
      </div>
    </main>
  );
}
