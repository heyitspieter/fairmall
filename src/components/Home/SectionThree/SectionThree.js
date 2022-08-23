import Svg from "src/components/Svg/Svg";
import HomeCarousel from "src/containers/Home/HomeCarousel/HomeCarousel";

import styles from "src/components/Home/Home.module.scss";

function SectionThree({category}) {
  console.log(category)
  const items = [];
  const addItems = []
  category?.products.map((product) => {
    items.push({
      title: product.name,
      img: product.image
    })
    product?.additional_images.map((addImg) => {
      addItems.push({
        title: product.name,
        img: addImg
      })
    })
  })

  return (
    <>
      <section className={styles.section_3}>
        <div className={styles.heading}>
          <p>{category?.category?.description}</p>
        </div>
        <HomeCarousel items={items} config={{ outerSpacing: 25 }} />
        <HomeCarousel items={addItems.reverse()} config={{ outerSpacing: 25 }} />
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
