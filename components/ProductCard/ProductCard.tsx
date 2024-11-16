import { Box, Card, Text } from "@chakra-ui/react";
import ACAButton from "../ACAButton/ACAButton";
import ProductIconMore from "@/icons/ProductIconMore";
import ProductIconCart from "@/icons/ProductIconCart";
import ComingSoon from "./ComingSoon";
import CardIcon from "@/icons/CardIcon";

interface Props {
  soon: boolean;
}

const ProductCard: React.FC<Props> = ({ soon }) => {
  return (
    <Box
      boxShadow={"0px 1px 20px 1px #00000040"}
      borderRadius={"10px"}
      position={"relative"}
    >
      {soon && <ComingSoon />}
      <Card.Root overflow={"hidden"}>
        <Card.Header
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="aca_tomato.400"
          height={{
            base: "228px",
            md: "280px",
            lg: "286px",
          }}
          position="relative"
        >
          <CardIcon />
        </Card.Header>
        <Box
          paddingX={{
            base: "26px",
            md: "19px",
            lg: "28px",
          }}
          paddingTop={{
            lg: "40px",
            md: "27px",
            base: "19px",
          }}
          paddingBottom={{
            lg: "25px",
            md: "27px",
            base: "6px",
          }}
        >
          <Card.Body color={"aca_primary.400"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text as={"h3"}>اسم الكورس</Text>
              <Text as={"h3"}>$24</Text>
            </Box>
            <Box paddingBottom={"18px"}>
              <Text>اسم المدرب</Text>
              <Text>52 فيديو,24 ساعة و45 دقيقة</Text>
            </Box>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="center">
            <ACAButton
              text={"اقرأ المزيد"}
              weight={"500"}
              bg={"cyan"}
              size="sm"
              icon={<ProductIconMore />}
            />
            <ACAButton
              text={soon ? "احجز الان" : "شراء"}
              weight={"500"}
              bg={"tomato"}
              size="sm"
              icon={<ProductIconCart />}
            />
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};

export default ProductCard;
