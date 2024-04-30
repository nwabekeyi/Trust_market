const Button = ({ primary, children, onClick }) => {
  const buttonClasses = `rounded-md px-4 py-2 text-white font-semibold ${primary ? 'bg-red  hover:bg-none hover:text-red hover:border-red hover:border-2 duration-300' : 'bg-gray-500 hover:bg-gray-100'}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
