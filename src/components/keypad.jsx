import { evaluate } from "mathjs";

const Keypad = ({ output, setOutput }) => {
  const number = (num) => {
    setOutput((prev) => (prev === "0" || output === "0" ? num : prev + num));
  };

  const operator = (op) => {
    setOutput((prev) => (prev === "0" ? prev + op : prev + "" + op + ""));
  };

  const minus = () => {
    setOutput((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));
  };
  const equals = () => {
    const sum = evaluate(output);
    setOutput(sum.toString());
  };

  return (
    <>
      <section className="grid grid-cols-4 grid-rows-5 gap-4 rounded-lg p-4 one:bg-toggleBgTheme1 one:text-whiteTextTheme1 two:bg-toggleBgTheme2 two:text-whiteTextTheme2 three:bg-toggleBgTheme3 three:text-whiteTextTheme3">
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("7")}
        >
          7
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("8")}
        >
          8
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("9")}
        >
          9
        </button>
        <button
          className="one:hover:bg-hoverKey1 three:hover:bg-hoverKey3 two:hover:bg-hoverKey2 rounded-lg border-b-4 uppercase one:border-b-keyShadowTheme1 one:bg-keyBgTheme1 two:border-b-keyShadowTheme2 two:bg-keyBgTheme2 three:border-b-vividMagentaKeyShadowTheme3 three:bg-darkVioletKeyBgTheme3"
          onClick={() => minus("-")}
        >
          Del
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("4")}
        >
          4
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("5")}
        >
          5
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("6")}
        >
          6
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => operator("+")}
        >
          +
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("1")}
        >
          1
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("2")}
        >
          2
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("3")}
        >
          3
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => operator("-")}
        >
          -
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number(".")}
        >
          .
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => number("0")}
        >
          0
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => operator("/")}
        >
          /
        </button>
        <button
          className="one:hover:bg-hoverNumberKey1 three:hover:bg-hoverNumberKey3 two:hover:bg-hoverNumberKey2 rounded-lg border-b-4 one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3"
          onClick={() => operator("*")}
        >
          x
        </button>
        <button
          className="one:hover:bg-hoverKey1 three:hover:bg-hoverKey3 two:hover:bg-hoverKey2 col-span-2 rounded-lg border-b-4 uppercase one:border-b-keyShadowTheme1 one:bg-keyBgTheme1 two:border-b-keyShadowTheme2 two:bg-keyBgTheme2 three:border-b-vividMagentaKeyShadowTheme3 three:bg-darkVioletKeyBgTheme3"
          onClick={() => setOutput("0")}
        >
          Reset
        </button>
        <button
          className="one:hover:bg-hoverEqual1 three:hover:bg-hoverEqual3 two:hover:bg-hoverEqual2 col-span-2 rounded-lg border-b-4 one:border-b-darkRedKeyShadowTheme1 one:bg-redKeyBgTheme1 two:border-b-darkOrangeKeyShadowTheme2 two:bg-orangeKeyBgTheme2 three:border-b-softCyanKeyShadowTheme3 three:bg-pureCyanKeyBgTheme3 three:text-textVeryDarkBlueTheme3"
          onClick={equals}
        >
          =
        </button>
      </section>
    </>
  );
};

export default Keypad;
