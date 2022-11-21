import "./Button.scss";
interface ButtonProps {
  children:string;
  onClick: () => void; 
}

export const Button = ({children, onClick, ...props}:ButtonProps) => {
  return (
    <button onClick={onClick} {...props} className="hire-us">
      {children}
    </button>
  );
};
