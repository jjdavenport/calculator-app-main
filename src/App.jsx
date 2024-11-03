import Keypad from "./components/keypad";
import Header from "./components/header";
import Output from "./components/output";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);

  return (
    <>
      <div className="flex h-full min-h-screen flex-col font-custom one:bg-mainBgTheme1 two:bg-mainBgTheme2 three:bg-mainBgTheme3">
        <main className="text-custom flex flex-1 flex-col gap-6 p-4 font-bold transition-colors duration-700 ease-in-out">
          <Header />
          <Output display={output} />
          <Keypad output={output} setOutput={setOutput} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
