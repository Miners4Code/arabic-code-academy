"use client";  

import { useState, useEffect } from "react"; 

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
useEffect(()=>{
const today=new Date();
const startDate = new Date("2024-10-22"); 
    const endDate = new Date("2024-10-25"); 

    if(today>=startDate && today<=endDate){
      setShowComponent(true);
    }
    else{
      setShowComponent(false);
    }
  },[]);
  if (!showComponent) {
    return null; 
  }
  return (
    <div>
     
      {showComponent && (
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
          <h1 style={{ color: "white", fontSize: "40px" }}>
            خصومات بنسبة 20% على الكورسات
          </h1>
        </div>
      )}
    </div>
  );
}
