const Button = ({ primary, children, onClick, login, getStarted,learnMore }) => {
  const buttonClasses = `rounded-md text-white font-semibold ${
    primary
      ? 'bg-red hover:bg-none hover:text-red hover:border-red hover:border-2 duration-300'
      : 'bg-gray-500 hover:bg-gray-100'
  } ${
    login
      ? 'px-4 py-1 ml-1'
      : getStarted
      ? 'block px-8 py-2'
      :  learnMore
      ? 'block px-8 py-2 text-red bg-transparent border border-red border-2 border-solid hover:border-0 hover:bg-red hover:text-white'
      : 'ml-0 px-0'
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
