import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApplyButton } from "../components/ApplyButton";

export function JobPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const decodedId = decodeURIComponent(jobId);

    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);

        const himalayasJobs = datas[0]?.jobs || [];
        const arbeitnowJobs = datas[1]?.data || [];

        const foundJob =
          himalayasJobs.find((j) => j.guid === decodedId) ||
          arbeitnowJobs.find((j) => j.slug === decodedId);

        setJob(foundJob);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
        setIsLoading(false);
      });
  }, [jobId]);

  console.log(job);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" w-full flex flex-col pt-4 h-full bg-gray-900">
      <div>
        <h2 className="leading-15 mx-4 p-2 border-3 text- border-blue-950 rounded-2xl text-4xl sm:text-4xlm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite]">
          {job?.title}
        </h2>
      </div>

      <ApplyButton job={job} />

      <p className="ml-3 text-4xl text-white items-start">Description</p>

      <div
        className="text-white p-5"
        dangerouslySetInnerHTML={{ __html: job?.description || "" }}
      />
      {console.log(job)}
      <ApplyButton job={job} />
    </div>
  );
}
