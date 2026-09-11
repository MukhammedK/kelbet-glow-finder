import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplet,
  Gem,
  Heart,
  Leaf,
  Sparkles,
  Sun,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import {
  CONCERNS,
  GOALS,
  RESULT_PRODUCTS,
  ROUTINES,
  SKIN_TYPES,
  labelFor,
  whatsAppLink,
  type FaceOption,
  type QuizState,
} from "./quiz-data";

const STEPS = ["Тип кожи", "Проблемы", "Цель ухода", "Результат"];

const GOAL_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  droplet: Droplet,
  sun: Sun,
  leaf: Leaf,
  gem: Gem,
  wind: Wind,
  heart: Heart,
};

function FaceCard({
  option,
  selected,
  onSelect,
}: {
  option: FaceOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border bg-card/80 text-left transition-all duration-300",
        selected
          ? "scale-[1.02] border-primary/70 shadow-[var(--shadow-glow)]"
          : "border-border/70 shadow-[var(--shadow-soft)] hover:-translate-y-0.5",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={option.image}
          alt={option.title}
          loading="lazy"
          width={512}
          height={640}
          className="h-full w-full object-cover"
        />
        {selected && (
          <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Check className="h-4 w-4" strokeWidth={2.2} />
          </span>
        )}
      </div>
      <div className="px-3 pb-4 pt-3">
        <h4 className="text-sm font-semibold leading-tight text-foreground sm:text-base">{option.title}</h4>
        <p className="mt-1.5 text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">{option.note}</p>
      </div>
    </button>
  );
}

