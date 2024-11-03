import DiscountBanner from "../components/DiscountBanner/DiscountBanner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DiscountBanner
          text={"خصومات بنسبة 20% على الكورسات"}
          start={new Date("2024-10-19T18:00:00")}
          end={new Date("2024-10-23T18:00:00")}
        />
      </main>
    </div>
  );
}
