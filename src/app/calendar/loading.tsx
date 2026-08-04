export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">

      <div className="mb-16 h-40 animate-pulse rounded-3xl bg-white/5" />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="h-72 animate-pulse rounded-3xl bg-white/5"
          />
        ))}

      </div>

    </main>
  );
}
