import { Link } from "react-router-dom";
import { SearchForJobsHomePage } from "../components/SearchForJobsHomePage";

export function HomePage() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden flex flex-col bg-linear-to-br from-brand-background to-brand-primary">
        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-5">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-brand-text max-w-3xl leading-tight">
            Search Multiple Leading Job Boards in One Place.
          </h1>

          <p className="text-lg md:text-xl text-brand-text text-center max-w-2xl">
            Discover your perfect opportunity across multiple platforms by
            searching from here ↓
          </p>

          <SearchForJobsHomePage />
          <p className="text-brand-text">or</p>

          <Link
            to={"/jobs"}
            className="px-8 py-4 mb-4 text-xl sm:text-2xl xl:text-3xl rounded-2xl font-bold text-white bg-linear-to-r shadow-2xl shadow-brand-secondary from-brand-primary/20 to-brand-secondary hover:scale-105 duration-150 hover:shadow-lg hover:shadow-brand-text/50 cursor-pointer border-2 border-brand-text transition-all"
          >
            <span className="leading-15 rounded-2xl text-xl sm:text-2xl  xl:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-brand-text to-purple-900 bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite]">
              Discover
            </span>{" "}
            available jobs!
          </Link>
        </div>
      </div>
    </>
  );
}
