import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { updateObject, checkFormValidity } from "src/helpers";
import FormInput from "src/components/Form/FormInput/FormInput";
import { toast } from "react-toastify";

import formStyles from "styles/modules/Form.module.scss";
import styles from "src/containers/Profile/Profile.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "src/store/slices/user";
import LoadingOverlay from "react-loading-overlay";
import { Country, State, City } from "country-state-city";
import { FORMAT_STATE_NAME } from "src/utils/statename_formatter";

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const { userData, loading } = useSelector((state) => state.user);
  console.log("====================================");
  console.log(userData);
  console.log("====================================");

  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState(null);
  const [states, setStates] = useState([{ text: "Select a state", value: "" }]);
  const [cities, setCities] = useState([{ text: "Select a city", value: "" }]);

  useEffect(() => {
    let allCountries = [];
    const getCountries = Country.getAllCountries();
    getCountries.map((country, idx) => {
      allCountries.push({
        value: country.isoCode,
        text: country.name,
      });
    });
    allCountries.unshift({ text: "Select a country", value: "" });
    setCountries(allCountries);
    formControls["country"].elementConfig.options = allCountries.length > 0 ? allCountries : "Loading";
  }, []);

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
      value: userData?.user?.firstname,
      validation: {
        required: true,
      },
      valid: userData?.user?.firstname ? true : false,
      touched: userData?.user?.firstname ? true : false,
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
      value: userData?.user?.lastname,
      validation: {
        required: true,
      },
      valid: userData?.user?.lastname ? true : false,
      touched: userData?.user?.lastname ? true : false,
      error: {
        message: "Last name is required",
      },
    },
    email: {
      label: {
        title: "E-Mail",
        htmlFor: "email",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "email",
        id: "email",
        placeholder: "Enter your E-Mail",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: userData?.user?.email,
      validation: {
        required: true,
      },
      valid: userData?.user?.email ? true : false,
      touched: userData?.user?.email ? true : false,
      error: {
        message: "E-Mail is required",
      },
    },
    phone: {
      label: {
        title: "Phone number",
        htmlFor: "phone",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "phone",
        placeholder: "Enter your phone number",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: userData?.user?.phone,
      validation: {
        required: true,
        isMobile: true,
      },
      valid: userData?.user?.phone ? true : false,
      touched: userData?.user?.phone ? true : false,
      error: {
        message: "Phone number is required",
      },
    },
    address1: {
      label: {
        title: "Address 1",
        htmlFor: "address1",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "address1",
        placeholder: "Enter your delivery address",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: userData?.user?.address1,
      validation: {
        required: true,
      },
      valid: userData?.user?.address1 ? true : false,
      touched: userData?.user?.address1 ? true : false,
      error: {
        message: "Address is required",
      },
    },
    address2: {
      label: {
        title: "Address 2",
        htmlFor: "address2",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "address2",
        placeholder: "Enter your delivery address",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: userData?.user?.address2 || "",
      validation: {
        required: false,
      },
      valid: true,
      touched: true,
      error: {
        message: "Address is required",
      },
    },
    country: {
      label: {
        title: "Country",
        htmlFor: "country",
        classes: [],
      },
      elementType: "select",
      elementConfig: {
        id: "country",
        options: [{ text: "Select a country", value: "" }],
        selected: true,
      },
      elementClasses: [formStyles.formSelect],
      parentClasses: [styles.formGroup],
      value: userData?.user?.country,
      validation: {
        required: true,
      },
      valid: userData?.user?.country ? true : false,
      touched: userData?.user?.country ? true : false,
      error: {
        message: "Country is required",
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
        options: states,
      },
      elementClasses: [formStyles.formSelect],
      parentClasses: [styles.formGroup],
      value: userData?.user?.state,
      validation: {
        required: true,
      },
      valid: userData?.user?.state ? true : false,
      touched: userData?.user?.state ? true : false,
      error: {
        message: "State is required",
      },
    },
    city: {
      label: {
        title: "City",
        htmlFor: "city",
        classes: [],
      },
      elementType: "select",
      elementConfig: {
        id: "city",
        options: cities,
      },
      elementClasses: [formStyles.formSelect],
      parentClasses: [styles.formGroup],
      value: userData?.user?.city,
      validation: {
        required: true,
      },
      valid: userData?.user?.city ? true : false,
      touched: userData?.user?.city ? true : false,
      error: {
        message: "City is required",
      },
    },
    postcode: {
      label: {
        title: "Postcode",
        htmlFor: "postcode",
        classes: [],
      },
      elementType: "input",
      elementConfig: {
        type: "text",
        id: "postcode",
        placeholder: "Enter your postcode",
      },
      elementClasses: [formStyles.formInput],
      parentClasses: [styles.formGroup],
      value: userData?.user?.postcode,
      validation: {
        required: true,
      },
      valid: userData?.user?.postcode ? true : false,
      touched: userData?.user?.postcode ? true : false,
      error: {
        message: "Postcode is required",
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
        valid: checkFormValidity(event.target.value, formControls[formControlKey].validation),
        touched: true,
      }),
    });

    let formIsValid = true;

    for (let key in updatededFormControls) {
      formIsValid = updatededFormControls[key].valid && formIsValid;
    }

    if (formControlKey === "country") {
      handleCountryChange(event.target.value);
    }

    if (formControlKey === "state") {
      handleStateChange(event.target.value);
    }

    setFormControls(updatededFormControls);
    setFormValidity(formIsValid);
  };

  const handleCountryChange = (value) => {
    let allStates = [];
    State.getStatesOfCountry(value).map((state, idx) => {
      let stateName = state.name;
      stateName = FORMAT_STATE_NAME(stateName);
      allStates.push({
        value: state.isoCode,
        text: stateName,
      });
    });
    allStates.unshift({ text: "Select a state", value: "" });
    setCountryCode(value);
    setStates(allStates);
    formControls["state"].elementConfig.options = allStates.length > 0 ? allStates : "Loading";
  };

  const handleStateChange = (value) => {
    let allCities = [];
    City.getCitiesOfState(countryCode, value).map((state, idx) => {
      allCities.push({
        value: state.name,
        text: state.name,
      });
    });
    allCities.unshift({ text: "Select a city", value: "" });
    setStates(allCities);
    formControls["city"].elementConfig.options = allCities.length > 0 ? allCities : "Loading";
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
        firstname: formControls.firstname.value,
        lastname: formControls.lastname.value,
        phone: formControls.phone.value,
        address1: formControls.address1.value,
        address2: formControls.address2.value,
        country: Country.getCountryByCode(formControls.country.value).name,
        state: FORMAT_STATE_NAME(State.getStateByCode(formControls.state.value).name),
        city: formControls.city.value,
        postcode: formControls.postcode.value,
      };
      dispatch(updateProfile(data))
        .then((res) => {
          if (res.payload.status === 200) {
            console.log("====================================");
            console.log(res);
            console.log("====================================");
            toast.success(res.payload.data.message);
          }
        })
        .catch((err) => console.log(err));
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
      <LoadingOverlay active={loading} spinner text={"Loading..."}>
        <div className={spiralLeft}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
        <div className={styles.heading}>
          <p>Profile</p>
        </div>
        <div className={styles.formPanel}>
          <form className={styles.formElement}>
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
                <button {...btnConfig} onClick={onSubmitFormHandler} className={styles.btnSubmit}>
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
      </LoadingOverlay>
    </div>
  );
}

export default Profile;
