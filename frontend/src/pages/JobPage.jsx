import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApplyButton } from "../components/ApplyButton";
import { fetchJobsData } from "../api";

export function JobPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const decodedId = decodeURIComponent(jobId);

    const fetchJobs = async () => {
      const data = await fetchJobsData();

      console.log(data);

      const foundJob = data.find((j) => j.id === decodedId) || "";

      setJob(foundJob);

      setIsLoading(false);
    };

    fetchJobs();
  }, [jobId]);

  console.log(job);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" w-full flex flex-col pt-4 h-full bg-brand-background">
      <div>
        <h2 className="leading-15 mx-4 p-2  rounded-2xl text-4xl sm:text-4xlm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-primary/20 to-brand-primary bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite]">
          {job?.title}
        </h2>
      </div>

      <ApplyButton job={job} />

      <p className="ml-3 text-4xl text-brand-text items-start">Description</p>

      <div
        className="text-brand-text p-5"
        dangerouslySetInnerHTML={{ __html: job?.description || "" }}
      />
      {console.log(job)}
      <ApplyButton job={job} />
    </div>
  );
}
