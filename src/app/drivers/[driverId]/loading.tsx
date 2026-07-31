export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl animate-pulse space-y-10 px-6 py-32">

      <div className="h-72 rounded-3xl bg-white/5 animate-pulse" />

      <div className="grid gap-6 md:grid-cols-2">

        {Array.from({ length: 8 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-28 rounded-2xl bg-white/5"
            />
          )
        )}

      </div>

    </main>
  );
}