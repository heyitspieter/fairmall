import Image from "next/image";
import { useRouter } from "next/router";

import styles from "src/components/Categories/Categories.module.scss";

function Categories({ categories }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Categories</p>
      </div>
      <div className={styles.grid}>
        {categories &&
          categories.map((category, idx) => (
            <figure key={idx}>
              <div>
                <p>{category.name}</p>
                <button onClick={() => router.push("/category/furniture")}>shop now</button>
              </div>
              <Image src="/images/category_1.png" objectFit="cover" alt="Category 1" layout="fill" />
            </figure>
          ))}
        {/* <figure>
          <div>
            <p>Household Items</p>
            <button onClick={() => router.push("/category/household-items")}>
              shop now
            </button>
          </div>
          <Image
            src="/images/category_2.png"
            objectFit="cover"
            alt="Category 2"
            layout="fill"
          />
        </figure>
        <figure>
          <div>
            <p>Arts & Crafts</p>
            <button>shop now</button>
          </div>
          <Image
            src="/images/category_3.png"
            objectFit="cover"
            alt="Category 3"
            layout="fill"
          />
        </figure>
        <figure>
          <div>
            <p>Fashion</p>
            <button>shop now</button>
          </div>
          <Image
            src="/images/category_4.png"
            objectFit="cover"
            alt="Category 4"
            layout="fill"
          />
        </figure>
        <figure>
          <div>
            <p>Food Items</p>
            <button>shop now</button>
          </div>
          <Image
            src="/images/category_5.png"
            objectFit="cover"
            alt="Category 5"
            layout="fill"
          />
        </figure> */}
      </div>
    </div>
  );
}

export default Categories;
