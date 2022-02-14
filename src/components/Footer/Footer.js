import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Footer/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.col}>
        <div className={styles.emblem}>
          <div>
            <Image src="/logo.svg" width={44} height={44} alt="Fairmall" />
          </div>
          <span>
            fair<span>mall</span>
          </span>
        </div>
        <p>
          Creating an ecosystem of considerate and conscious commerce, ensuring
          fairness to all.
        </p>
        <p>
          Be sure to take a look at our <a href="#">Terms of Use</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
        <div className={styles.socials}>
          <h4>Stay In Touch</h4>
          <div className={styles.socials__flex}>
            <button>
              <Svg symbol="facebook" />
            </button>
            <button>
              <Svg symbol="instagram" />
            </button>
            <button>
              <Svg symbol="twitter" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.list_1}>
          <h4>Details</h4>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Faqs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.list_2}>
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.col}>
        <h4>Join Our Newsletter</h4>
        <form>
          <label>Get info on our deals and offers</label>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className={styles.col}>
        <p>Copyright © 2022 Fairmall. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
