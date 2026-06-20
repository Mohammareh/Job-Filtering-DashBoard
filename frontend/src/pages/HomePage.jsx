import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <div className="h-10/12 flex flex-col bg-linear-to-br from-brand-background to-brand-primary">
        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-5">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-brand-text max-w-3xl leading-tight">
            Search 5 Leading Job Boards in One Place.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
            Discover your perfect opportunity across multiple platforms
          </p>

          <input
            type="text"
            placeholder="Search for jobs"
            class="w-full max-w-md px-4 py-3 bg-white text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl shadow-sm outline-none transition-all duration-200 ease-in-out hover:border-gray-300 focus:border-brand-primary focus:ring-4 focus:ring-blue-500/10 focus:shadow-md"
          />
          <p className="text-brand-text">or</p>

          <Link
            to={"/jobs"}
            className="px-8 py-4 mb-4 text-2xl rounded-2xl font-bold text-white bg-linear-to-r shadow-2xl shadow-brand-secondary from-brand-primary/20 to-brand-secondary hover:scale-105 duration-150 hover:shadow-lg hover:shadow-brand-text/50 cursor-pointer border-2 border-brand-text transition-all"
          >
            <span className="leading-15 rounded-2xl text-2xl sm:text-4xlm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-brand-text to-purple-900 bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite]">
              Discover
            </span>{" "}
            available jobs!
          </Link>
        </div>
      </div>
    </>
  );
}
