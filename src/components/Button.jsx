const Button = ({ children, className, handleClick }) => {
  return <button className={`${className} font-or`} onClick={handleClick}>{children}</button>;
};

export default Button;
