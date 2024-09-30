import Keypad from "./components/keypad";
import Header from "./components/header";
import Output from "./components/output";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <main className="one:bg-mainBgTheme1 two:bg-mainBgTheme2 three:bg-mainBgTheme3">
          <Header />
          <Output />
          <Keypad />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
