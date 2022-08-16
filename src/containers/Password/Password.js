import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";

import formStyles from "styles/modules/Form.module.scss";
import styles from "src/containers/Password/Password.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Password() {
  // Form state
  const [formControls, setFormControls] = useState({
    currentPassowrd: {
      label: {
        title: "Current Password",
        htmlFor: "currentpassword",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "password",
        id: "currentpassword",
        placeholder: "Enter your current password",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Current password is required",
      },
    },
    newPassowrd: {
      label: {
        title: "New Password",
        htmlFor: "newpassword",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "password",
        id: "newpassword",
        placeholder: "Enter your new password",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "New password is required",
      },
    },
    confirmPassowrd: {
      label: {
        title: "Confirm Password",
        htmlFor: "confirmpassword",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "password",
        id: "newpassword",
        placeholder: "Retype your new password",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Confirm password is required",
      },
    },
  });

  const [formValidity, setFormValidity] = useState(false);

  const router = useRouter();

  let formElementsArray = [];

  for (let key in formControls) {
    formElementsArray.push({
      id: key,
      config: formControls[key],
    });
  }

  const inputChangeHandler = (event, formControlKey) => {
    const updatededFormControls = updateObject(formControls, {
      [formControlKey]: updateObject(formControls[formControlKey], {
        value: event.target.value,
        valid: checkFormValidity(
          event.target.value,
          formControls[formControlKey].validation
        ),
        touched: true,
      }),
    });

    let formIsValid = true;

    for (let key in updatededFormControls) {
      formIsValid = updatededFormControls[key].valid && formIsValid;
    }

    setFormControls(updatededFormControls);
    setFormValidity(formIsValid);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    let formData = {};

    if (formValidity) {
      for (let key in formControls) {
        formData[key] = formControls[key].value;
      }

      // Submit form here
    }
  };

  /** Iterate over all the form elements and return it to the view */
  let formInputs = formElementsArray.map(({ id, config }) => (
    <FormInput
      key={id}
      value={config.value}
      label={config.label}
      error={config.error.message}
      validation={config.validation}
      elementType={config.elementType}
      labelClasses={config.label.classes}
      elementConfig={config.elementConfig}
      inputClasses={config.elementClasses}
      parentClasses={config.parentClasses}
      invalid={config.touched && !config.valid}
      onChange={(event) => inputChangeHandler(event, id)}
    />
  ));

  const btnConfig = {
    disabled: !formValidity,
  };

  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.heading}>
        <p>Change Password</p>
      </div>
      <div className={styles.formPanel}>
        <form
          onSubmit={(e) => onSubmitFormHandler(e)}
          className={styles.formElement}
        >
          <div className={styles.col}>
            <h3></h3>
            <div className={styles.col__grid}>{formInputs}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__grid}>
              <button {...btnConfig} className={styles.btnSubmit}>
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default Password;
