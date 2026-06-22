import { useState } from "react";

export function About() {
  const [copy, setCopy] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("+966500812403");
    setCopy(true);
    setInterval(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="w-full pb-10 px-10 sm:px-20 lg:px-30 h-full min-h-[85vh] flex flex-col pt-4 bg-linear-to-l from-brand-primary to-brand-background">
      <div>
        <h2 className="leading-15 mx-4 p-2 text-3xl sm:text-4xlm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-brand-primary via-brand-text to-brand-secondary bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite] text-center">
          About This Project
        </h2>
      </div>
      <h3 className="text-4xl text-brand-text">The Mission</h3>
      <p className="ml-3 text-2xl text-brand-text items-start">
        Jobify was built to solve a simple problem: the modern job hunt is
        cluttered, slow, and overwhelming. This platform is a streamlined,
        high-performance job board designed to connect talent with opportunities
        without the noise. Whether you are a job seeker looking for a clean UI
        to track your applications, or a recruiter needing a robust dashboard to
        manage listings, this platform cuts out the bloat to focus on what
        matters: getting hired.
      </p>
      <br />
      <p className="ml-3 text-2xl text-brand-text items-start">
        How?
        <br />
        This website is Front-end only without any backend integration, not that
        I can't do it, I have multiple Django projects and some experience with
        Express.js, I actually tried to add an Express backend, but I realized
        that I don't need to for this simple website.
        <br />
        The data was fetched from the Himalayas API and Arbietnow API at the
        time of writing this About page, and I can easily add more and I will in
        the future
      </p>

      <br />
      <p className="ml-3 text-2xl text-brand-text items-start">
        Technical Overview (Behind the Scenes) While this looks like a live
        product, it was entirely built from scratch by a single developer to
        showcase modern web engineering principles, clean database design, and
        scalable backend architecture.
        <br />
        <br />
        🛠️ The Tech Stack
        <br />
        Frontend: React / JavaScript — Building a highly responsive, dynamic
        single-page interface.
        <br />
        Styling: Tailwind CSS — Creating a clean, modern, and accessible user
        experience.
      </p>
      <br />
      <p className="ml-3 text-2xl text-brand-text items-start">
        🚀 Key Engineering Features
        <br />
        Performance First: Built with clean code practices to minimize API
        latency and ensure fast page load times.
        <br />
        Dynamic Client-Side Filtering & Sorting: Developed complex frontend
        algorithms to filter, search, and sort large JSON datasets instantly in
        the browser without requiring server-side re-renders or additional
        network latency.
      </p>
      <br />
      <p className="ml-3 text-2xl text-brand-text items-start">
        Meet the Developer
        <br />
        Hello! I’m Mohammed, a software developer focused on building efficient,
        secure, and highly functional web applications. I built this job board
        to push my skills system design, Optimaized api requests and state
        management.
        <br />I love taking complex, real-world problems and translating them
        into clean, maintainable code.
        <br />
        Let's Connect If you're a recruiter, a fellow developer, or just want to
        chat about the tech behind this project, feel free to reach out!
        <br />
        <a href="/jobs">💻 View the Source Code on GitHub</a>
        <br />
        <a href="">💼 Connect with me on LinkedIn</a>
        <br />
        <span onClick={handleCopy} className="cursor-pointer mr-2">
          💬 Send me a message or call me at +966500812403
        </span>
        {copy ? (
          "Copied✅"
        ) : (
          <button className="cursor-pointer" onClick={handleCopy}>
            📋
          </button>
        )}
      </p>
    </div>
  );
}
