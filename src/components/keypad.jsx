import { evaluate } from "mathjs";

const Keypad = ({ output, setOutput }) => {
  const number = (num) => {
    setOutput((prev) => (prev === "0" ? num : prev + num));
  };

  const operator = (op) => {
    setOutput((prev) => (prev === "0" ? prev + op : prev + "" + op + ""));
  };

  const minus = () => {
    setOutput((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  };

  const equals = () => {
    const sum = evaluate(output);
    setOutput(sum.toString());
  };

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4">
        <button onClick={() => number("7")}>7</button>
        <button onClick={() => number("8")}>8</button>
        <button onClick={() => number("9")}>9</button>
        <button onClick={() => minus("-")}>Del</button>
        <button onClick={() => number("4")}>4</button>
        <button onClick={() => number("5")}>5</button>
        <button onClick={() => number("6")}>6</button>
        <button onClick={() => operator("+")}>+</button>
        <button onClick={() => number("1")}>1</button>
        <button onClick={() => number("2")}>2</button>
        <button onClick={() => number("3")}>3</button>
        <button onClick={minus}>-</button>
        <button onClick={() => number(".")}>.</button>
        <button onClick={() => number("0")}>0</button>
        <button onClick={() => operator("/")}>/</button>
        <button onClick={() => operator("*")}>x</button>
      </div>
      <div className="flex justify-between p-10">
        <button onClick={() => setOutput("0")}>Reset</button>
        <button onClick={equals}>=</button>
      </div>
    </>
  );
};

export default Keypad;
