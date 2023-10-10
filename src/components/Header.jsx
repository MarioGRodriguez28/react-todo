import MoonIcon from "./icons/MoonIcon";
const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="uppercase text-xl font-bold tracking-[0.3em] text-white ">
          Todo
        </h1>
        <button>
          <MoonIcon className="fill-red-500" />
        </button>
      </div>
    </header>
  );
};
export default Header;
