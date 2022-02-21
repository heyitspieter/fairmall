import Image from "next/image";
import { useState } from "react";

import styles from "src/containers/NewsLetter/NewsLetter.module.scss";

function NewsLetter() {
  const [formValidity, setFormValidity] = useState(false);

  const [form, setForm] = useState({
    email: {
      value: "",
    },
  });

  const inputChangeHandler = (e) => {
    const value = e.target.value;

    let formIsValid = true;

    if (value.trim().toString().length <= 0) {
      formIsValid = false;
    }

    setFormValidity(formIsValid);

    setForm((prevState) => ({
      ...prevState,
      email: { ...prevState.email, value },
    }));
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    if (formValidity) {
      // Submit form here
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.spiralLeft}>
        <Image
          src="/svgs/spiral_pink.svg"
          width={361}
          height={364}
          alt="Spiral"
        />
      </div>
      <div className={styles.content}>
        <h2>
          Want to know when we’ve got new and exciting stuff in store for you?
        </h2>
        <form onSubmit={(e) => onSubmitFormHandler(e)} className={styles.form}>
          <label>Email Address</label>
          <input
            required
            type="email"
            value={form.email.value}
            placeholder="Enter your email address"
            onChange={(e) => inputChangeHandler(e)}
          />
          <button>Subscribe</button>
        </form>
      </div>
      <div className={styles.spiralRight}>
        <Image
          src="/svgs/spiral_pink.svg"
          width={361}
          height={364}
          alt="Spiral"
        />
      </div>
    </div>
  );
}

export default NewsLetter;
