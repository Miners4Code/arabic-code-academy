import Exams from "@/sections/Examination/Exams";
import styles from "./page.module.css";
import EduTracks from "@/sections/EduTracks/EduTracks";
import Contact from "@/sections/Contacts/Contact";
import Feedback from "@/Card/Feedback-card";
import Products from "@/sections/Products/Products";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Exams />
        <EduTracks />
        <Contact />
        <Products />
        <Feedback />
      </main>
    </div>
  );
}
