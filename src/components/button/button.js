import "./button.css";
const Button = ({ bg, border, color, text }) => {
  return (
    <>
      <button
        className="btn"
        style={{
          background: `${bg}`,
          border: `${border}`,
          color: `${color}`,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
