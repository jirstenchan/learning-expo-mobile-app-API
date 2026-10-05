import Link from "next/link";

export default function Home() {
  return (
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold">Chan Tindahan</h1>
      <p className="mt-4 text-xl">hi project ni</p>
      <Link href="/customers" className="mt-6 inline-block underline">
        View customers
      </Link>
    </main>
  );
}
