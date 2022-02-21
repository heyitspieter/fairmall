import { textError } from "styles/modules/Form.module.scss";

function DefaultForm({
  label,
  labelClass,
  isRequired,
  inputElement,
  errorMessage,
  parentClasses,
}) {
  return (
    <div className={parentClasses.join(" ")}>
      <label className={labelClass} htmlFor={label.htmlFor}>
        {label.title} {isRequired && <span>*</span>}
      </label>
      {inputElement}
      <span className={textError}>{errorMessage}</span>
    </div>
  );
}

export default DefaultForm;
