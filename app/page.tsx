import styles from "./page.module.css";
import Navbar from "@/sections/Navbar/Navbar"
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Navbar />
      </main>
    </div>
  );
}
