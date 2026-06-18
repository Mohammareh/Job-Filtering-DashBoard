import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();

  function handleClick(btn) {
    switch (btn) {
      case "home":
        navigate("/");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <nav className="flex w-full h-[15vh] justify-center bg-blue-900">
        <button
          onClick={() => handleClick("home")}
          className="rounded-2xl text-white border-purple-600 hover:border-black hover:border-4 border-3 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
        >
          Home
        </button>
        <button
          onClick={() => handleClick("search")}
          className="rounded-2xl text-white border-purple-600 hover:border-black hover:border-4 border-3 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
        >
          Search
        </button>
        <button
          onClick={() => handleClick("about")}
          className="rounded-2xl text-white border-purple-600 hover:border-black hover:border-4 border-3 my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
        >
          About / Contact
        </button>
      </nav>
    </>
  );
}
