import { useState } from "react";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";

import formStyles from "styles/modules/Form.module.scss";
import styles from "src/containers/Contact/Contact.module.scss";

function Contact() {
  // Form state
  const [formControls, setFormControls] = useState({
    name: {
      label: {
        title: "Your name",
        htmlFor: "name",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "name",
        placeholder: "Enter your name",
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
        message: "Your name is required",
      },
    },
    email: {
      label: {
        title: "Email Address",
        htmlFor: "email",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "email",
        id: "email",
        placeholder: "Enter your email address",
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
        message: "Your email is required",
      },
    },
    message: {
      label: {
        title: "Message",
        htmlFor: "message",
        classes: [],
      },
      elementType: "textarea",
      elementConfig: {
        id: "message",
        rows: 1,
        placeholder: "Enter your message",
      },
      elementClasses: [formStyles.formTextarea],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Your message is required",
      },
    },
  });

  const [formValidity, setFormValidity] = useState(false);

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
      <div className={styles.heading}>
        <p>Contact Us</p>
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
                Submit
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <span>Email Us:</span>
            <a href="mailto:support@fairmall.co">support@fairmall.co</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
