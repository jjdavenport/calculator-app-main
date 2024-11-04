const Output = ({ display }) => {
  return (
    <>
      <section className="w-full cursor-none rounded-lg text-right ~sm/md:~px-6/8 ~sm/md:~py-4/5 one:bg-screenBgTheme1 two:bg-screenBgTheme2 three:bg-screenBgTheme3">
        <span className="~sm/md:~text-custom/6xl one:text-whiteTextTheme1 two:text-textGrayYellowTheme2 three:text-textLightYellowTheme3">
          {display.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </section>
    </>
  );
};

export default Output;
