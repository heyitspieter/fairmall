import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "src/store/slices/products";
import { getCategories } from "src/store/slices/categories";
import { getInspirations } from "src/store/slices/inspirations";

export default function shop() {
  const dispatch = useDispatch()

  //fetch products 
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  const {products } = useSelector((state) => state.products)

  // fetch Categories
  useEffect(() => {
      dispatch(getCategories())
    }, [dispatch])
    const {  categories } = useSelector( (state) => state.categories)

     // fetch inspirations
     useEffect(() => {
      dispatch(getInspirations())
    }, [dispatch])
    const {  inspirations } = useSelector( (state) => state.inspirations)
  

  return (
    <BaseLayout title="Shop - Fairmall">
      <ShopFeed products={products}/>
      <Categories categories={categories} />
      {/* <Recommendations title="Featured Items" /> */}
      <Inspirations inspirations={inspirations} />
      <NewsLetter />
    </BaseLayout>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('https://fairmall-v1.herokuapp.com/api/v1/user/product')
//   // const data = await res.json()

//   // Pass data to the page via props
//   return { props: { 
//     products: await res.json(),
//   } }
// }
