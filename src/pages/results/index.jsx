import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Product = ({ id, cover, title, price, toggle, isFavorite }) => {
  return (
    <>
      <svg
        title="SVG Heart Icon"
        viewBox="-15 -11 130 120"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns:ev="http://www.w3.org/2001/xml-events"
        className={styles.heart}
        onClick={() => toggle(id)}
      >
        <path
          d="
		 M 50 0
		 A 1 1 0 1 0 0 50 
		 L50 100  
		 L100 50 
		 A 1 1 0 1 0 50 0"
          strokeWidth="10px"
          fill={isFavorite ? "#1C2635" : "none"}
          stroke="#1C2635"
        />
      </svg>
      <div className={styles.productCover}>
        <img src={cover} alt="product cover" />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productPrice}>{"$" + price}</p>
      </div>
    </>
  );
};

const ResultsPage = ({ clear }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Set initial favorites state if localStorage has any data
    const localData = JSON.parse(localStorage.getItem("favorites"));
    const state = JSON.parse(localStorage.getItem("answers"));
    if (localData) setFavorites(localData);

    const fetchData = async () => {
      const data = await fetch(
        "https://jeval.com.au/collections/hair-care/products.json?page=1"
      );

      const { products } = await data.json();
      let recommended = [];

      for (let p of products) {
        if (p.tags.includes(state.qFirst)) {
          recommended.push(p);
          continue;
        }
        if (p.tags.includes(state.qSecond)) {
          recommended.push(p);
          continue;
        }
        if (p.tags.includes(state.qThird)) {
          recommended.push(p);
          continue;
        }
        if (p.tags.includes(state.qFourth)) {
          recommended.push(p);
          continue;
        }
        if (p.title.includes(state.qFifth)) {
          recommended.push(p);
        }
      }

      setProducts(
        recommended.sort((a, b) => {
          let aPrio = localData && localData.includes(a.id);
          let bPrio = localData && localData.includes(b.id);

          if (aPrio && !bPrio) {
            return -1;
          } else if (bPrio && !aPrio) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    };

    fetchData();
  }, []);

  // Adds the id to favorites state and updates localStorage
  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((pId) => pId !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

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
        <Link
          onClick={() => {
            clear({});
            localStorage.setItem("answers", JSON.stringify({}));
          }}
          to="/"
        >
          Retake the quiz
        </Link>
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
                <Product
                  id={p.id}
                  cover={p.images[0].src}
                  title={p.title}
                  price={p.variants[0].price}
                  toggle={toggleFavorite}
                  isFavorite={favorites.includes(p.id) ? true : false}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ResultsPage;
