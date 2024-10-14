const Button = ({ type = "primary", handleActiveBtn, isActive, children }) => {
  const base = "px-4 py-2 rounded-md";
  const activeStyle = isActive
    ? "bg-orange-700 hover:opacity-80 text-white border-none"
    : "";

  const btnStyles = {
    primary: `${base} bg-orange-700 hover:opacity-80 text-white`,
    secondary: `${base} border border-stone-500 hover:bg-orange-700 hover:text-white hover:border-none ${activeStyle}`,
  };
  return (
    <button className={btnStyles[type]} onClick={handleActiveBtn}>
      {children}
    </button>
  );
};

export default Button;
