  function InputField(props) {
    return (
      <div className="relative">
        <input
          {...props}
          className="block  border border-grey border-2 border-opacity-50 rounded-md shadow-sm focus:outline-none focus:border-2 focus:ring-indigo-500 focus:border-red sm:text-sm transition duration-300 hover:border-greenLight"
        />
      </div>
    );
  };


export default InputField;
