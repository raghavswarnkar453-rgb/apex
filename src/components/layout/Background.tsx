export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#090909]" />

      {/* Red Ambient Glow */}
      <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[140px]" />

      {/* Cyan Telemetry Glow */}
      <div className="absolute bottom-[-15%] right-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-400/8 blur-[160px]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}