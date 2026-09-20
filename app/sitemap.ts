import type { MetadataRoute } from "next";

const paths = [
  "",
  "/finals",
  "/cities/istanbul",
  "/cities/madrid",
  "/cities/frankfurt",
  "/finals/spanish-super-cup-istanbul-2027",
  "/finals/conference-league-final-istanbul-2027",
  "/finals/champions-league-final-madrid-2027",
  "/finals/europa-league-final-frankfurt-2027",
  "/cities/istanbul/where-to-stay",
  "/cities/istanbul/airports-and-transport",
  "/cities/madrid/where-to-stay",
  "/cities/madrid/airport-to-estadio-metropolitano",
  "/cities/frankfurt/where-to-stay",
  "/cities/frankfurt/airport-to-stadion-frankfurt",
  "/stadiums/chobani-stadium",
  "/stadiums/tupras-stadium",
  "/stadiums/rams-park",
  "/stadiums/estadio-metropolitano",
  "/stadiums/stadion-frankfurt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.map((path, index) => ({
    url: "https://finalsatlas.com" + path,
    lastModified,
    changeFrequency: "weekly" as const,
    priority:
      index === 0
        ? 1
        : path === "/finals"
          ? 0.95
          : path.startsWith("/finals/")
            ? 0.9
            : path.includes("/where-to-stay") || path.includes("/airport")
              ? 0.88
              : path.startsWith("/cities/")
                ? 0.85
                : 0.8,
  }));
}
