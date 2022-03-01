import validator from "validator";

export const updateObject = (oldObject, updatedObjectProperties) => {
  return {
    ...oldObject,
    ...updatedObjectProperties,
  };
};

export const checkFormValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.toString().trim().length !== 0 && isValid;
  }

  if (rules.isEmail) {
    isValid = validator.isEmail(value) && isValid;
  }

  if (rules.isMobilePhone) {
    isValid = validator.isMobilePhone(value, "en-NG") && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.minDate) {
    isValid = value >= new Date().toISOString().substr(0, 10) && isValid;
  }

  if (rules.maxDate) {
    isValid =
      value <=
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() + 3
        )
          .toISOString()
          .substring(0, 10) && isValid;
  }

  if (rules.min >= 0) {
    isValid = +value >= rules.min && isValid;
  }

  if (rules.max >= 0) {
    isValid = +value <= rules.max && isValid;
  }

  return isValid;
};

export const formatNumber = (num, fixed = false) => {
  if (num === 0) {
    return num + ".00";
  }

  let parts = fixed
    ? Math.abs(num).toFixed(2).toString().split(".")
    : num.toString().split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
};