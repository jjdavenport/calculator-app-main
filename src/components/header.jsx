import { useEffect, useState } from "react";

const Header = () => {
  const [button, setButton] = useState(null);
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("one", "two", "three");

    if (button === 1) {
      root.classList.add("one");
    } else if (button === 2) {
      root.classList.add("two");
    } else if (button === 3) {
      root.classList.add("three");
    }

    if (prefersDarkMode) {
      if (button !== 1 && button !== 2) {
        setButton(3);
      }
    } else if (button !== 1 && button !== 3) {
      setButton(2);
    }
  }, [button, prefersDarkMode]);

  return (
    <>
      <header className="flex justify-between p-4 one:text-whiteTextTheme1 two:text-textGrayYellowTheme2 three:text-textLightYellowTheme3">
        <h1 className="~sm/md:~text-3xl/custom lowercase">Calc</h1>
        <label className="~sm/md:~text-sm/custom flex items-end gap-6 uppercase tracking-widest">
          Theme
          <div className="flex">
            <label className="flex flex-col items-center">
              1
              <button
                className="rounded-l-full p-2 transition-colors duration-300 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(1)}
              >
                <div
                  className={`${button === 1 ? "scale-125 one:bg-darkRedKeyShadowTheme1" : "bg-none"} h-3 w-3 rounded-full transition-transform duration-300 ease-in-out`}
                ></div>
              </button>
            </label>

            <label className="flex flex-col items-center">
              2
              <button
                className="p-2 transition-colors duration-300 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(2)}
              >
                <div
                  className={`${button === 2 ? "scale-125 two:bg-orangeKeyBgTheme2" : "bg-none"} h-3 w-3 rounded-full transition-transform duration-300 ease-in-out`}
                ></div>
              </button>
            </label>

            <label className="flex flex-col items-center">
              3
              <button
                className="rounded-r-full p-2 transition-colors duration-300 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(3)}
              >
                <div
                  className={`${button === 3 ? "scale-125 bg-pureCyanKeyBgTheme3" : "bg-none"} h-3 w-3 rounded-full transition-transform duration-300 ease-in-out`}
                ></div>
              </button>
            </label>
          </div>
        </label>
      </header>
    </>
  );
};

export default Header;
