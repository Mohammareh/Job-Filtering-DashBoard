import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchForJobsHomePage() {
  const [search, setSearch] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    (search ? navigate(`/jobs/${search}`) : setEmptyInput(true),
      setInterval(() => {
        setEmptyInput(false);
      }, 2000));
  };

  return (
    <>
      <div className="flex h-20 items-center justify-center w-full sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
        <input
          type="text"
          placeholder="Search for jobs"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleButtonClick();
            }
          }}
          value={search}
          className=" w-10/12 max-w-md px-4 py-3 bg-brand-secondary text-brand-text placeholder-gray-400 border border-brand-primary rounded-xl ml-1 shadow-sm outline-none transition-all duration-200 ease-in-out hover:border-gray-400 focus:border-brand-text focus:ring-4 focus:ring-blue-500/10 focus:shadow-md"
        />
        <button
          className="pt-1 px-2 bg-brand-primary border hover:shadow-brand-primary/50 border-brand-secondary shadow-brand-primary/30 rounded-2xl mx-5 max-w-3/12 items-center shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]
        hover:scale-105 text-white pb-2 text-1xl duration-100 cursor-pointer"
          onClick={handleButtonClick}
        >
          Search
        </button>
      </div>
      {emptyInput ? (
        <p className="text-brand-text">Type something in the input box</p>
      ) : (
        ""
      )}
    </>
  );
}
