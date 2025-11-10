import { scrapeSiteSchema } from "../utils/scrapper.js";

export async function scanSite(req, res) {
  try {
    const { websiteUrl } = req.body;

    if (!websiteUrl) {
      return res.status(400).json({ error: "Website URL is required" });
    }

    const schema = await scrapeSiteSchema(websiteUrl);

    res.status(200).json({
      success: true,
      schema,
    });
  } catch (error) {
    console.error("Error scraping schema:", error);
    res.status(500).json({ error: "Failed to scrape schema" });
  }
}