import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const ResultsPage = ({ state }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://jeval.com.au/collections/hair-care/products.json?page=1"
      );

      const res = await data.json();

      setProducts(res.products.slice(25, 30));
      console.log(res.products);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <h1>Build your everyday self care routine.</h1>
        <p>
          Perfect for if you{"'"}re looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </p>
        <Link to="/">Retake the quiz</Link>
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.swiperContainer}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={36}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiperFirst}>
            <div className={styles.firstContent}>
              <h2>Daily routine</h2>
              <p>
                Perfect for if you{"'"}re looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </p>
            </div>
          </SwiperSlide>
          {products.map((p) => {
            return (
              <SwiperSlide className={styles.slide} key={p.id}>
                <svg
                  title="SVG Heart Icon"
                  viewBox="-15 -11 130 120"
                  width="150"
                  height="150"
                  className={styles.heart}
                >
                  <path
                    d="
		 M 50 0,
		 A 1 1 0 1 0 0 50, 
		 L50,100, 
		 L100,50,
		 A 1 1 0 1 0 50 0"
                    strokeWidth="10px"
                    fill="transparent"
                    stroke="black"
                  />
                </svg>
                <div className={styles.productCover}>
                  <img src={p.images[0].src} alt="product cover" />
                </div>
                <div className={styles.productDetails}>
                  <h2 className={styles.productTitle}>{p.title}</h2>
                  <p className={styles.productPrice}></p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ResultsPage;
