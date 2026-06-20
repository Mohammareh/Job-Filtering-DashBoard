export function ApplyButton({ job }) {
  return (
    <button
      className="pt-3 px-2 bg-brand-primary border hover:shadow-brand-primary/50 border-brand-secondary shadow-brand-primary/30 rounded-2xl mx-5 my-5 max-w-5/12 items-center shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]
        hover:scale-105 text-white pb-4 text-1xl duration-100 cursor-pointer"
      onClick={() =>
        window.open(job.applicationLink ? job.applicationLink : job.url)
      }
    >
      Apply now
    </button>
  );
}
