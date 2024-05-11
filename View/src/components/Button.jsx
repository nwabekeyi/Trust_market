const Button = ({ primary, children, onClick, login, getStarted, full, ...props }) => {
  const buttonClasses = `rounded-md text-white ${
    primary
      ? 'bg-red hover:bg-none hover:text-red border-red border-2 duration-100'
      : 'bg-gray-500 hover:bg-gray-100'
  } ${
    login
      ? 'px-6 py-3 ml-1 rounded-xl text-sm'
      :full ? 'w-full py-2 '
      :getStarted
      ? 'block px-8 py-2 bg-red'
      : 'ml-0 px-0'
  }`;

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
