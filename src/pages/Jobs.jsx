import { useEffect, useState } from "react";
import { Job } from "../components/Job";

export function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        "https://corsproxy.io/?https://himalayas.app/jobs/api",
      );
      const data = await response.json();
      setJobs(data.jobs);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  return (
    <div
      className="
     flex flex-col 
    sm:grid sm:grid-cols-2 gap-1 justify-items-center items-center lg:grid-cols-3 xl:grid-cols-4
    overflow-y-auto
    scrollbar-none
    bg-gray-900
    "
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <h1 className="text-red-600 animate-pulse">Loading...</h1>
        </div>
      ) : (
        jobs.map((job) => <Job key={job.pubDate} job={job} />)
      )}
    </div>
  );
}

/* 
applicationLink: "https://himalayas.app/companies/stewart/jobs/commercial-title-examiner-ca-experience-required"

categories: (11) ['Platform-Engineering', 'Cloud-Engineering', 'Software-Engineering', 'DevOps-Engineering', 'Product-Development', 'Principal-Platform-Engineer', 'Software-Platform-Engineer', 'Senior-Platform-Engineer', 'Principal-Software-Engineer', 'Platform-Engineer', 'Software-Engineer']

companyLogo: "thumbnail_url"

companyName: "name"

companySlug: "oracle"

currency: null

employmentType: "Full Time"

excerpt: "Spectra Platform team at Oracle is building a cloud-native platform for the Fusion Applications that operates at a large scale in a broadly distributed multi-tenant SaaS cloud environment."

expiryDate: 1786773584

guid: "https://himalayas.app/companies/oracle/jobs/principal-platform-software-engineer"

locationRestrictions: ['United States']

maxSalary: null

minSalary: null

parentCategories: ['Developer']

pubDate: 1781589585

salaryPeriod: "annual"

seniority: ['Senior']

timezoneRestrictions: (7) [-10, -9, -8, -7, -6, -5, 14]
title: "Principal Platform Software Engineer"
*/
