import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function JobPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const decodedId = decodeURIComponent(jobId);

    fetch("https://corsproxy.io/?https://himalayas.app/jobs/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const foundJob = data.jobs.find((j) => j.guid === decodedId);
        setJob(foundJob);
        setIsLoading(false);
      });
  }, [jobId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" w-full flex flex-col pt-4 h-full bg-gray-900">
      <div>
        <h2 className="leading-15 mx-4 p-2 border-3 text- border-blue-950 rounded-2xl text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite]">
          {job?.title}
        </h2>
      </div>
      <button
        className="pt-3 px-2 -end bg-purple-900 rounded-2xl border-3 mx-5 my-5 max-w-5/12 items-center
        hover:scale-105 active:border-white active:duration-0 active:border-6 text-white  pb-4 text-1xl border-blue-950 duration-150 cursor-pointer"
        onClick={() => window.open(job.applicationLink)}
      >
        Apply now
      </button>
      <p className="ml-3 text-4xl text-white items-start">Description</p>
      <div
        className="text-white p-5"
        dangerouslySetInnerHTML={{ __html: job?.description || "" }}
      />
    </div>
  );
}
