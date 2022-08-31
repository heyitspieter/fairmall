import { useRef } from "react";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { CSSTransition } from "react-transition-group";

import styles from "src/components/AuthPrompt/AuthPrompt.module.scss";

function AuthPrompt({ visible }) {
  const ref = useRef();

  const router = useRouter();

  const animConfig = {
    nodeRef: ref,
    mountOnEnter: true,
    unmountOnExit: true,
    in: visible,
    timeout: {
      enter: 300,
      exit: 300,
    },
    classNames: {
      enter: "",
      enterActive: "",
      exit: "",
      exitActive: "",
    },
  };

  return (
    <CSSTransition config={animConfig}>
      <div ref={ref} className={styles.container}>
        <div className={styles.icon}>
          <Svg symbol="person" />
        </div>
        <div className={styles.title}>
          <h2>Create a new account</h2>
          <p>Get the best experience with a fairmall account.</p>
        </div>
        <div className={styles.action}>
          <button>Later</button>
          <button onClick={() => router.push("/signup")}>Create Account</button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default AuthPrompt;
