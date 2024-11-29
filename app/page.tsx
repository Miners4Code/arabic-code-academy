import ACAButton from "@/components/ACAButton/ACAButton";
import HeaderSlide from "@/components/HeaderSlide/HeaderSlide";
import CustomIcon from "@/icons/Chalkboard";

export default function Home() {
  const slideData = {
    background: "/headerImage1.jpg",
    description: "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
    sub_description1: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
    sub_description2: " وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني"
  };

  return (
    <HeaderSlide slide_data={slideData}>
      <ACAButton
            text="المسارات التعليمية"
            icon={<CustomIcon />}
            bg="cyan"
            weight="900"
            size="lg"
          />
    </HeaderSlide>
  );
}
