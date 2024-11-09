import ACAButton from "@/components/ACAButton/ACAButton";
import PromoText from "@/components/PromoText/PromoText";
import CustomIcon from "@/icons/Chalkboard";
import { Box, Image } from "@chakra-ui/react";
import eduTrack from "@/assets/eduTrack.jpg";
import React from "react";
import { wrap } from "module";

interface Props {}

const EduTracks: React.FC<Props> = ({}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={{
        base: "column",
        md: "column",
        lg: "row",
      }}
      gap={"60px"}
      paddingX={{
        lg: "150px",
        md: "100px",
        base: "50px",
      }}
      paddingY={{
        base: "20px",
        md: "75px",
        lg: "70px",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ lg: "50%", md: "100%", base: "100%" }}
      >
        <Image
          width="100%px"
          height={"100%"}
          src={eduTrack.src}
          alt="Educational Tracks"
        />
      </Box>

      <Box
        width={{ lg: "50%" }}
        paddingY={{ lg: "35px", md: "50px", base: "35px" }}
      >
        <PromoText
          text="التجربة التعليمية في الأكاديمية العربية للبرمجة"
          paragraph="الأكاديمية العربية للبرمجة تقدم تجربة تعليمية مميزة وفريدة تركز على إنتاج فيديوهات تعليمية بعناصر تفاعلية وشاملة تناسب جميع الفئات العمرية والمستويات. نسعى لتمكين كل فرد من تعلم البرمجة بطريقة مبسطة وممتعة، مع مراعاة احتياجات المتعلمين وتقديم محتوى يلهمهم للتفوق والإبداع. سواء كنت مبتدئًا أو محترفًا، ستجد لدينا ما يلهمك ويطور مهاراتك في عالم البرمجة، مع دعم مستمر وموارد غنية تواكب أحدث التقنيات والأساليب التعليمية."
          headingType="h2"
          fontType="secondary"
        >
          <ACAButton
            text="المسارات التعليمية"
            icon={<CustomIcon />}
            bg="cyan"
            weight="900"
            size="lg"
          ></ACAButton>
        </PromoText>
      </Box>
    </Box>
  );
};

export default EduTracks;
