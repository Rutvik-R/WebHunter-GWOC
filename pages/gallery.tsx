import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Gallary.module.css";
function Gallary() {
  return (
    <div className="flex flex-col bg-black">
      <Header />
      <div
        className={`flex-grow flex max-md:flex-col max-md:items-center justify-center pb-16`}
      >
        <ul className={`max-md:m-auto md:ml-auto ${styles.slides}`}>
          <li id="slide1" className={styles.slides_li}>
            <img
              src="/gwoc-gallary1.jpg"
              alt=""
              className={styles.slides_img}
            />
          </li>
          <li id="slide2" className={styles.slides_li}>
            <img
              src="/gwoc-gallary2.jpg"
              alt=""
              className={styles.slides_img}
            />
          </li>
          <li id="slide3" className={styles.slides_li}>
            <img
              src="/gwoc-gallary3.jpg"
              alt=""
              className={styles.slides_img}
            />
          </li>
          <li id="slide4" className={styles.slides_li}>
            <img
              src="/gwoc-gallary4.jpg"
              alt=""
              className={styles.slides_img}
            />
          </li>
          <li id="slide5" className={styles.slides_li}>
            <img
              src="/gwoc-gallary5.jpg"
              alt=""
              className={styles.slides_img}
            />
          </li>
        </ul>

        <ul
          className={`md:flex md:flex-col md:leading-none flex ml-auto max-md:mt-6`}
        >
          <li className={styles.thumbnails_li}>
            <a href="#slide1" className={styles.thumbnails_a}>
              <img src="/gwoc-gallary1.jpg" className={styles.thumbnails_img} />
            </a>
          </li>
          <li className={styles.thumbnails_li}>
            <a href="#slide2" className={styles.thumbnails_a}>
              <img src="/gwoc-gallary2.jpg" className={styles.thumbnails_img} />
            </a>
          </li>
          <li className={styles.thumbnails_li}>
            <a href="#slide3" className={styles.thumbnails_a}>
              <img src="/gwoc-gallary3.jpg" className={styles.thumbnails_img} />
            </a>
          </li>
          <li className={styles.thumbnails_li}>
            <a href="#slide4" className={styles.thumbnails_a}>
              <img src="/gwoc-gallary4.jpg" className={styles.thumbnails_img} />
            </a>
          </li>
          <li className={styles.thumbnails_li}>
            <a href="#slide5" className={styles.thumbnails_a}>
              <img src="/gwoc-gallary5.jpg" className={styles.thumbnails_img} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Gallary;
