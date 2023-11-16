/* eslint-disable react/prop-types */
const Input = ({ label, fieldName, setValue, type = "text" }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={type}
        name={fieldName}
        onKeyUp={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
