import Link from "next/link";
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
          We ensure that producers receive premium value for their wares thereby
          improving their livelihoods and stimulating economic growth in their
          communities.
        </p>
        <p>
          Be sure to take a look at our{" "}
          <Link href="/about-us">Terms of Use</Link> and{" "}
          <Link href="/about-us">Privacy Policy</Link>
        </p>
        <div className={styles.socials}>
          <h4>Stay In Touch</h4>
          <div className={styles.socials__flex}>
            <a
              rel="noreferrer"
              target="__blank"
              href="https://www.facebook.com/fairmallng"
            >
              <Svg symbol="facebook" />
            </a>
            <a
              rel="noreferrer"
              target="__blank"
              href="https://www.instagram.com/fairmallng/"
            >
              <Svg symbol="instagram" />
            </a>
            <a
              rel="noreferrer"
              target="__blank"
              href="https://twitter.com/Fairmallng?t=ARY51zykeEIWw3ZOEqBN9g&s=08"
            >
              <Svg symbol="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.list_1}>
          <h4>Details</h4>
          <ul>
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>Faqs</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.list_2}>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a>Terms of Use</a>
              </Link>
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
