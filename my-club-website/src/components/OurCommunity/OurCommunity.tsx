import React from "react";
import styles from "./OurCommunity.module.css";

import img1 from '../../../public/images/CommunityImages/img1.jpg';
import img2 from '../../../public/images/CommunityImages/img2.jpg';
import img3 from '../../../public/images/CommunityImages/img3.jpg';
import img4 from '../../../public/images/CommunityImages/img4.jpg';
import img5 from '../../../public/images/CommunityImages/img5.jpg';
import img6 from '../../../public/images/CommunityImages/img6.jpg';
import img7 from '../../../public/images/CommunityImages/img7.jpg';
import img8 from '../../../public/images/CommunityImages/img8.jpg';
import img9 from '../../../public/images/CommunityImages/img9.jpg';
import img10 from '../../../public/images/CommunityImages/img10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const OurCommunity: React.FC = () => {
    return (
      <section className={styles.carouselSection}>
        <h2 className={styles.header}>Join Our Community</h2>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...images, ...images].map((img, idx) => (
              <div className={styles.carouselItem} key={idx}>
                <img src={img} alt={`Community ${idx + 1}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default OurCommunity;
