import { textError } from "styles/modules/Form.module.scss";

import styles from "src/containers/Signin/Signin.module.scss";

function AuthForm({
  label,
  children,
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
      <div className={styles.inputWrapper}>
        {inputElement}
        {children}
      </div>
      <span className={textError}>{errorMessage}</span>
    </div>
  );
}

export default AuthForm;
