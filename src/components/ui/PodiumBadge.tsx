interface PodiumBadgeProps {
  position: string;
}

export default function PodiumBadge({
  position,
}: PodiumBadgeProps) {
  const variant =
    position === "1"
      ? {
          bg: "bg-yellow-500/15",
          border: "border-yellow-400/30",
          text: "text-yellow-300",
          shadow:
            "shadow-[0_0_18px_rgba(250,204,21,0.20)]",
        }
      : position === "2"
      ? {
          bg: "bg-zinc-300/10",
          border: "border-zinc-300/30",
          text: "text-zinc-200",
          shadow:
            "shadow-[0_0_18px_rgba(212,212,216,0.18)]",
        }
      : {
          bg: "bg-amber-700/15",
          border: "border-amber-700/30",
          text: "text-amber-400",
          shadow:
            "shadow-[0_0_18px_rgba(180,83,9,0.18)]",
        };

  return (
    <span
      className={[
        "inline-flex",
        "h-8",
        "w-8",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "text-sm",
        "font-bold",
        variant.bg,
        variant.border,
        variant.text,
        variant.shadow,
      ].join(" ")}
    >
      {position}
    </span>
  );
}