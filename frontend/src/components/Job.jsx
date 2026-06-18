import { Link } from "react-router-dom";

export function Job({ job }) {
  function handleClick(job) {
    console.log(job.title);
    console.log(job.guid);

    // window.open(job.applicationLink);
  }

  const ms = job.pubDate * 1000;
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

  let id;
  {
    job.guid ? (id = job.guid) : (id = job.slug);
  }

  return (
    <>
      <Link
        to={`/job/${encodeURIComponent(id)}`}
        key={job.guid}
        onClick={() => handleClick(job)}
        className="
            flex flex-col p-1 scrollbar-none
            w-10/12 min-h-80 m-4 sm:w-11/12
          bg-gray-800 text-white
            hover:scale-105 hover:border border-blue-700 hover:bg-blue-950 duration-300
            cursor-pointer text-center
            rounded-xl
            "
      >
        <div className="flex">
          {job.companyLogo ? (
            <>
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
              <h2 className="ml-4 text-3xl mt-4">{job.companyName}</h2>
            </>
          ) : (
            <div className="flex w-full justify-center">
              <h2 className="ml-4 text-3xl">{job.companyName}</h2>
            </div>
          )}
        </div>

        <p>
          Before: {diffrences["diffrenceInHours"]} Hours{" "}
          {diffrences["diffrenceInMinutes"]} Minutes
        </p>

        <h1 className="text-[1.2rem] ">{job.title}</h1>
        <div className="line-clamp-5" />
        <p className="border-4 border-black p-1 rounded-2xl self-end justify-self-start ml-2 mb-2 "></p>
      </Link>
    </>
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
