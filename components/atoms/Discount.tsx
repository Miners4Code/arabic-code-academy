import React from "react";

interface Props {
  text?: string;
  startingDate?: Date;
  endingDate?: Date;
}
const today = new Date();
const Discount: React.FC<Props> = ({
  text = "خصومات بنسبة 20% على الكورسات",
  startingDate = new Date("2024-10-01"),
  endingDate = new Date("2024-10-23"),
}) => {
  const isInDiscountPeriod = today >= startingDate && today <= endingDate;

  return isInDiscountPeriod ? (
    <div style={{textAlign:"center",padding:"30px",backgroundColor: "#462576", color: "#fff"}}>
      {text}
    </div>
    
  ) : null;
};

export default Discount;
