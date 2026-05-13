import type { MetadataRoute } from "next";

const SITE_URL = "https://axlspec.org";

const PATHS = [
  "/",
  "/spec",
  "/spec/v1.0",
  "/conformance",
  "/certification",
  "/certified",
  "/maturity",
  "/trademark",
  "/working-groups",
  "/glossary",
  "/asp-process",
  "/buyers-guide",
  "/tco",
  "/governance",
  "/press",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "/" || path.startsWith("/spec") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/spec/v1.0") ? 0.9 : 0.6,
  }));
}
