export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 h-40 animate-pulse rounded-3xl bg-white/5" />

      <div className="space-y-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded-xl bg-white/5"
          />
        ))}
      </div>
    </main>
  );
}