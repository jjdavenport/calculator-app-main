import { evaluate } from "mathjs";

const Keypad = ({ output, setOutput }) => {
  const number = (num) => {
    setOutput((prev) => (prev === "0" || output === "0" ? num : prev + num));
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
      <div className="grid grid-cols-4 grid-rows-5 gap-2 p-4 one:bg-toggleBgTheme1 one:text-white">
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("7")}
        >
          7
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("8")}
        >
          8
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("9")}
        >
          9
        </button>
        <button className="bg-keyBgTheme1" onClick={() => minus("-")}>
          Del
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("4")}
        >
          4
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("5")}
        >
          5
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("6")}
        >
          6
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => operator("+")}
        >
          +
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("1")}
        >
          1
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("2")}
        >
          2
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("3")}
        >
          3
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={minus}
        >
          -
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number(".")}
        >
          .
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => number("0")}
        >
          0
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => operator("/")}
        >
          /
        </button>
        <button
          className="rounded-lg border-b-4 bg-lightGrayOrangeKeyBgTheme1 one:border-b-grayOrangeKeyShadowTheme1 one:text-textGrayBlueTheme1"
          onClick={() => operator("*")}
        >
          x
        </button>
        <button
          className="col-span-2 bg-keyBgTheme1"
          onClick={() => setOutput("0")}
        >
          Reset
        </button>
        <button className="col-span-2" onClick={equals}>
          =
        </button>
      </div>
    </>
  );
};

export default Keypad;
