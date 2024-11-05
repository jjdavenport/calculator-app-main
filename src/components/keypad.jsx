import { evaluate } from "mathjs";

const Keypad = ({ output, setOutput }) => {
  const number = (num) => {
    setOutput((prev) => (prev === "0" ? String(num) : prev + num));
  };

  const del = () => {
    setOutput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const minus = () => {
    setOutput((prev) => {
      return /[+\-*/]$/.test(prev) ? prev.slice(0, -1) + "-" : prev + "-";
    });
  };

  const add = () => {
    setOutput((prev) => {
      return /[+\-*/]$/.test(prev) ? prev.slice(0, -1) + "+" : prev + "+";
    });
  };

  const dot = () => {
    setOutput((prev) => (prev.includes(".") ? prev : prev + "."));
  };

  const multiply = () => {
    setOutput((prev) => {
      return /[+\-*/]$/.test(prev) ? prev.slice(0, -1) + "*" : prev + "*";
    });
  };

  const divide = () => {
    setOutput((prev) => {
      return /[+\-*/]$/.test(prev) ? prev.slice(0, -1) + "/" : prev + "/";
    });
  };

  const sum = () => {
    const result = evaluate(output);
    setOutput(String(result));
  };

  const clear = () => {
    setOutput("0");
  };

  const numClass = [
    "rounded-lg  border-b-4 one:border-b-grayOrangeKeyShadowTheme1 font-bold one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 one:hover:bg-hoverNumberKey1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 two:hover:bg-hoverNumberKey2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3 three:hover:bg-hoverNumberKey3 ~sm/md:~px-1/0 ~sm/md:~py-1/0 ~sm/md:~text-custom/5xl",
  ];

  return (
    <>
      <main className="grid w-full grid-cols-4 grid-rows-5 rounded-xl ~sm/md:~gap-3/5 ~sm/md:~px-6/7 ~sm/md:~py-6/7 one:bg-toggleBgTheme1 one:text-whiteTextTheme1 two:bg-toggleBgTheme2 two:text-whiteTextTheme2 three:bg-toggleBgTheme3 three:text-whiteTextTheme3">
        <button className={numClass} onClick={() => number(7)}>
          7
        </button>
        <button className={numClass} onClick={() => number(8)}>
          8
        </button>
        <button className={numClass} onClick={() => number(9)}>
          9
        </button>
        <button
          className="rounded-lg border-b-4 uppercase ~sm/md:~text-lg/custom one:border-b-keyShadowTheme1 one:bg-keyBgTheme1 one:hover:bg-hoverKey1 two:border-b-keyShadowTheme2 two:bg-keyBgTheme2 two:hover:bg-hoverKey2 three:border-b-vividMagentaKeyShadowTheme3 three:bg-darkVioletKeyBgTheme3 three:hover:bg-hoverKey3"
          onClick={del}
        >
          Del
        </button>
        <button className={numClass} onClick={() => number(4)}>
          4
        </button>
        <button className={numClass} onClick={() => number(5)}>
          5
        </button>
        <button className={numClass} onClick={() => number(6)}>
          6
        </button>
        <button className={numClass} onClick={add}>
          +
        </button>
        <button className={numClass} onClick={() => number(1)}>
          1
        </button>
        <button className={numClass} onClick={() => number(2)}>
          2
        </button>
        <button className={numClass} onClick={() => number(3)}>
          3
        </button>
        <button
          className="rounded-lg border-b-4 ~sm/md:~text-custom/5xl one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 one:hover:bg-hoverNumberKey1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 two:hover:bg-hoverNumberKey2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3 three:hover:bg-hoverNumberKey3"
          onClick={minus}
        >
          -
        </button>
        <button
          className="rounded-lg border-b-4 ~sm/md:~text-custom/5xl one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 one:hover:bg-hoverNumberKey1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 two:hover:bg-hoverNumberKey2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3 three:hover:bg-hoverNumberKey3"
          onClick={dot}
        >
          .
        </button>
        <button className={numClass} onClick={() => number(0)}>
          0
        </button>
        <button
          className="rounded-lg border-b-4 ~sm/md:~text-custom/5xl one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 one:hover:bg-hoverNumberKey1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 two:hover:bg-hoverNumberKey2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3 three:hover:bg-hoverNumberKey3"
          onClick={divide}
        >
          /
        </button>
        <button
          className="rounded-lg border-b-4 ~sm/md:~text-custom/5xl one:border-b-grayOrangeKeyShadowTheme1 one:bg-lightGrayOrangeKeyBgTheme1 one:text-textGrayBlueTheme1 one:hover:bg-hoverNumberKey1 two:border-b-darkGrayOrangeKeyShadowTheme2 two:bg-lightGrayYellowKeyBgTheme2 two:text-textGrayYellowTheme2 two:hover:bg-hoverNumberKey2 three:border-b-darkMagentaKeyShadowTheme3 three:bg-veryDarkVioletKeyBgTheme3 three:text-textLightYellowTheme3 three:hover:bg-hoverNumberKey3"
          onClick={multiply}
        >
          x
        </button>
        <button
          className={
            "three:hover:bg-hoverKey3] col-span-2 rounded-lg border-b-4 uppercase ~sm/md:~text-lg/custom one:border-b-keyShadowTheme1 one:bg-keyBgTheme1 one:hover:bg-hoverKey1 two:border-b-keyShadowTheme2 two:bg-keyBgTheme2 two:hover:bg-hoverKey2 three:border-b-vividMagentaKeyShadowTheme3 three:bg-darkVioletKeyBgTheme3"
          }
          onClick={clear}
        >
          Reset
        </button>
        <button
          className="col-span-2 rounded-lg border-b-4 ~sm/md:~text-lg/custom one:border-b-darkRedKeyShadowTheme1 one:bg-redKeyBgTheme1 one:hover:bg-hoverEqual1 two:border-b-darkOrangeKeyShadowTheme2 two:bg-orangeKeyBgTheme2 two:hover:bg-hoverEqual2 three:border-b-softCyanKeyShadowTheme3 three:bg-pureCyanKeyBgTheme3 three:text-textVeryDarkBlueTheme3 three:hover:bg-hoverEqual3"
          onClick={sum}
        >
          =
        </button>
      </main>
    </>
  );
};

export default Keypad;
