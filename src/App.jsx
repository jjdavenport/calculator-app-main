import Keypad from "./components/keypad";
import Header from "./components/header";
import Output from "./components/output";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);

  return (
    <>
      <div>
        <main className="text-textThreeFiveXl one:bg-mainBgTheme1 two:bg-mainBgTheme2 three:bg-mainBgTheme3">
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
