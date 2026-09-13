import review01 from "@/assets/reviews/review-01.jpeg.asset.json";
import review02 from "@/assets/reviews/review-02.jpeg.asset.json";
import review03 from "@/assets/reviews/review-03.jpeg.asset.json";
import review04 from "@/assets/reviews/review-04.jpeg.asset.json";
import review05 from "@/assets/reviews/review-05.jpeg.asset.json";
import review06 from "@/assets/reviews/review-06.jpeg.asset.json";
import review07 from "@/assets/reviews/review-07.jpeg.asset.json";
import review08 from "@/assets/reviews/review-08.jpeg.asset.json";
import review09 from "@/assets/reviews/review-09.jpeg.asset.json";
import review10 from "@/assets/reviews/review-10.jpeg.asset.json";

export type ReviewPhoto = {
  src: string;
  alt: string;
};

export const reviewPhotos: ReviewPhoto[] = [
  { src: review01.url, alt: "Результат ухода KELBET до и после" },
  { src: review02.url, alt: "Отзыв клиента KELBET в WhatsApp" },
  { src: review03.url, alt: "Результат клиентки после ухода KELBET" },
  { src: review04.url, alt: "Фотография результата ухода за кожей" },
  { src: review05.url, alt: "Сияющая кожа после ухода KELBET" },
  { src: review06.url, alt: "Отзыв о результатах ухода KELBET" },
  { src: review07.url, alt: "Благодарность клиента за подбор ухода" },
  { src: review08.url, alt: "Отзыв клиента о доверии к KELBET" },
  { src: review09.url, alt: "Отзыв о солнцезащитном уходе" },
  { src: review10.url, alt: "Результат ухода против пигментации" },
];