const Keypad = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4">
        <button className="">7</button>
        <button>8</button>
        <button>9</button>
        <button>Del</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
      </div>
      <div className="flex justify-between">
        <button>Reset</button>
        <button>=</button>
      </div>
    </>
  );
};

export default Keypad;
