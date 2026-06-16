export function NavBar() {
  return (
    <>
      <div
        className="
      grid grid-cols-3 
    w-full h-[15vh] bg-blue-900"
      >
        <button
          className="border-2 my-3 mx-13"
          onClick={() => {
            console.log("Hi");
          }}
        >
          Home
        </button>
        <button>Search</button>
        <button>Contact</button>
      </div>
    </>
  );
}
