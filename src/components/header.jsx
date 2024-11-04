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
      <header className="flex w-full justify-between ~sm/md:~p-4/2 one:text-whiteTextTheme1 two:text-textGrayYellowTheme2 three:text-textLightYellowTheme3 md:items-center">
        <h1 className="lowercase ~sm/md:~text-3xl/custom">Calc</h1>
        <label className="flex items-end gap-6 text-sm uppercase tracking-widest">
          <span className="~sm/md:~pb-0/1">Theme</span>
          <div className="flex">
            <label className="flex flex-col items-center">
              1
              <button
                className="rounded-l-full transition-colors duration-300 ~sm/md:~p-1/2 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(1)}
              >
                <div
                  className={`${button === 1 ? "scale-125 one:bg-darkRedKeyShadowTheme1" : "bg-none"} h-4 w-4 rounded-full transition-transform duration-300 ease-in-out`}
                ></div>
              </button>
            </label>

            <label className="flex flex-col items-center">
              2
              <button
                className="transition-colors duration-300 ~sm/md:~p-1/2 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(2)}
              >
                <div
                  className={`${button === 2 ? "scale-125 two:bg-orangeKeyBgTheme2" : "bg-none"} h-4 w-4 rounded-full transition-transform duration-300 ease-in-out`}
                ></div>
              </button>
            </label>

            <label className="flex flex-col items-center">
              3
              <button
                className="rounded-r-full transition-colors duration-300 ~sm/md:~p-1/2 one:bg-toggleBgTheme1 two:bg-toggleBgTheme2 three:bg-toggleBgTheme3"
                onClick={() => setButton(3)}
              >
                <div
                  className={`${button === 3 ? "scale-125 bg-pureCyanKeyBgTheme3" : "bg-none"} h-4 w-4 rounded-full transition-transform duration-300 ease-in-out`}
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
