import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./quiz-data";

export function Footer() {
  return (
    <footer className="relative z-10 rounded-t-[3rem] bg-card/70 px-6 py-16 text-center backdrop-blur-sm">
      <p className="display-title text-3xl tracking-[0.2em] text-primary">KELBET</p>
      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
        Korean cosmetics
      </p>

      <span className="mx-auto mt-8 block h-px w-16 bg-border" />

      <nav className="mt-8 flex items-center justify-center gap-6 text-sm">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/kelbet____/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-70"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.5} />
          Instagram
        </a>

        <span className="h-4 w-px bg-border" />

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@kelbet__?_r=1&_t=ZS-99el9OWW45F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-70"
        >
          <span className="text-sm font-medium">♪</span>
          TikTok
        </a>

        <span className="h-4 w-px bg-border" />

        {/* WhatsApp */}
        <a
          href="https://wa.me/821099557168"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-70"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
          WhatsApp
        </a>
      </nav>

      <p className="script-note mt-8">Korean beauty. Real results. ♡</p>

      <p className="mt-6 text-xs text-muted-foreground">
        © 2026 KELBET. Все права защищены.
      </p>
    </footer>
  );
}