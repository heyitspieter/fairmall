import Image from "next/image";
import { useState, useEffect } from "react";
import className from "classnames";
import Svg from "src/components/Svg/Svg";
import ReactPaginate from "react-paginate";
import styles from "src/containers/CategoryFeed/CategoryFeed.module.scss";

function CategoryFeed({ category, products }) {
  const [sortFocus, setSortFocus] = useState(false);

  const onBlur = () => setSortFocus(false);

  const onFocus = () => setSortFocus(true);

  return (
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
            <button className={className({ [styles.focus]: sortFocus })} onFocus={() => onFocus()}>
              <span>Sort by</span>
              <div>
                <Svg symbol="caret" className={className({ [styles.active]: sortFocus })} />
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
        {products && products?.length > 0 ? (
          products.map((product, idx) => (
            <div key={idx} className={styles.grid__item}>
              <figure>
                <Image loader={() => product.image} objectFit="cover" alt={product.name} src={product.image} layout="fill" />
              </figure>
              <h3>{product.name}</h3>
              <p>{product.price} NGN</p>
            </div>
          ))
        ) : (
          <div className={styles.heading} style={{marginTop: 100, marginBottom: 100}}>
            <p>
              No products in this category
            </p>
          </div>
        )

        }

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
  );
}

export default CategoryFeed;
