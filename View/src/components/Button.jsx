const Button = ({ primary, children, onClick, login, getStarted, learnMore,full, ...props }) => {
  const buttonClasses = `rounded-md text-white font-semibold ${
    primary
      ? 'bg-red hover:bg-none hover:text-red hover:border-red hover:border-2 duration-100'
      : 'bg-gray-500 hover:bg-gray-100'
  } ${
    login
      ? 'px-4 py-1 ml-1'
      :full ? 'w-full py-2 '
      :getStarted
      ? 'block px-8 py-2 bg-red'
      : learnMore
      ? 'block px-8 py-2 text-red bg-transparent border border-red border-2 border-solid hover:border-0 hover:bg-red hover:text-white'
      : 'ml-0 px-0'
  }`;

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
