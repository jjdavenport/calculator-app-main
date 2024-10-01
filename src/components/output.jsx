const Output = ({ display }) => {
  const format = new Intl.NumberFormat().format(display);
  return (
    <>
      <section className="p-4 text-right one:bg-screenBgTheme1">
        <span className="one:text-whiteTextTheme1">{format}</span>
      </section>
    </>
  );
};

export default Output;
