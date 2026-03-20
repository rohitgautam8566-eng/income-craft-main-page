import React from "react";
import { Instagram, Youtube } from "lucide-react";
import styles from "./SocialFooter.module.css";

export default function SocialFooter() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Follow My Journey & Learn More</h2>
        <p className={styles.subtext}>
          See real content, insights, and behind-the-scenes of how digital products are built and sold.
        </p>

        <div className={styles.cardContainer}>
          <a
            href="https://www.instagram.com/rohitgautam.ofc?igsh=MWllbWc2NXQ2YXh2aw=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <div className={styles.iconWrapper}>
              <Instagram size={28} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Instagram</h3>
              <p className={styles.cardDesc}>
                Daily content, reels, and real insights on digital products & income.
              </p>
              <span className={styles.ctaText}>Follow on Instagram &rarr;</span>
            </div>
          </a>

          <a
            href="https://youtube.com/@rohitgautamofc?si=CEcBWnSME_0lIuPY"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
          >
            <div className={styles.iconWrapper}>
              <Youtube size={28} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>YouTube</h3>
              <p className={styles.cardDesc}>
                Step-by-step videos, breakdowns, and deep strategies for building online income.
              </p>
              <span className={styles.ctaText}>Watch on YouTube &rarr;</span>
            </div>
          </a>
        </div>

        <p className={styles.trustText}>
          Seen by <strong>10,000+ people</strong> across platforms
        </p>
      </div>
    </section>
  );
}
