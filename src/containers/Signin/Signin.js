import Link from "next/link";
import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import { useState, useEffect } from "react";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";

import styles from "src/containers/Signin/Signin.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import { useDispatch } from "react-redux";
import { loginuser } from "src/store/slices/user";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();


  // Form state
  const [formControls, setFormControls] = useState({
    email: {
      label: {
        title: "Email address",
        htmlFor: "email",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "email",
        id: "email",
        placeholder: "Enter your email address",
      },
      elementClasses: [styles.formInput, styles.padding_tb],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        isEmail: true,
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Email address is required",
      },
    },
    password: {
      label: {
        title: "Password",
        htmlFor: "password",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "password",
        id: "password",
        placeholder: "Enter your password",
      },
      elementClasses: [styles.formInput],
      parentClasses: [styles.formGroup],
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      error: {
        message: "Password is required",
      },
    },
  });

  const [formValidity, setFormValidity] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  let formElementsArray = [];

  for (let key in formControls) {
    formElementsArray.push({
      id: key,
      config: formControls[key],
    });
  }

  useEffect(() => {
    setFormControls((prevState) => ({
      ...prevState,
      password: {
        ...prevState.password,
        elementConfig: {
          ...prevState.password.elementConfig,
          type: passwordVisible ? "text" : "password",
        },
      },
    }));
  }, [passwordVisible]);

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
      const data = {
        email: formControls.email.value,
        password: formControls.password.value,
      };

    
      dispatch(loginuser(data))
        .then((res) => {
          console.log(res)
          if (res?.payload?.status === 200) {
            localStorage.setItem("user", res.payload.data.user);
            localStorage.setItem("token", res.payload.data.token.login.token);
            router.push('/account/profile');
          } else {
            console.log(res.payload);
            toast.error(res.payload.message || res.payload || res.error.message);

          }
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  /** Iterate over all the form elements and return it to the view */
  let formInputs = formElementsArray.map(({ id, config }) => (
    <FormInput
      key={id}
      type="auth"
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
    >
      {config.elementConfig.id === "password" && (
        <button
          onClick={(e) => togglePassword(e)}
          className={styles.btnVisibility}
        >
          <Svg symbol={passwordVisible ? "mask" : "unmask"} />
        </button>
      )}
    </FormInput>
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
        <h2>
          Welcome to <span>fair</span>mall!
        </h2>
      </div>
      <div className={styles.formPanel}>
        <h4>Sign In</h4>
        <p>Welcome back!</p>
        <form
          onSubmit={(e) => onSubmitFormHandler(e)}
          className={styles.formElement}
        >
          {formInputs}
          <div className={styles.formGroup}>
            <div className={styles.formCheckbox}>
              <input id="remember" type="checkbox" />
              <label>Remember me</label>
            </div>
            <button>Forgot password?</button>
          </div>
          <button {...btnConfig} className={styles.btnSubmit}>
            Sign In
          </button>
          <p>
            Don&#39;t have an account?{" "}
            <Link href="/signup">
              <a>Create one</a>
            </Link>
          </p>
        </form>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default Signin;
