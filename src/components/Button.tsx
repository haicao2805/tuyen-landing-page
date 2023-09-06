interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: "small" | "large"
}

const Button: React.FC<ButtonProps> = ({ children, size = "large", ...rest }) => {
  if (size === "small")
    return (
      <button
        className="w-[167px] h-[50px] bg-[url('/images/small-button-default.png')] hover:bg-[url('/images/small-button-active.png')]"
        {...rest}
      >
        <p className="text-[#121212] hover:text-[#DEC68D] w-full h-full text-center leading-[50px] text-[18px] font-bold font-philosopher">
          {children}
        </p>
      </button>
    );

  return (
    <button
      className="w-[244px] h-[72px] bg-[url('/images/button-default.png')] hover:bg-[url('/images/button-active.png')]"
      {...rest}
    >
      <p className="text-[#121212] hover:text-[#DEC68D] w-full h-full text-center leading-[72px] text-[26px] font-bold font-philosopher">
        {children}
      </p>
    </button>
  );
}

export default Button;