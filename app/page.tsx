import { Box, Button } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box padding={"20"}>
          <h1>الأكاديمية العربية لتعليم البرمجة</h1>
          <Button bg={"aca_cyan"}>تسجيل دخول</Button>
        </Box>
      </main>
    </div>
  );
}
