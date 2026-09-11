import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import catFace from "@/assets/cat-face.jpg";
import catAntiage from "@/assets/cat-antiage.jpg";
import catBright from "@/assets/cat-bright.jpg";
import catHair from "@/assets/cat-hair.jpg";
import ingredients from "@/assets/ingredients.jpg";

const CATEGORIES = [
  { title: "Уход за лицом", note: "Очищение, тонеры, сыворотки, кремы", image: catFace },
  { title: "Anti-Age", note: "Упругость, питание, восстановление", image: catAntiage },
  { title: "Осветление", note: "Ровный тон, сияние, против пигментации", image: catBright },
  { title: "Уход за волосами", note: "Против выпадения и укрепление", image: catHair },
];

const BRANDS = ["OHUI", "SEOLDAM", "OSHIAREE", "TOM-TIT-TOT", "RYO", "HWANYU", "и другие"];

export function Products({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative z-10 bg-card/70 pb-24 pt-8 backdrop-blur-sm sm:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="relative text-center">
          <p className="label-caps">Наши продукты</p>
          <h2 className="display-title mx-auto mt-4 max-w-2xl text-[2.1rem] sm:text-5xl">
            Премиальный уход для вашей красоты
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Мы тщательно отбираем лучшие корейские бренды, чтобы вы получали эффективные решения для вашей кожи и волос
          </p>
          <p className="script-note absolute -top-2 right-0 hidden text-right lg:block">
            More
            <br />
            than care ♡
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 90}>
              <article className="glass-card group h-full overflow-hidden rounded-[1.75rem] transition-transform duration-500 hover:-translate-y-1">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 pb-5 pt-4 sm:px-5">
                  <h3 className="display-title text-lg sm:text-xl">{category.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{category.note}</p>
                  <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-primary">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <p className="label-caps whitespace-nowrap">Популярные бренды</p>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="glass-card flex aspect-square items-center justify-center rounded-full px-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.12em] text-secondary-foreground sm:text-xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="glass-card grid overflow-hidden rounded-[2rem] md:grid-cols-2">
            <div className="order-2 px-7 py-9 sm:px-10 sm:py-12 md:order-1">
              <p className="label-caps">K-Beauty</p>
              <h3 className="display-title mt-4 text-3xl sm:text-4xl">
                Эффективные
                <br />
                ингредиенты
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Передовые технологии и натуральные компоненты для видимого результата
              </p>
              <button type="button" onClick={onStart} className="btn-rose mt-8 w-full sm:w-auto">
                Узнать больше
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={ingredients}
                alt="Капля сыворотки на розовом фоне"
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover md:h-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
