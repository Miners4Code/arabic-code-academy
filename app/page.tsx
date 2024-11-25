import styles from "./page.module.css";
// import Feedback from "@/components/FeedbackCard/Feedback-card";
import Footer from "@/sections/Footer/Footer";
// import Products from "@/sections/Products/Products";
// import Resources from "@/sections/Resources/Resources";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Footer />
      </main>
    </div>
  );
}
