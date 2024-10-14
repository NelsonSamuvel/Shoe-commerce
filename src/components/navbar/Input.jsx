const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter Shoes to search..."
      className="border-stone-200  px-2 py-1.5 text-md placeholder:text-sm bg-stone-100 rounded-md  w-[300px]"
    />
  );
};

export default Input;
