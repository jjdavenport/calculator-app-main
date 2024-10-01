const Output = ({ display }) => {
  return (
    <>
      <section className="rounded-lg p-4 text-right one:bg-screenBgTheme1 two:bg-screenBgTheme2 three:bg-screenBgTheme3">
        <span className="one:text-whiteTextTheme1 two:text-textGrayYellowTheme2 three:text-textLightYellowTheme3">
          {display}
        </span>
      </section>
    </>
  );
};

export default Output;
