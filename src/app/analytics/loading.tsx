export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">

      <div className="mb-12 h-40 animate-pulse rounded-3xl bg-white/5" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-3xl bg-white/5"
          />
        ))}

      </div>

    </main>
  );
}