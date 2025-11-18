import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Ecom</h1>
      <Link href="/products" className="text-blue-600">
        View Products →
      </Link>
    </div>
  );
}
