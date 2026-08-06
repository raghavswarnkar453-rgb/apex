export const TEAM_COLORS: Record<string, string> = {
  mclaren: "#FF8000",
  ferrari: "#DC0000",
  mercedes: "#27F4D2",
  red_bull: "#3671C6",
  williams: "#005AFF",
  aston_martin: "#229971",
  alpine: "#0090FF",
  haas: "#B6BABD",
  rb: "#6692FF",
  audi: "#8A8A8A",
  cadillac: "#6A3D9A",
};

export function getTeamColor(
  id: string
) {
  return (
    TEAM_COLORS[id] ??
    "#EF4444"
  );
}