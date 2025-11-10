import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchHTML(url) {
  const { data } = await axios.get(url, {
    timeout: 10000,
    headers: {
      "User-Agent": "Helpbot-Scraper/1.0 (+http://localhost:5001/scan/website)",
    },
  });
  return data;
}

export function extractLinks(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = [];

  $("a").each((_, el) => {
    const href = $(el).attr("href");
    const title = $(el).text().trim();

    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) return;

    const fullUrl = new URL(href, baseUrl).href;

    links.push({ title: title || "Untitled", url: fullUrl });
  });

  return links;
}

export function normalizeSchema(links, baseUrl) {
  const baseHost = new URL(baseUrl).host;
  const unique = new Map();

  links.forEach(link => {
    try {
      const url = new URL(link.url);
      if (url.host !== baseHost) return; 
      url.search = ""; 

      const key = url.pathname || "/";
      if (!unique.has(key)) {
        unique.set(key, {
          title: link.title || (key === "/" ? "Home" : key.replace("/", "")),
          url: key,
        });
      }
    } catch (err) {
      // skip invalid URLs
    }
  });

  return Array.from(unique.values());
}

export async function scrapeSiteSchema(websiteUrl) {
  try {
    const html = await fetchHTML(websiteUrl);
    const links = extractLinks(html, websiteUrl);
    const schema = normalizeSchema(links, websiteUrl);
    return schema;
  } catch (error) {
    console.error("Scraper error:", error.message);
    throw new Error("Failed to scrape site");
  }
}