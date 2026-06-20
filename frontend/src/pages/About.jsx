export function About() {
  return (
    <div className=" w-full h-[85vh] flex flex-col pt-4 bg-gray-900">
      <div>
        <h2 className="leading-15 mx-4 p-2 border-3 text- border-blue-950 rounded-2xl text-4xl sm:text-4xlm font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-[200%_auto] animate-[move-gradient_4s_ease_infinite] text-center">
          About this page :)
        </h2>
      </div>
      <p className="ml-3 text-4xl text-white items-start">Description</p>
    </div>
  );
}
