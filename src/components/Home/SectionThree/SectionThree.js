import Svg from "src/components/Svg/Svg";
import HomeCarousel from "src/containers/Home/HomeCarousel/HomeCarousel";

import styles from "src/components/Home/Home.module.scss";

function SectionThree() {
  const items = [
    {
      title: "Slide 1",
      img: "/images/slide-1.png",
    },
    {
      title: "Slide 2",
      img: "/images/slide-2.png",
    },
    {
      title: "Slide 3",
      img: "/images/slide-3.png",
    },
    {
      title: "Slide 4",
      img: "/images/slide-4.png",
    },
    {
      title: "Slide 5",
      img: "/images/slide-5.png",
    },
    {
      title: "Slide 6",
      img: "/images/slide-6.png",
    },
    {
      title: "Slide 7",
      img: "/images/slide-7.png",
    },
    {
      title: "Slide 8",
      img: "/images/slide-8.png",
    },
    {
      title: "Slide 9",
      img: "/images/slide-4.png",
    },
    {
      title: "Slide 10",
      img: "/images/slide-6.png",
    },
  ];

  return (
    <>
      <section className={styles.section_3}>
        <div className={styles.heading}>
          <p>World Class Furniture</p>
        </div>
        <HomeCarousel items={items} />
        <HomeCarousel items={items} config={{ outerSpacing: 25 }} />
      </section>
      <style jsx global>
        {`
          .rec-carousel-item {
            flex: 0 0 18.2rem;
          }

          .${styles.gutter} .rec-swipable > *:not(:last-child) {
            margin-right: 0;
            margin-left: 2.7rem;
          }

          .${styles.gutter} .rec-swipable > *:last-child {
            margin: 0 2.7rem;
          }

          .${styles.gutter} .rec-swipable > * {
            scroll-snap-align: end;
            transform-origin: center center;
          }
        `}
      </style>
    </>
  );
}

export default SectionThree;
