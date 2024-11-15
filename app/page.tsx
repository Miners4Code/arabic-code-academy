import ArabicLang from "@/sections/ArabicLang/ArabicLang";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ArabicLang />
      </main>
    </div>
  );
}
