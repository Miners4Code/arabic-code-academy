"use client";  // This makes the component a Client Component

import { useState, useEffect } from "react";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date("2024-10-22"); // Start date: 22/10/2024
    const endDate = new Date("2024-10-25"); // End date: 25/10/2024

    // Check if today is within the range (inclusive)
    if (today >= startDate && today <= endDate) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, []); // Run only once when the component mounts

  if (!showComponent) {
    return null; // Do not render the component if it's outside the date range
  }

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#462576",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "23px", fontFamily: "Tajawal, sans-serif" }}>
        خصومات بنسبة 20% على الكورسات
      </h1>
    </div>
  );
}
