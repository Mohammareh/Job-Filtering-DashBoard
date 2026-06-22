import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export function NavBar() {
  const navigate = useNavigate();

  function handleClick(btn) {
    switch (btn) {
      case "home":
        navigate("/");
        break;

      case "search":
        break;

      case "jobs":
        navigate("/jobs");
        break;

      case "about":
        navigate("/about");
        break;

      case "theme":
        console.log("Aobut page clicked");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <nav className="flex w-full overflow-x-hidden text-brand-text bg-brand-secondary border-b h-[15vh] justify-around">
        <div className="flex ">
          <img
            className="w-20 cursor-pointer "
            onClick={() => {
              handleClick("home");
            }}
            src="../public/JobifyTransparent.png"
            alt="hi"
          />

          <button
            onClick={() => handleClick("jobs")}
            className="rounded-2xl text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            Jobs
          </button>
          <button
            onClick={() => handleClick("about")}
            className="rounded-2xl text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            About
          </button>

          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}