export function Quiz({
  state,
  setState,
  id,
}: {
  state: QuizState;
  setState: (updater: (prev: QuizState) => QuizState) => void;
  id: string;
}) {
  const [step, setStep] = useState(0);

  const toggle = (key: "concerns" | "goals", value: string) =>
    setState((prev) => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value],
    }));

  const canContinue =
    (step === 0 && Boolean(state.skinType)) ||
    (step === 1 && state.concerns.length > 0) ||
    (step === 2 && state.goals.length > 0) ||
    (step === 3 && Boolean(state.routine));

  const progressIndex = Math.min(step, 3);

  const goNext = () => setStep((current) => Math.min(current + 1, 4));
  const goBack = () => setStep((current) => Math.max(current - 1, 0));

  return (
    <section id={id} className="relative z-10 scroll-mt-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal className="relative text-center">
          <p className="label-caps">Подберите свой уход</p>
          <h2 className="display-title mx-auto mt-4 max-w-xl text-[2.1rem] sm:text-5xl">Узнайте свою кожу лучше</h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ответьте на несколько вопросов, и мы поможем подобрать уход именно для вас
          </p>
          <p className="script-note absolute -top-3 right-0 hidden text-right lg:block">
            Your Skin Journey
            <br />
            Starts Here ♡
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-4 gap-1.5 sm:gap-3">
          {STEPS.map((label, index) => {
            const active = index === progressIndex && step < 4;
            const done = index < progressIndex || step === 4;
            return (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500",
                    active && "scale-110 border-primary bg-primary text-primary-foreground",
                    done && !active && "border-primary/50 bg-primary/12 text-primary",
                    !active && !done && "border-border bg-card/70 text-muted-foreground",
                  )}
                >
                  {done && !active ? <Check className="h-3.5 w-3.5" strokeWidth={2.4} /> : index + 1}
                </span>
                <span
                  className={cn(
                    "text-[0.62rem] leading-tight transition-colors sm:text-xs",
                    active ? "font-semibold text-foreground" : "text-muted-foreground",
                  )}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="glass-card mt-8 rounded-[2rem] px-4 py-8 sm:px-8 sm:py-10">
          {step === 0 && (
            <div key="step-0" className="animate-step">
              <p className="label-caps">Шаг 1 из 4</p>
              <h3 className="display-title mt-3 text-2xl sm:text-4xl">Какой у вас тип кожи?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Выберите тот, который больше всего вам подходит</p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {SKIN_TYPES.map((option) => (
                  <FaceCard
                    key={option.id}
                    option={option}
                    selected={state.skinType === option.id}
                    onSelect={() => setState((prev) => ({ ...prev, skinType: option.id }))}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div key="step-1" className="animate-step">
              <p className="label-caps">Шаг 2 из 4</p>
              <h3 className="display-title mt-3 text-2xl sm:text-4xl">Что вас беспокоит?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Выберите всё, что вам подходит</p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {CONCERNS.map((option) => (
                  <FaceCard
                    key={option.id}
                    option={option}
                    selected={state.concerns.includes(option.id)}
                    onSelect={() => toggle("concerns", option.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div key="step-2" className="animate-step">
              <p className="label-caps">Шаг 3 из 4</p>
              <h3 className="display-title mt-3 text-2xl sm:text-4xl">Какого результата вы хотите?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Выберите то, чего хотите добиться от ухода</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {GOALS.map((goal) => {
                  const Icon = GOAL_ICONS[goal.icon] ?? Sparkles;
                  const selected = state.goals.includes(goal.id);
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggle("goals", goal.id)}
                      aria-pressed={selected}
                      className={cn(
                        "flex items-center gap-4 rounded-[1.35rem] border bg-card/80 px-4 py-4 text-left transition-all duration-300",
                        selected
                          ? "scale-[1.01] border-primary/70 bg-secondary/60 shadow-[var(--shadow-glow)]"
                          : "border-border/70 hover:-translate-y-0.5",
                      )}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.4} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold sm:text-base">{goal.title}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{goal.note}</span>
                      </span>
                      <span
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                          selected ? "border-primary bg-primary text-primary-foreground" : "border-border",
                        )}
                      >
                        {selected && <Check className="h-3.5 w-3.5" strokeWidth={2.4} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div key="step-3" className="animate-step">
              <p className="label-caps">Шаг 4 из 4</p>
              <h3 className="display-title mt-3 text-2xl sm:text-4xl">Какой уход вам подходит?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Выберите комфортный для вас формат ухода</p>

              <div className="mt-7 grid gap-4">
                {ROUTINES.map((routine) => {
                  const selected = state.routine === routine.id;
                  return (
                    <button
                      key={routine.id}
                      type="button"
                      onClick={() => setState((prev) => ({ ...prev, routine: routine.id }))}
                      aria-pressed={selected}
                      className={cn(
                        "flex items-center justify-between gap-4 rounded-[1.5rem] border bg-card/80 px-6 py-6 text-left transition-all duration-300",
                        selected
                          ? "scale-[1.01] border-primary/70 bg-secondary/60 shadow-[var(--shadow-glow)]"
                          : "border-border/70 hover:-translate-y-0.5",
                      )}
                    >
                      <span className="min-w-0">
                        <span className="display-title block text-xl sm:text-2xl">{routine.title}</span>
                        <span className="mt-1.5 block text-xs text-muted-foreground sm:text-sm">{routine.note}</span>
                      </span>
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all",
                          selected ? "border-primary bg-primary text-primary-foreground" : "border-border",
                        )}
                      >
                        {selected && <Check className="h-4 w-4" strokeWidth={2.4} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div key="step-4" className="animate-step">
              <p className="label-caps text-center">Ваш персональный подбор ♡</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-border/70 bg-card/80 px-5 py-5">
                  <p className="label-caps">Ваш тип кожи</p>
                  <p className="display-title mt-2 text-xl">{labelFor(SKIN_TYPES, state.skinType)}</p>
                </div>
                <div className="rounded-[1.35rem] border border-border/70 bg-card/80 px-5 py-5">
                  <p className="label-caps">Ваш формат ухода</p>
                  <p className="display-title mt-2 text-xl">{labelFor(ROUTINES, state.routine)}</p>
                </div>
                <div className="rounded-[1.35rem] border border-border/70 bg-card/80 px-5 py-5">
                  <p className="label-caps">Что вас беспокоит</p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground">
                    {state.concerns.map((concernId) => (
                      <li key={concernId}>{labelFor(CONCERNS, concernId)}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.35rem] border border-border/70 bg-card/80 px-5 py-5">
                  <p className="label-caps">Ваша цель</p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground">
                    {state.goals.map((goalId) => (
                      <li key={goalId}>{labelFor(GOALS, goalId)}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
                Мы подобрали направление ухода, которое может подойти именно под ваши ответы
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {RESULT_PRODUCTS.map((product) => (
                  <article
                    key={product.name}
                    className="overflow-hidden rounded-[1.35rem] border border-border/70 bg-card/85"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.brand} ${product.name}`}
                        loading="lazy"
                        width={640}
                        height={800}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-3.5 pb-4 pt-3">
                      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{product.brand}</p>
                      <h4 className="mt-1.5 text-xs font-semibold leading-snug sm:text-sm">{product.name}</h4>
                      <p className="mt-1.5 text-[0.68rem] leading-relaxed text-muted-foreground">{product.purpose}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-center gap-4">
                <a
                  href={whatsAppLink(state)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rose w-full text-center sm:w-auto"
                >
                  Получить подбор в WhatsApp
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </a>
                <button type="button" onClick={() => setStep(0)} className="btn-ghost-rose">
                  Пройти заново
                </button>
              </div>
            </div>
          )}

          {step < 4 && (
            <div className="mt-9 flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
              {step > 0 ? (
                <button type="button" onClick={goBack} className="btn-ghost-rose w-full sm:w-auto">
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
                  Назад
                </button>
              ) : (
                <span className="hidden sm:block" />
              )}

              <button type="button" onClick={goNext} disabled={!canContinue} className="btn-rose w-full sm:w-auto">
                {step === 3 ? "Получить мой подбор" : "Далее"}
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
