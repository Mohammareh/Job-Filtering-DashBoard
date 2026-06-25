import { Link } from "react-router-dom";

export function Job({ job }) {
  const ms = job.pubDate ? job.pubDate * 1000 : job.created_at * 1000;
  const pubDate = new Date(ms);
  const now = new Date();

  const diffInMs = now - pubDate;

  const diffInSeconds = Math.floor(diffInMs / 1000);

  const remainingSeconds = diffInSeconds % (365.25 * 24 * 3600);
  const remainingAfterDays = remainingSeconds % (24 * 3600);

  const diffrences = {
    diffrenceInYears: Math.floor(diffInSeconds / (365.25 * 24 * 3600)),
    diffrenceInDays: Math.floor(remainingSeconds / (24 * 3600)),
    diffrenceInHours: Math.floor(remainingAfterDays / 3600),
    diffrenceInMinutes: Math.floor((remainingAfterDays % 3600) / 60),
    diffrenceInSeconds: remainingAfterDays % 60,
  };

  let period =
    job.salaryPeriod === "annual"
      ? "year"
      : job.salaryPeriod === "monthly"
        ? "month"
        : "hour";

  return (
    <Link
      to={`/job/${encodeURIComponent(job.id)}`}
      key={job.id}
      className="flex flex-col p-1 scrollbar-none
           w-11/12 min-h-80 my-4 sm:w-11/12 
           bg-brand-surface text-brand-text
           hover:scale-102 hover:bg-brand-hover duration-100
           sm:text-2xl shadow-brand-primary
           cursor-pointer text-center shadow-[0_0_25px_rgba(0,0,0,0.1)]
           rounded-xl"
    >
      {/* Logo and title */}
      <div className="flex">
        {job.companyLogo ? (
          <>
            <span className="relative inline-block h-16 w-16 mb-3 md:mb-8 md:h-20 md:w-20 shrink-0 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs">
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
            </span>

            <h2 className="ml-4 sm:text-2xl text-xl font-bold mt-4">
              {job.companyName}
            </h2>
          </>
        ) : (
          <div className="flex w-full justify-center">
            <h2 className="ml-4 sm:text-2xl text-xl">{job.companyName}</h2>
          </div>
        )}
      </div>
      <h1 className="sm:text-2xl text-xl ">{job.title}</h1>

      {/* salary info */}
      <div className="mt-auto justify-around flex">
        {job.minSalary && job.maxSalary === job.minSalary ? (
          <p className="p-1 self-end justify-self-start mb-2 ">
            {job.maxSalary} {job.currency} Per {period}
          </p>
        ) : job.maxSalary && job.minSalary ? (
          <p className="p-1 self-end justify-self-start mb-2 ">
            {job.minSalary} - {job.maxSalary} {job.currency || ""} {}
            Per {period}
          </p>
        ) : null}

        {/* Time published */}
        {diffrences["diffrenceInHours"] < 2 ? (
          <p className="self-center">Just now</p>
        ) : (
          <p className="self-center justify-self-start mr-2">
            {diffrences["diffrenceInHours"]} Hours ago
          </p>
        )}
      </div>
    </Link>
  );
}
