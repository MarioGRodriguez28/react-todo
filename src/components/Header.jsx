import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        if(darkMode){
          document.documentElement.classList.add("dark")
        }else{
          document.documentElement.classList.remove("dark")
        }
      

      
    }, [darkMode]);
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-xl font-bold tracking-[0.3em] text-white ">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};
export default Header;
