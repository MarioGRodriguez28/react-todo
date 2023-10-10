import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
  return (
    <>
      <div className="bg-gray-200  min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="uppercase text-xl font-bold tracking-[0.3em] text-white ">
              Todo
            </h1>
            <button>
            <MoonIcon className="fill-red-500" />
            </button>
          </div>
          <form className="bg-white mt-8 rounded-md overflow-hidden flex items-center py-4 gap-4 px-4">
            <span className="rounded-full  border-2 inline-block h-5 w-5"></span>
            <input
              type="text"
              placeholder="Create a new TODO"
              className="  w-full text-gray-400 outline-none"
            />
          </form>
        </header>
        <main className="container mt-8 mx-auto px-4">
          <div className="bg-white rounded-md">
            <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b">
              <button className="rounded-full  border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 grow ">A new TODO</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b">
              <button className="rounded-full  border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 grow ">A new TODO</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex gap-4  px-4 py-4 border-b-gray-400 border-b">
              <button className="rounded-full  border-2 inline-block h-5 w-5 flex-none"></button>
              <p className="text-gray-600 grow ">A new TODO</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="py-4 px-4 flex justify-between">
              <span className=" text-gray-400 ">5 Item left</span>
              <button className=" text-gray-400 ">Clear Completed</button>
            </section>
          </div>
        </main>

        <section className="px-4 mt-8 container mx-auto">
          <div className=" bg-white p-4 rounded-md flex justify-center gap-4">
            <button className=" text-blue-800">All</button>
            <button className=" hover:text-blue-800">Active</button>
            <button className=" hover:text-blue-800">Completed</button>
          </div>
        </section>
        <section className="text-center">Drag and Drop</section>
      </div>
    </>
  );
};
export default App;
