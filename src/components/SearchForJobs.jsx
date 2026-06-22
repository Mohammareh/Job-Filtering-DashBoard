export function SearchForJobs({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center justify-center w-full sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
      <input
        type="text"
        placeholder="Search for jobs"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
        className=" w-10/12 mt-3 max-w-md px-4 py-3 bg-brand-secondary text-brand-text placeholder-gray-400 border border-brand-primary rounded-xl ml-1 shadow-sm outline-none transition-all duration-200 ease-in-out hover:border-gray-400 focus:border-brand-text focus:ring-4 focus:ring-blue-500/10 focus:shadow-md"
      />
      <button className="border px-2 ml-2 hidden border-brand-primary rounded-2xl">
        X
      </button>
    </div>
  );
}
