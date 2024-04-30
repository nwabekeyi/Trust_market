const Button = ({ primary, children, onClick, login }) => {
  const buttonClasses = `rounded-md  text-white font-semibold ${primary ? 'bg-red  hover:bg-none hover:text-red hover:border-red hover:border-2 duration-300' : 'bg-gray-500 hover:bg-gray-100'}
  ${login ? 'px-4 py-1' : 'px-8 py-9 '}
  ${login ? 'ml-1' : 'ml-0 '}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
