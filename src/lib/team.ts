export interface TeamIdentity {
  primary: string;
  secondary: string;
  accent: string;
  logo: string;
}

const TEAM_IDENTITY: Record<string, TeamIdentity> = {
  "red_bull": {
    primary: "#1E41FF",
    secondary: "#0600EF",
    accent: "#FFD700",
    logo: "/teams/red_bull.svg",
  },

  ferrari: {
    primary: "#DC0000",
    secondary: "#8B0000",
    accent: "#FFD700",
    logo: "/teams/ferrari.svg",
  },

  mclaren: {
    primary: "#FF8700",
    secondary: "#CC6B00",
    accent: "#FFFFFF",
    logo: "/teams/mclaren.svg",
  },

  mercedes: {
    primary: "#00D2BE",
    secondary: "#009E8C",
    accent: "#FFFFFF",
    logo: "/teams/mercedes.svg",
  },

  aston_martin: {
    primary: "#006F62",
    secondary: "#004D44",
    accent: "#CEDC00",
    logo: "/teams/aston_martin.svg",
  },

  alpine: {
    primary: "#0090FF",
    secondary: "#0058A3",
    accent: "#FF5DA2",
    logo: "/teams/alpine.svg",
  },

  williams: {
    primary: "#005AFF",
    secondary: "#0038A8",
    accent: "#FFFFFF",
    logo: "/teams/williams.svg",
  },

  haas: {
    primary: "#B6BABD",
    secondary: "#7A7D80",
    accent: "#E10600",
    logo: "/teams/haas.svg",
  },

  rb: {
    primary: "#6692FF",
    secondary: "#3A5FCC",
    accent: "#FFFFFF",
    logo: "/teams/rb.svg",
  },

  sauber: {
    primary: "#52E252",
    secondary: "#2C8C2C",
    accent: "#000000",
    logo: "/teams/sauber.svg",
  },
};

export function getTeamIdentity(
  constructorId: string
): TeamIdentity {
  return (
    TEAM_IDENTITY[constructorId] ?? {
      primary: "#E10600",
      secondary: "#8A0000",
      accent: "#FFFFFF",
      logo: "/teams/default.svg",
    }
  );
}