import { Link } from "react-router-dom";

export function Job({ job }) {
  function handleClick(job) {
    console.log(job.title);
    console.log(job.guid);

    // window.open(job.applicationLink);
  }

  return (
    <Link
      to={`/job/${encodeURIComponent(job.guid)}`}
      key={job.guid}
      onClick={() => handleClick(job)}
      className="
            flex flex-col p-1 scrollbar-none
            w-10/12 min-h-80 m-4 sm:w-11/12
          bg-gray-800 text-white
            hover:scale-105 hover:border-4 hover:bg-blue-950 duration-300
            cursor-pointer text-center
            border-2 border-black rounded-xl
            "
    >
      <div className="flex">
        {job.companyLogo && (
          <span className="relative inline-block h-16 w-16 mb-5 md:mb-8 md:h-20 md:w-20 shrink-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs">
            <img
              alt="Hewlett Packard Enterprise"
              width="80"
              height="80"
              decoding="async"
              data-nimg="1"
              className="items-center absolute h-full w-full rounded-full bg-white border-4 border-white"
              srcSet={job.companyLogo}
              src={job.companyLogo}
            />

            <span className="flex h-full w-full rounded-full bg-gray-50 font-medium text-primary-700"></span>
          </span>
        )}
        {job.companyLogo ? (
          <h2 className="ml-4 text-3xl mt-4">{job.companyName}</h2>
        ) : (
          <div className="flex w-full justify-center">
            <h2 className="ml-4 text-3xl">{job.companyName}</h2>
          </div>
        )}
      </div>

      {/* <img src={job.companyLogo} alt="" /> */}
      <h1 className="text-[1.2rem] ">{job.title}</h1>
      <div className="line-clamp-5" />
      <p className="border-4 border-black p-1 rounded-2xl self-end justify-self-start ml-2 mb-2 "></p>
    </Link>
  );
}
