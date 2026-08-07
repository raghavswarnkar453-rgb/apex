import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APEX",
    short_name: "APEX",
    description: "Premium Formula One Analytics Dashboard",

    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#ef4444",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}