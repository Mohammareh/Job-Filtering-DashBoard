import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();

  function handleClick(btn) {
    switch (btn) {
      case "home":
        navigate("/");
        console.log("Navigate page clicked");
        break;

      case "search":
        break;

      case "about":
        navigate("/about");
        console.log("Aobut page clicked");
        break;

      default:
        break;
    }
  }

  return (
    <>
      <nav className="flex w-full  h-[15vh] justify-center">
        <div className="flex rounded-2xl">
          <button
            onClick={() => handleClick("home")}
            className="rounded-2xl text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            Home
          </button>
          <button
            onClick={() => handleClick("about")}
            className="rounded-2xl text-1xl my-3 mx-1 px-2 scrollbar-none cursor-pointer duration-200 hover:scale-105"
          >
            About / Contact
          </button>
        </div>
      </nav>
    </>
  );
}
