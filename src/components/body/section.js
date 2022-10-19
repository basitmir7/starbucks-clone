import Button from "../button/button";

const Section = ({ image, header, text, align, bg, color, btnText }) => {
  return (
    <>
      <section
        style={{
          flexDirection: `${align}`,
          background: `${bg}`,
          color: `${color}`,
        }}
        class="box box-b  grid-col-2"
      >
        <img src={image} alt="" />
        <div class="box-text">
          <h2 class="text-xl">{header}</h2>
          <p class="text-md">{text}</p>
          <div>
            <Button
              bg={bg}
              border="1px solid #33433d"
              color={color}
              text={btnText}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
