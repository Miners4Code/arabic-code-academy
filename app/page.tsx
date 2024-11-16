import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px"
          }}
        >
          <ProductCard soon={true} />
        </div>
      </main>
    </div>
  );
}
