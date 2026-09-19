import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Final Istanbul",
    short_name: "Final Istanbul",
    description: "Independent guide to Istanbul's biggest events.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
