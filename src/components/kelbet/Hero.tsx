import { ArrowRight, ArrowDown } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import heroProductsCutout from "@/assets/hero-products-cutout.png";
import heroWoman from "@/assets/hero-woman.png";

export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <header className="relative overflow-hidden pb-28 sm:pb-36">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-petal/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-64 h-80 w-80 rounded-full bg-accent/50 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-10 sm:pt-14">
        <div className="animate-rise text-center sm:text-left">
          <p className="display-title text-3xl tracking-[0.22em] text-primary sm:text-4xl">KELBET</p>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.42em] text-muted-foreground">Korean cosmetics</p>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="animate-rise" style={{ animationDelay: "120ms" }}>
            <span className="inline-flex items-center gap-3 rounded-full bg-card/80 px-5 py-2.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-secondary-foreground shadow-[var(--shadow-soft)]">
              <span aria-hidden className="text-base leading-none">
                🇰🇷
              </span>
              Оригинал из Кореи
            </span>

            <h1 className="display-title mt-7 text-[2.85rem] leading-[1.03] sm:text-6xl lg:text-[4.2rem]">
              Люксовая косметика
              <span className="block text-primary">из Южной Кореи</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Премиальный уход для вашей естественной красоты
            </p>

            <button type="button" onClick={onStart} className="btn-rose mt-9 w-full sm:w-auto">
              Подобрать уход
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>

          <div
            className="animate-rise relative mx-auto aspect-[4/5] w-full max-w-[34rem] lg:mx-0 lg:aspect-[5/6] lg:max-w-none"
            style={{ animationDelay: "220ms" }}
          >
            <div className="pointer-events-none absolute -inset-x-[13%] -bottom-[2%] -top-[5%] overflow-hidden [mask-image:radial-gradient(ellipse_48%_44%_at_52%_47%,black_34%,transparent_82%)]">
              <img
                src={heroProducts}
                alt="Премиальная корейская косметика на каменном подиуме среди цветов сакуры"
                width={1200}
                height={1408}
                className="h-full w-full scale-125 object-cover opacity-55 mix-blend-multiply"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-[6%] bottom-[4%] top-[2%] rounded-[50%] bg-petal/55 blur-3xl" />
            <img
              src={heroWoman}
              alt="Девушка KELBET с апельсинами"
              width={768}
              height={1024}
              className="animate-soft-float absolute inset-x-0 bottom-[2%] z-10 h-[98%] w-full object-contain object-bottom drop-shadow-[0_24px_34px_oklch(0.6_0.116_8/0.2)] lg:-left-[4%] lg:h-[108%] lg:w-[108%]"
            />
            <img
              src={heroProductsCutout}
              alt="Премиальная косметика KELBET"
              width={768}
              height={1024}
              className="pointer-events-none absolute -bottom-[4%] -left-[5%] z-20 h-[48%] w-[78%] object-contain object-bottom drop-shadow-[0_20px_24px_oklch(0.6_0.116_8/0.24)] sm:h-[52%] sm:w-[82%] lg:-left-[11%] lg:h-[60%] lg:w-[94%]"
            />
            <div className="pointer-events-none absolute -inset-x-[4%] bottom-0 z-30 h-[17%] bg-gradient-to-t from-background/85 via-background/25 to-transparent blur-sm" />
            <p className="script-note absolute right-1 top-[3%] z-40 hidden text-right sm:block lg:-right-3">
              Korean beauty
              <br />
              Real results ♡
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-[0.65rem] uppercase tracking-[0.34em] text-muted-foreground">Прокрутите вниз</p>
          <span className="h-10 w-px bg-border" />
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
            <ArrowDown className="h-4 w-4" strokeWidth={1.4} />
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute -bottom-1 left-0 right-0 h-24 rounded-t-[100%] bg-card/70 backdrop-blur-sm sm:h-32"
      />
    </header>
  );
}
