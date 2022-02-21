import className from "classnames";
import AuthForm from "src/components/Form/FormTemplates/AuthForm";
import DefaultForm from "src/components/Form/FormTemplates/DefaultForm";

import { labelError, inputError } from "styles/modules/Form.module.scss";

const FormInput = ({
  type,
  error,
  value,
  label,
  invalid,
  children,
  onChange,
  validation,
  elementType,
  labelClasses,
  inputClasses,
  parentClasses,
  elementConfig,
}) => {
  let inputElement = null;
  let inputTemplate = null;
  let errorMessage = null;

  /** Check if form input is invalid and has validation rules */
  const inputClass = className({
    [inputClasses.join(" ")]: true,
    [inputError]: invalid && validation,
  });

  const labelClass = className({
    [labelClasses.join(" ")]: true,
    [labelError]: invalid && validation,
  });

  if (invalid && validation) {
    errorMessage = error;
  }

  switch (elementType) {
    case "input":
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          value={value}
          {...elementConfig}
          onChange={onChange}
          className={inputClass}
        />
      );
      break;
    case "select":
      const { options, ...selectProps } = elementConfig;

      inputElement = (
        <select
          value={value}
          {...selectProps}
          onChange={onChange}
          className={inputClass}
        >
          {elementConfig.options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...elementConfig}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      );
  }

  switch (type) {
    case "auth":
      inputTemplate = (
        <AuthForm
          label={label}
          labelClass={labelClass}
          errorMessage={errorMessage}
          inputElement={inputElement}
          parentClasses={parentClasses}
          isRequired={validation.required}
        >
          {children}
        </AuthForm>
      );
      break;
    default:
      inputTemplate = (
        <DefaultForm
          label={label}
          labelClass={labelClass}
          errorMessage={errorMessage}
          inputElement={inputElement}
          parentClasses={parentClasses}
          isRequired={validation.required}
        />
      );
      break;
  }

  return <>{inputTemplate}</>;
};

export default FormInput;
