const Button = ({ name, onClickButton }) => {
  return (
    <button
      className="bg-blue-200 w-10 h-10 rounded-md flex justify-center items-center shadow-sm"
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;

/*return (
    <button
      className="bg-blue-200 w-10 h-10 rounded-md flex justify-center items-center shadow-sm"
      onClick={onClickButton}
    >
      {name}
    </button>
  );*/
