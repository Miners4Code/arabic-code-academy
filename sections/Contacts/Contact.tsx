import React from "react";
import { Box } from "@chakra-ui/react";
import PromoText from "../../components/PromoText/PromoText";
import ACAButton from "../../components/ACAButton/ACAButton";
import CustomIcon from "../../icons/Contacticon";

export default function Contact() {
  return (
    <Box
      className="box"
      bgImage={"url('/section3.png')"}
      backgroundPosition={{ base: "center", lg: "left" }}
      bgRepeat="no-repeat"
      paddingY="150px"
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", lg: "left" }}
      paddingLeft={{ base: "0px", lg: "150px" }}
    >
      <Box width={{ base: "80%", lg: "57%" }}>
        <PromoText
          text="أدوات تفاعلية وألعاب تعليمية"
          paragraph="تتميز الأكاديمية العربية للبرمجة بتطوير أدوات تفاعلية وألعاب تعليمية مبتكرة باستخدام أساليب التلعيب Gamification، مما يجعل عملية التعلم أكثر متعة وجاذبية. نقدم حلولاً مخصصة تلبي احتياجات المؤسسات والشركات، حيث نساعد في تصميم تجارب تعليمية تفاعلية تعزز من تفاعل المستخدمين وتحفزهم على التعلم بطرق غير تقليدية. سواء كنت تبحث عن تطوير مهارات فريق العمل أو تقديم تجربة تعليمية فريدة لعملائك، الأكاديمية العربية للبرمجة هي شريكك المثالي لتحقيق هذه الأهداف بنجاح."
          headingType="h2"
          fontType="primary"
        >
          <ACAButton
            text="تواصل معنا"
            bg="cyan"
            weight="600"
            size="lg"
            icon={<CustomIcon />}
          />
        </PromoText>
      </Box>
    </Box>
  );
}
