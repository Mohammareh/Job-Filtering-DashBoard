import { useCallback, useEffect, useState } from "react";
import { Job } from "../components/Job";
import { fetchJobsData } from "../api";
import { SearchForJobs } from "../components/SearchForJobs";
import { useParams } from "react-router-dom";

export function Jobs() {
  const { searched } = useParams();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searched || "");
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

  const filterJobs = useCallback(
    (query) => {
      if (!query || query.trim() === "") {
        return jobs;
      }
      const lowerQuery = query.toLowerCase();

      return jobs.filter((job) => {
        const titleMatch = job.title?.toLowerCase().includes(lowerQuery);
        const companyMatch = job.companyName
          ?.toLowerCase()
          .includes(lowerQuery);
        const descriptionMatch = job.description
          ?.toLowerCase()
          .includes(lowerQuery);

        return titleMatch || companyMatch || descriptionMatch;
      });
    },
    [jobs],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredJobs(jobs);
      } else {
        const results = filterJobs(searchQuery);
        setFilteredJobs(results);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, jobs, filterJobs]);

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
