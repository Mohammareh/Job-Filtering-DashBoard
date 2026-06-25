import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export function NavBar() {
  const navigate = useNavigate();

  function handleClick(btn) {
    switch (btn) {
      case "home":
        navigate("/");
        break;

      case "jobs":
        navigate("/jobs");
        break;

      case "about":
        navigate("/about");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <nav className="flex w-full items-center overflow-hidden text-brand-text bg-brand-secondary border-b h-[15vh] justify-around">
        <div className="flex ">
          <img
            className="w-20 sm:w-40 sm:h-40 sm:text-4xl sm:mt-15 text-center md:w-60 md:h-60 md:mt-35 md:text-5xl self-center object-contain h-20 cursor-pointer "
            onClick={() => {
              handleClick("home");
            }}
            src="/JobifyTransparent.png"
            alt="Jobify Logo"
          />

          <button
            onClick={() => handleClick("jobs")}
            className="rounded-2xl sm:text-2xl md:text-5xl md:mx-10 sm:mx-5 text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            Jobs
          </button>
          <button
            onClick={() => handleClick("about")}
            className="rounded-2xl sm:text-2xl md:text-5xl md:mx-10 sm:mx-5 text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            About
          </button>

          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}
