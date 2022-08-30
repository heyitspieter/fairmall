import Head from "next/head";
import Image from "next/image";
import className from "classnames";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import formatToCurrency from "../../helpers/formatAmount";
import { addLineItem } from "../../store/slices/cartSlice";
import { getCategory } from "../../store/slices/categories";
import { addToFavorites } from "../../store/slices/favorites";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import { MaxAmount, MinAmount } from "../../utils/variable_amount";
import ProductModal from "../../components/Modals/ProductModal/ProductModal";
import CategoryFeedLoadingSkeleton from "src/components/UI/LoadingSkeletons/CategoryFeedLoadingSkeleton";

import shopStyles from "src/containers/ShopFeed/ShopFeed.module.scss";
import styles from "src/containers/CategoryFeed/CategoryFeed.module.scss";

function CategoryFeed() {
  const router = useRouter();

  const query = router.query;

  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    visibility: false,
  });
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState(null);

  const [viewProduct, setViewProduct] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [sortFocus, setSortFocus] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({});

  const { data, categoryProducts } = useSelector((state) => state.category);

  useEffect(() => {
    if (query?.slug) {
      dispatch(getCategory(query.slug));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setIsLoading(false);
      setCategory(data.category);
    }
  }, [data]);

  useEffect(() => {
    if (categoryProducts && categoryProducts.length) {
      setProducts(categoryProducts);
    }
  }, [categoryProducts]);

  const handleAddToCard = async (product) => {
    const lineItem = {
      product_id: product.id,
      variation_id: product.vatiation ? product.variation.id : null,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
      quantity: 1,
      total: product.price * 1,
    };
    dispatch(addLineItem(lineItem));
  };

  const handleFavorite = (product) => {
    let data = {
      product_id: product.id,
    };
    dispatch(addToFavorites(data))
      .then((res) => {
        if (res.payload.status === 200) {
          toast.success(res.payload.data.message);
        } else {
          toast.error(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const toggleModalHandler = (product) => {
    setViewProduct(product);
    setModal((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));
  };

  const onBlur = () => setSortFocus(false);

  const onFocus = () => setSortFocus(true);

  const breadcrumb = {
    id: category?.id,
    route: "/shop",
    value: category?.name,
  };

  if (isLoading) {
    return <CategoryFeedLoadingSkeleton />;
  }

  return (
    <>
      {modal && (
        <ProductModal
          product={selectedProduct}
          show={modal.visibility}
          close={toggleModalHandler}
        />
      )}
      <Head>
        <title>{category?.name}</title>
      </Head>
      <Breadcrumb item={breadcrumb} />
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>{category?.name}</p>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.toolbar__left}>
            <button>
              <span>Open filter</span>
              <Svg symbol="plus" />
            </button>
          </div>
          <div className={styles.toolbar__right}>
            <p>Showing {products?.length} items</p>
            <div className={styles.sortBox}>
              <div
                onClick={() => onBlur()}
                className={className({
                  [styles.sortOverlay]: true,
                  [styles.active]: sortFocus,
                })}
              ></div>
              <button
                className={className({ [styles.focus]: sortFocus })}
                onFocus={() => onFocus()}
              >
                <span>Sort by</span>
                <div>
                  <Svg
                    symbol="caret"
                    className={className({ [styles.active]: sortFocus })}
                  />
                </div>
                <div>
                  <a href="#">Price: Highest to Lowest</a>
                  <a href="#">Price: Lowest to Highest</a>
                  <a href="#">Popularity</a>
                  <a href="#">New Arrivals</a>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {products.map((product, i) => {
            const img = product.image;

            return (
              <div key={i} className={shopStyles.grid__item}>
                <figure>
                  {/* removed loader property & added path to domains list in next config file */}
                  <Image
                    objectFit="cover"
                    alt={product.name}
                    src={img}
                    layout="fill"
                  />
                  <div className={shopStyles.grid__item_options}>
                    {!product?.variation && (
                      <button onClick={() => handleAddToCard(product)}>
                        <span>Add to Basket</span>
                        <Svg symbol="shopping-basket" />
                      </button>
                    )}
                    <button
                      //  onClick={toggleModalHandler}
                      onClick={() => {
                        setSelectedProduct(product);
                        toggleModalHandler();
                        // singleProduct(product.id)
                      }}
                    >
                      <span>Quick View</span>
                      <Svg symbol="eye" />
                    </button>
                    {token !== null && (
                      <button onClick={() => handleFavorite(product)}>
                        <span>Save</span>
                        <Svg symbol="heart-outline" />
                      </button>
                    )}
                  </div>
                </figure>
                <h3>{product?.name}</h3>
                {product?.variation ? (
                  <p>
                    {formatToCurrency(MinAmount(product?.variation))} -{" "}
                    {formatToCurrency(MaxAmount(product?.variation))}
                  </p>
                ) : (
                  <p>{formatToCurrency(product?.price)}</p>
                )}
              </div>
            );
          })}
          {products.length <= 0 && (
            <div
              className={styles.heading}
              style={{ marginTop: 100, marginBottom: 100 }}
            >
              <p>No products in this category</p>
            </div>
          )}
        </div>
        {/*<div className={styles.pagination}>*/}
        {/*  <ReactPaginate*/}
        {/*    nextLabel={<Svg symbol="chevron" />}*/}
        {/*    onPageChange={handlePageClick}*/}
        {/*    pageRangeDisplayed={3}*/}
        {/*    marginPagesDisplayed={2}*/}
        {/*    pageCount={pageCount}*/}
        {/*    previousLabel={<Svg symbol="chevron" />}*/}
        {/*    pageClassName={styles.pagination__list}*/}
        {/*    pageLinkClassName="page-link"*/}
        {/*    previousClassName={styles.pagination__prev}*/}
        {/*    previousLinkClassName="page-link"*/}
        {/*    nextClassName="page-item"*/}
        {/*    nextLinkClassName={styles.pagination__next}*/}
        {/*    breakLabel="..."*/}
        {/*    breakClassName={styles.active}*/}
        {/*    breakLinkClassName={styles.active}*/}
        {/*    containerClassName={styles.pagination}*/}
        {/*    activeClassName={styles.active}*/}
        {/*    renderOnZeroPageCount={null}*/}
        {/*  />*/}
        {/*  /!* <button>First</button>*/}
        {/*  <button className={styles.pagination__prev}>*/}
        {/*    <Svg symbol="chevron" />*/}
        {/*  </button>*/}
        {/*  <div className={styles.pagination__list}>*/}
        {/*    <span role="button" className={styles.active}>*/}
        {/*      1*/}
        {/*    </span>*/}
        {/*    <span role="button">2</span>*/}
        {/*    <span role="button">3</span>*/}
        {/*    <span role="button">4</span>*/}
        {/*    <span>...</span>*/}
        {/*    <span role="button">10</span>*/}
        {/*  </div>*/}
        {/*  <button className={styles.pagination__next}>*/}
        {/*    <Svg symbol="chevron" />*/}
        {/*  </button>*/}
        {/*  <button>Last</button> *!/*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default CategoryFeed;
