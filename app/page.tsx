import ExaminationSection from "@/sections/ExaminationSection";
import styles from "./page.module.css";
import EduTracks from "@/sections/EduTracks/EduTracks";
import Contact from "@/sections/section3/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ExaminationSection />
        <EduTracks />
        <Contact />
      </main>
    </div>
  );
}
