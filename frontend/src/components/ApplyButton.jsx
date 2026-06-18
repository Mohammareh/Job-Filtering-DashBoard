export function ApplyButton({ job }) {
  return (
    <button
      className="pt-3 px-2 -end bg-purple-900 rounded-2xl border-3 mx-5 my-5 max-w-5/12 items-center
        hover:scale-105 active:border-white active:duration-0 active:border-6 text-white  pb-4 text-1xl border-blue-950 duration-150 cursor-pointer"
      onClick={() =>
        window.open(job.applicationLink ? job.applicationLink : job.url)
      }
    >
      Apply now
    </button>
  );
}
