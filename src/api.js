let cachedJobs = null;
const REFRESH_TIME = 60 * 5 * 1000;
let lastFetchTime = 0;

export const fetchJobsData = async () => {
  const now = Date.now();

  if (cachedJobs && now - lastFetchTime < REFRESH_TIME) {
    // Cache is fresh. Return stored data immediately.
    return cachedJobs;
  }

  try {
    let responses = [];
    const responsess = await Promise.all([
      fetch(
        "https://cors-proxy.xdmohammad83.workers.dev/?target=https://himalayas.app/jobs/api",
      ),
      fetch(
        "https://cors-proxy.xdmohammad83.workers.dev/?target=https://www.arbeitnow.com/api/job-board-api",
      ),
    ]);

    for (let i = 0; i < responsess.length; i++) {
      const element = responsess[i];
      const data = await element.json();
      responses.push(data);
    }

    const list = responses[0].jobs.map((job) => ({
      id: job.guid || Math.random(),
      title: job.title || null,
      description: job.description || null,
      categories: job.categories || [],
      jobTypes: job.job_types || [],
      applicationLink: job.applicationLink || "/notfound",
      companyName: job.companyName || null,
      companyLogo: job.companyLogo || null,
      currency: job.currency || null,
      slug: job.companySlug || null,
      expiryDate: job.expiryDate || null,
      locationRestrictions: job.locationRestrictions || [],
      maxSalary: job.maxSalary || null,
      minSalary: job.minSalary || null,
      pubDate: job.pubDate || null,
      salaryPeriod: job.salaryPeriod || null,
      seniority: job.seniority || [],
      timezoneRestrictions: job.timezoneRestrictions || [],
      source: "Himalayas",
    }));

    const list2 = responses[1].data.map((job) => ({
      id: job.slug || Math.random(),
      title: job.title || null,
      description: job.description || null,
      categories: job.tags || [],
      jobTypes: job.job_types || [],
      applicationLink: job.url || "/notfound",
      companyName: job.company_name || null,
      companyLogo: job.companyLogo || null,
      currency: job.currency || null,
      slug: job.companySlug || null,
      expiryDate: job.expiryDate || null,
      locationRestrictions: job.location || [],
      remote: job.remote || null,
      maxSalary: job.maxSalary || null,
      minSalary: job.minSalary || null,
      pubDate: job.created_at || null,
      salaryPeriod: job.salaryPeriod || null,
      seniority: job.seniority || [],
      timezoneRestrictions: job.timezoneRestrictions || [],
      source: "arbeitnow",
    }));

    const finalData = [...list, ...list2];
    cachedJobs = finalData;
    lastFetchTime = now;

    return finalData;
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
};

/*

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

  const jobData = {
    id: "",
    title: "",

    applicationLink: "",
    categories: [],
    companyLogo: "",
    companySlug: "",
    currency: "",
    description: "",
    employmentType: "",
    locationRestrictions: [],
    maxSalary: "",
    minSalary: "",
    pubDate: "",
  };

  companyName: "Conceptboard";
  companySlug: "conceptboard";
  currency: null;
  employmentType: "Full Time";
  excerpt: "arbeitsortStuttgart / Remotedeine aufgabenWir suchen Verstärkung für unser Plattform-Team.";
  expiryDate: 1787119496;
  guid: "https://himalayas.app/companies/conceptboard/jobs/senior-cloud-engineer-m-w-d-2081135079";
  locationRestrictions: ["Germany"];
  maxSalary: null;
  minSalary: null;
  parentCategories: [];
  pubDate: 1781935496;
  salaryPeriod: "annual";
  seniority: ["Senior"];
  timezoneRestrictions: [1];
  title: "Senior Cloud Engineer (m/w/d)";

  const data = [himalayas, arbeitnow];
  cachedJobs = data;
  lastFetchTime = now;

  res.json(data);
});

app.listen(5000, () => console.log("Server on port 5000"));
 */
