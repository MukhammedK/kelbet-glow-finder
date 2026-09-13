import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "./Reveal";
import { reviewPhotos } from "./review-data";

const SWIPE_DISTANCE = 45;

export function Reviews() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + reviewPhotos.length) % reviewPhotos.length);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % reviewPhotos.length);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, showNext, showPrevious]);

  const openPhoto = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = distance - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < SWIPE_DISTANCE) return;
    if (delta > 0) showPrevious();
    else showNext();
  };

  const activePhoto = reviewPhotos[activeIndex];

  return (
    <section className="relative z-10 overflow-hidden pb-24 pt-4 sm:pb-32 sm:pt-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <header className="mb-9 text-center sm:mb-12">
            <p className="label-caps">KELBET community</p>
            <h2 className="display-title mt-3 text-[2.35rem] leading-tight sm:text-5xl">
              Отзывы наших клиентов
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Результаты и впечатления наших клиентов
            </p>
          </header>

          <Carousel opts={{ align: "start", loop: true }} aria-label="Отзывы клиентов KELBET">
            <CarouselContent className="-ml-3 sm:-ml-5">
              {reviewPhotos.map((photo, index) => (
                <CarouselItem
                  key={photo.src}
                  className="basis-[68%] pl-3 sm:basis-[48%] sm:pl-5 lg:basis-[31%]"
                >
                  <button
                    type="button"
                    onClick={() => openPhoto(index)}
                    className="group block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    aria-label={`Открыть отзыв ${index + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-bottom-14 left-auto right-14 top-auto hidden h-10 w-10 translate-y-0 border-border/70 bg-card/85 text-primary shadow-[var(--shadow-soft)] hover:bg-card md:inline-flex" />
            <CarouselNext className="-bottom-14 right-0 top-auto hidden h-10 w-10 translate-y-0 border-border/70 bg-card/85 text-primary shadow-[var(--shadow-soft)] hover:bg-card md:inline-flex" />
          </Carousel>
        </Reveal>
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-50 flex items-center justify-center p-3 outline-none sm:p-8"
            onPointerDownOutside={(event) => {
              if ((event.target as HTMLElement).closest("[data-lightbox-control]")) {
                event.preventDefault();
              }
            }}
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={handleTouchEnd}
            aria-describedby={undefined}
          >
            <DialogPrimitive.Title className="sr-only">
              Отзыв клиента {activeIndex + 1} из {reviewPhotos.length}
            </DialogPrimitive.Title>

            {activePhoto && (
              <img
                key={activePhoto.src}
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="animate-step max-h-[calc(100dvh-5rem)] max-w-[calc(100vw-1.5rem)] select-none object-contain sm:max-h-[calc(100dvh-4rem)] sm:max-w-[calc(100vw-8rem)]"
                draggable={false}
              />
            )}

            <DialogPrimitive.Close asChild>
              <Button
                data-lightbox-control
                type="button"
                variant="secondary"
                size="icon"
                className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] h-12 w-12 rounded-full bg-background/90 text-foreground shadow-[var(--shadow-lift)] hover:bg-background sm:right-6 sm:top-6"
                aria-label="Закрыть просмотр"
              >
                <X className="h-6 w-6" />
              </Button>
            </DialogPrimitive.Close>

            <Button
              data-lightbox-control
              type="button"
              variant="secondary"
              size="icon"
              onClick={showPrevious}
              className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 h-12 w-12 rounded-full bg-background/90 text-foreground shadow-[var(--shadow-lift)] hover:bg-background sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
              aria-label="Предыдущий отзыв"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              data-lightbox-control
              type="button"
              variant="secondary"
              size="icon"
              onClick={showNext}
              className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 h-12 w-12 rounded-full bg-background/90 text-foreground shadow-[var(--shadow-lift)] hover:bg-background sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
              aria-label="Следующий отзыв"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>

            <p className="pointer-events-none absolute bottom-[max(1.75rem,calc(env(safe-area-inset-bottom)+0.75rem))] left-1/2 -translate-x-1/2 text-xs font-medium text-background sm:bottom-5">
              {activeIndex + 1} / {reviewPhotos.length}
            </p>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}