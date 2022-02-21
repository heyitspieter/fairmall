import Image from "next/image";
import { useState } from "react";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";

import formStyles from "styles/modules/Form.module.scss";
import styles from "src/containers/Checkout/Checkout.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Checkout() {
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
    deliveryDate: {
      label: {
        title: "Delivery date",
        htmlFor: "date",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        id: "date",
        type: "date",
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
        message: "Delivery date is required",
      },
    },
  });

  const [formValidity, setFormValidity] = useState(false);

  const [modeOfDelivery, setModeOfDelivery] = useState(0);

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

      formData["modeOfDelivery"] = modeOfDelivery <= 0 ? "delivery" : "pickup";

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
        <p>Checkout</p>
      </div>
      <form onSubmit={(e) => onSubmitFormHandler(e)} className={styles.grid}>
        <div className={styles.grid__col}>
          <div className={styles.row}>
            <h3>Contact details</h3>
            <div className={styles.formWrapper}>{formInputs.slice(0, 3)}</div>
          </div>
          <div className={styles.row}>
            <h3>Delivery details</h3>
            <div className={styles.formWrapper}>
              <div className={styles.formRadios}>
                <div>
                  <input
                    onChange={() => setModeOfDelivery(0)}
                    className={formStyles.radioBtn}
                    checked={modeOfDelivery === 0}
                    type="radio"
                    name="mod"
                    id="mod-1"
                  />
                  <label htmlFor="mod-1">Delivery</label>
                </div>
                <div>
                  <input
                    onChange={() => setModeOfDelivery(1)}
                    className={formStyles.radioBtn}
                    checked={modeOfDelivery === 1}
                    type="radio"
                    name="mod"
                    id="mod-2"
                  />
                  <label htmlFor="mod-2">Pickup</label>
                </div>
              </div>
              {formInputs.slice(3)}
            </div>
          </div>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items (2)</h4>
              <p>200,000 NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>1,000 NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>-</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>201,000 NGN</p>
            </div>
          </div>
          <button {...btnConfig} className={styles.btnCheckout}>
            Place Order
          </button>
          <p>
            By placing an order, you agree to our company{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
          </p>
        </div>
      </form>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default Checkout;
