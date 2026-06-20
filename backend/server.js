const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let cachedJobs = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000;

app.get("/api/jobs", async (req, res) => {
  // Your job aggregation logic here

  const now = Date.now();

  if (cachedJobs && now - lastFetchTime < CACHE_DURATION) {
    // Cache is fresh! Return stored data immediately.
    console.log("Using cached data");
    return res.json(cachedJobs);
  }

  console.log("Fetching fresh data...");

  const [himalayasRes, arbeitnowRes] = await Promise.all([
    fetch(
      "https://cors-proxy.xdmohammad83.workers.dev/?target=https://himalayas.app/jobs/api",
    ),
    fetch(
      "https://cors-proxy.xdmohammad83.workers.dev/?target=https://www.arbeitnow.com/api/job-board-api",
    ),
  ]);

  const himalayas = await himalayasRes.json();
  const arbeitnow = await arbeitnowRes.json();

  const data = [himalayas, arbeitnow];
  cachedJobs = data;
  lastFetchTime = now;

  res.json(data);
});

app.listen(5000, () => console.log("Server on port 5000"));
