import styles from "./page.module.css";
import Feedback from "@/Card/Feedback-card";
import Products from "@/sections/Products/Products";
import Resources from "@/sections/Resources/Resources";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Resources />
        <Products />
        <Feedback />
      </main>
    </div>
  );
}
