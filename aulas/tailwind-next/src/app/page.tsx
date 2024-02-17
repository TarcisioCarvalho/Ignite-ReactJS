export default function Home() {
  return (
    <div className="p-8 bg-slate-50 dark:bg-slate-900 dark:text-slate-100 text-slate-900 h-screen  flex flex-col items-center text-center">
      <div className="max-w-2xl">
      <h1 className="font-bold flex text-3xl sm:text-5xl lg:text-7xl items-center text-diego before:w-0.5 before:h-3 gap-3  before:bg-sky-500">
      Rapidly build modern websites without ever leaving your HTML.
      </h1>
      <p className="mt-4">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>

      <button  className="bg-sky-500 text-white rounded-md px-4 py-3 mt-4 enabled:hover:bg-sky-600  transition duration-500 disabled:opacity-60 disabled:cursor-not-allowed">
        Sing In
      </button>
      </div>
    </div>
  );
}
