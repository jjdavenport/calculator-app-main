import Keypad from "./components/keypad";
import Header from "./components/header";
import Output from "./components/output";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState("0");

  return (
    <>
      <div className="flex h-full min-h-screen flex-col font-custom one:bg-mainBgTheme1 two:bg-mainBgTheme2 three:bg-mainBgTheme3 md:items-center">
        <div className="flex w-screen flex-1 flex-col justify-center gap-6 p-4 text-custom font-bold transition-colors duration-700 ease-in-out md:max-w-screen-sm">
          <Header />
          <Output display={output} />
          <Keypad output={output} setOutput={setOutput} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
