import "./button.css";
const Button = ({ bg, color, text }) => {
  return (
    <>
      <button
        className="btn"
        style={{
          background: `${bg}`,
          border: `1px solid ${color}`,
          color: `${color}`,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
