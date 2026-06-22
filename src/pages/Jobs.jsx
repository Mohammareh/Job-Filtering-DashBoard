import { useEffect, useState } from "react";
import { Job } from "../components/Job";
import { fetchJobsData } from "../api";
import { SearchForJobs } from "../components/SearchForJobs";
import { useParams } from "react-router-dom";

export function Jobs() {
  const { searched } = useParams();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await fetchJobsData();

      setJobs(data);
      setFilteredJobs(data);
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    setSearchQuery(searched);
    console.log(searched);
    console.log(searchQuery);
  }, []);

  const filterJobs = (query) => {
    // If nothing typed, show all jobs
    if (!query || query.trim() === "") {
      return jobs;
    }
    // Convert query to lowercase for case-insensitive matching
    const lowerQuery = query.toLowerCase();

    return jobs.filter((job) => {
      // Check if ANY of these fields contain the search term
      const titleMatch = job.title?.toLowerCase().includes(lowerQuery);
      const companyMatch = job.companyName?.toLowerCase().includes(lowerQuery);
      const descriptionMatch = job.description
        ?.toLowerCase()
        .includes(lowerQuery);

      return titleMatch || companyMatch || descriptionMatch;
    });
  };

  useEffect(() => {
    // Debounce timer
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredJobs(jobs);
      } else {
        const results = filterJobs(searchQuery);
        setFilteredJobs(results);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, jobs]);

  return (
    <div
      className="
     flex flex-col overflow-x-hidden h-[85vh]
    sm:grid sm:grid-cols-2 gap-1 justify-items-center items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    overflow-y-auto
    scrollbar-none
    bg-linear-to-r from-brand-background to-brand-secondary
   
    "
    >
      {isLoading ? (
        <div className="flex items-center h-[85vh] justify-center">
          <h1 className="text-red-600 animate-pulse">Loading...</h1>
        </div>
      ) : (
        <>
          <SearchForJobs
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          {filteredJobs.length !== 0 ? (
            filteredJobs.map((job) => <Job key={job.id} job={job} />)
          ) : (
            <p className="text-brand-text h-full">
              No job found, try change your sentence for better results
            </p>
          )}
        </>
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
