import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-zinc-400">
        Driver not found.
      </p>

      <Link
        href="/drivers"
        className="mt-8 rounded-xl border border-red-500/30 px-6 py-3 transition hover:bg-red-500/10"
      >
        Back to Drivers
      </Link>
    </main>
  );
}