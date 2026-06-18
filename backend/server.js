const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/jobs", async (req, res) => {
  // Your job aggregation logic here
  "https://corsproxy.io/?https://himalayas.app/jobs/api";
  const jobs = await fetchAllJobs();
  res.json(jobs);
});

app.listen(5000, () => console.log("Server on port 5000"));
