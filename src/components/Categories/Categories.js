import Image from "next/image";
import { useRouter } from "next/router";
import styles from "src/components/Categories/Categories.module.scss";
import Link from "next/link";

function Categories({categories}) {

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
                <Link href="category/[slug]" as={`category/${category.slug}`}>
                  <button>shop now</button>
                </Link>
              </div>
              <Image src="/images/category_1.png" objectFit="cover" alt="Category 1" layout="fill" />
            </figure>
          ))}
      </div>
    </div>
  );
}

export default Categories;
