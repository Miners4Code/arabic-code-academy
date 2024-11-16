import styles from "./page.module.css";
import EduTracks from "@/sections/EduTracks/EduTracks";
import Contact from "@/sections/Contacts/Contact";
import Feedback from "@/Card/Feedback-card";
import Products from "@/sections/Products/Products";
import Exams from "@/sections/Examination/Exams";
import Resources from "@/sections/Resources/Resources";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Exams />
        <Resources />
        <EduTracks />
        <Contact />
        <Products />
        <Feedback />
      </main>
    </div>
  );
}
