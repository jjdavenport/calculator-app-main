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
      <header className="flex justify-between p-4 one:text-whiteTextTheme1">
        <h1 className="lowercase">Calc</h1>
        <label className="flex gap-4">
          Theme
          <button onClick={() => setButton(1)}>1</button>
          <button onClick={() => setButton(2)}>2</button>
          <button onClick={() => setButton(3)}>3</button>
        </label>
      </header>
    </>
  );
};

export default Header;
