import { ArrowRight } from "lucide-react";
import finalImage from "@/assets/final-cta.jpg";
import { Reveal } from "./Reveal";
import { whatsAppLink, type QuizState } from "./quiz-data";

export function FinalCta({ state }: { state: QuizState }) {
  return (
    <section className="relative z-10 overflow-hidden pb-20 pt-4 sm:pb-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="display-title text-[2.4rem] leading-[1.05] sm:text-6xl">
                Ваша красота начинается
                <span className="block text-primary">с правильного ухода</span>
              </h2>
              <a
                href={whatsAppLink(state)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose mt-9 w-full text-center sm:w-auto"
              >
                Получить подбор
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-lift)]">
              <img
                src={finalImage}
                alt="Корейская косметика на каменных подиумах среди цветущей сакуры"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
