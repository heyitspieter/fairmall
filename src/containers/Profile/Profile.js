import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";

import formStyles from "styles/modules/Form.module.scss";
import styles from "src/containers/Profile/Profile.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Profile() {
  // Form state
  const [formControls, setFormControls] = useState({
    firstname: {
      label: {
        title: "First Name",
        htmlFor: "firstname",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "firstname",
        placeholder: "Enter your first name",
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
        message: "First name is required",
      },
    },
    lastname: {
      label: {
        title: "Last Name",
        htmlFor: "lastname",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "lastname",
        placeholder: "Enter your last name",
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
        message: "Last name is required",
      },
    },
    email: {
      label: {
        title: "Email Address",
        htmlFor: "lastname",
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
        message: "Last name is required",
      },
    },
    phonenumber: {
      label: {
        title: "Phone number",
        htmlFor: "phonenumber",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "phonenumber",
        placeholder: "Enter your phone number",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
        isMobile: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Phone number is required",
      },
    },
    address: {
      label: {
        title: "Address",
        htmlFor: "address",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "address",
        placeholder: "Enter your delivery address",
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
        message: "Address is required",
      },
    },
    state: {
      label: {
        title: "State",
        htmlFor: "state",
        classes: [],
      },
      elementType: "select",
      elementConfig: {
        id: "state",
        options: [
          {
            value: "",
            text: "select a state",
          },
          {
            value: "fct",
            text: "Fct-Abuja",
          },
        ],
      },
      elementClasses: [formStyles.formSelect],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "State is required",
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
        <p>Profile</p>
      </div>
      <div className={styles.formPanel}>
        <form
          onSubmit={(e) => onSubmitFormHandler(e)}
          className={styles.formElement}
        >
          <div className={styles.col}>
            <h3>Account Details</h3>
            <div className={styles.col__grid}>{formInputs.slice(0, 4)}</div>
          </div>
          <div className={styles.col}>
            <h3>Address Book</h3>
            <div className={styles.col__grid}>{formInputs.slice(4)}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__grid}>
              <button {...btnConfig} className={styles.btnSubmit}>
                Save Changes
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/account/password");
                }}
                className={styles.btnChange}
              >
                Change Password
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

export default Profile;
