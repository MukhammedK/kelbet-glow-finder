import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Hero } from "@/components/kelbet/Hero";
import { Products } from "@/components/kelbet/Products";
import { Quiz } from "@/components/kelbet/Quiz";
import { FinalCta } from "@/components/kelbet/FinalCta";
import { Reviews } from "@/components/kelbet/Reviews";
import { Footer } from "@/components/kelbet/Footer";
import { Petals } from "@/components/kelbet/Petals";
import { emptyQuiz, type QuizState } from "@/components/kelbet/quiz-data";

const title = "KELBET — люксовая косметика из Южной Кореи";
const description =
  "Премиальный корейский уход KELBET: OHUI, SEOLDAM, TOM-TIT-TOT, RYO. Пройдите подбор ухода и получите персональную подборку в WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const QUIZ_ID = "quiz";

function Index() {
  const [quiz, setQuiz] = useState<QuizState>(emptyQuiz);

  const scrollToQuiz = useCallback(() => {
    document.getElementById(QUIZ_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Petals />
      <Hero onStart={scrollToQuiz} />
      <Products onStart={scrollToQuiz} />
      <Quiz id={QUIZ_ID} state={quiz} setState={setQuiz} />
      <FinalCta state={quiz} />
      <Reviews />
      <Footer />
    </main>
  );
}
