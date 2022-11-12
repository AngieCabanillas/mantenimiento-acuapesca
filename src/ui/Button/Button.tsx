import "./Button.css";

interface ButtonProps {
  name?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, className }) => {
  return <button className={`button ${className}`}>{name}</button>;
};

export default Button;
