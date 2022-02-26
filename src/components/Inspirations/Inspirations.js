import Image from "next/image";

import styles from "src/components/Inspirations/Inspirations.module.scss";

function Inspirations() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.grid}>
        <figure>
          <Image
            src="/images/inspo-1.png"
            objectFit="cover"
            alt="Slide 1"
            layout="fill"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-2.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-3.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-4.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-5.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-6.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-7.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-8.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-9.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-10.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-11.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-12.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-13.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
      </div>
    </div>
  );
}

export default Inspirations;
