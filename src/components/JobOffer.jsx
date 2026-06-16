import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function JobOffer() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

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

  console.log(jobs);

  function consoling(title) {
    console.log(title);
    // navigate(
    //   "https://www.google.com/search?q=How+to+make+a+button+redirect+you+to+a+page+in+react&oq=How+to+make+a+button+redirect+you+to+a+page+in+react&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgcIAxAAGO8FMgcIBBAAGO8FMgcIBRAAGO8FMgcIBhAAGO8FMgcIBxAAGO8F0gEKMTAxMzlqMGoxNagCCLACAfEF9f5QFJVYkp8&sourceid=chrome&ie=UTF-8",
    // );
    window.location.href =
      "https://www.google.com/search?q=How+to+make+a+button+redirect+you+to+a+page+in+react&oq=How+to+make+a+button+redirect+you+to+a+page+in+react&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgcIAxAAGO8FMgcIBBAAGO8FMgcIBRAAGO8FMgcIBhAAGO8FMgcIBxAAGO8F0gEKMTAxMzlqMGoxNagCCLACAfEF9f5QFJVYkp8&sourceid=chrome&ie=UTF-8";
  }
  return (
    <div
      className="
     flex flex-col
    sm:grid sm:grid-cols-2 gap-1 place-items-center lg:grid-cols-3 xl:grid-cols-4
    h-screen overflow-y-auto
    scrollbar-none
    bg-gray-900
    "
    >
      {isLoading ? (
        <h1 className="text-red-600 animate-pulse">Loading...</h1>
      ) : (
        jobs.map((job) => (
          <div
            key={job.title}
            onClick={() => consoling(job.title)}
            className="
            grid p-1
            w-11/12  m-4 min-h-40 sm:max-h-40 sm:w-11/12
          bg-gray-800 text-white
            hover:scale-105 hover:border-4 hover:bg-blue-950 duration-300
            cursor-pointer text-center
            border-2 border-black rounded-xl
          "
          >
            <h1 className="text-[1.2rem] truncate">{job.title}</h1>
            <p className="border-4 border-black p-1 rounded-2xl self-end justify-self-start ml-2 mb-2">
              Role: {job.categories[0]}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

/* 
0: applicationLink: "https://himalayas.app/companies/oracle/jobs/principal-platform-software-engineer"


categories: (11) ['Platform-Engineering', 'Cloud-Engineering', 'Software-Engineering', 'DevOps-Engineering', 'Product-Development', 'Principal-Platform-Engineer', 'Software-Platform-Engineer', 'Senior-Platform-Engineer', 'Principal-Software-Engineer', 'Platform-Engineer', 'Software-Engineer']

companyLogo: "thumbnail_url"

companyName: "name"

companySlug: "oracle"

currency: null

description: "<p>Spectra Platform team at <a href=\"https://himalayas.app/companies/oracle\">Oracle</a> is building a cloud-native platform for the Fusion Applications that operates at a large scale in a broadly distributed multi-tenant SaaS cloud environment. We focus on transforming how Software Developers and DevOps engineers build cloud applications for enterprise customers using <a href=\"https://himalayas.app/companies/oracle\">Oracle</a> technologies. </p><p>  You are the builder here. You will be part of a team of intelligent, motivated, highly technical diverse set people. Given the autonomy and support you are excited to work on the bleeding edge frontend and backend technologies, including Go, Scala, Java, Argo and software lifecycle using Kubernetes, Docker, Terraform and more.</p><p>You will be responsible for all stages of the software development lifecycle, from requirements gathering to coding, testing, CI/CD, and operational support. We own our applications - we deploy and operate them, and we see them being used daily by our customers.</p><p>Ideal candidates will have in-depth experience building, delivering, and operating cloud-native, highly available, distributed, and secure systems across multiple regions. Prior experience with automation projects is a plus.</p><p>Our teams are primarily remote and spread across the US, India, and Europe.  We connect &amp; communicate and stay on top of progress using Slack &amp; Zoom using Agile methodologies.</p><h3>Desired Qualifications:</h3><ul><li>BS or MS degree in computer science or related fields</li><li>Self-driven &amp; motivated, deliver complex features on-time mentor and support junior engineers.</li><li>Strong communications &amp; collaboration skill</li><li>6 to 10 years of software development and or DevOps experience</li><li>Experience designing and programming using Go, Scala or Java and Bash/Shell</li><li>Kubernetes Experience </li><li>Cloud-native application development experience</li><li>Experience in building the applications using the microservices architecture &amp; REST APIs</li><li>Experience with containers and their deployment (Kubernetes, Docker), source control (BitBucket/ GIT) and continuous deployment tools (e.g., Teamcity, Jenkins)</li><li>Knowledge of AI and familiarity with AI adoption tools such as Codex</li></ul><h3>Preferred Qualifications:</h3><ul><li>Experience building automation framework in cloud</li><li>Experience OCI cloud-native app development </li><li>Understanding of Terraform or CloudFormation</li><li>Knowledge of Temporal workflows</li></ul><p>Originally posted on <a href=\"https://himalayas.app\">Himalayas</a></p>"

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
[[Prototype]]: Object
*/
