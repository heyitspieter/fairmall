import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "src/store/slices/categories";
import CategoriesLoadingSkeleton from "src/components/UI/LoadingSkeletons/CategoriesLoadingSkeleton";

import styles from "src/components/Categories/Categories.module.scss";

function Categories() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { categories, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories && categories?.length) {
      setIsLoading(false);
    }
  }, [categories]);

  if (isLoading) {
    return <CategoriesLoadingSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Categories</p>
      </div>
      <div className={styles.grid}>
        {categories.map((category, idx) => (
          <figure key={idx}>
            <div>
              <p>{category.name}</p>
              <button onClick={() => router.push(`/category/${category.slug}`)}>
                shop now
              </button>
            </div>
            <Image
              src="/images/category_1.png"
              objectFit="cover"
              alt="Category 1"
              layout="fill"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Categories;
