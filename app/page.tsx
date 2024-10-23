"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css"
export default function Home() {
  const [show, setShow] = useState(false)
  const startDate = new Date("2024-10-20")
  const endDate = new Date("2024-10-25")
  const currentDate = new Date()
  useEffect(() => {
    if (currentDate >= startDate && currentDate < endDate) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])
  return (
    <div>
      {
        show &&
        <div
          style={{
            background: "#4e40a8",
            textAlign: "center",
            padding: "32px",
            color: "white"
          }}>
          <h3 className={styles.heading}>
            خصومات بنسبة 20% على كل الكورسات
          </h3>
        </div>
      }
    </div>
  );
}
