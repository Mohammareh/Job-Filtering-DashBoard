export function NavBar() {
  return (
    <>
      <nav className="flex w-full h-[15vh] justify-center bg-blue-900">
        <button className="border-2 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105">
          Home
        </button>
        <button className="border-2 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105">
          Search
        </button>
        <button className="border-2 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105">
          Contact
        </button>
      </nav>
    </>
  );
}
