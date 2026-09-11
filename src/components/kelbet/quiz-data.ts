import faceDry from "@/assets/face-dry.jpg";
import faceNormal from "@/assets/face-normal.jpg";
import faceOily from "@/assets/face-oily.jpg";
import faceCombo from "@/assets/face-combo.jpg";
import faceSensitive from "@/assets/face-sensitive.jpg";
import faceUnknown from "@/assets/face-unknown.jpg";
import faceAcne from "@/assets/face-acne.jpg";
import facePigment from "@/assets/face-pigment.jpg";
import faceDull from "@/assets/face-dull.jpg";
import faceTexture from "@/assets/face-texture.jpg";
import faceWrinkles from "@/assets/face-wrinkles.jpg";

import catFace from "@/assets/cat-face.jpg";
import catAntiage from "@/assets/cat-antiage.jpg";
import catBright from "@/assets/cat-bright.jpg";
import catHair from "@/assets/cat-hair.jpg";

export const WHATSAPP_NUMBER = "821099557168";

export type FaceOption = {
  id: string;
  title: string;
  note: string;
  image: string;
};

export const SKIN_TYPES: FaceOption[] = [
  { id: "dry", title: "Сухая", note: "Стянутость, шелушение, тусклый цвет", image: faceDry },
  { id: "normal", title: "Нормальная", note: "Сбалансированная, без выраженных проблем", image: faceNormal },
  { id: "oily", title: "Жирная", note: "Блеск в течение дня, расширенные поры", image: faceOily },
  { id: "combo", title: "Комбинированная", note: "Жирная Т-зона, сухие участки на щеках", image: faceCombo },
  { id: "sensitive", title: "Чувствительная", note: "Склонность к покраснениям и реакциям", image: faceSensitive },
  { id: "unknown", title: "Не знаю", note: "Поможем определить вместе", image: faceUnknown },
];

export const CONCERNS: FaceOption[] = [
  { id: "dryness", title: "Сухость / обезвоженность", note: "Сухие участки, лёгкое шелушение", image: faceDry },
  { id: "redness", title: "Покраснения / чувствительность", note: "Мягкие красные зоны на щеках", image: faceSensitive },
  { id: "pores", title: "Жирность / расширенные поры", note: "Выраженная Т-зона, видимые поры", image: faceOily },
  { id: "acne", title: "Высыпания / акне", note: "Периодические воспаления", image: faceAcne },
  { id: "pigment", title: "Пигментация / пятна", note: "Неровный тон, тёмные участки", image: facePigment },
  { id: "dull", title: "Тусклый цвет лица", note: "Отсутствие сияния, серый подтон", image: faceDull },
  { id: "texture", title: "Неровный рельеф", note: "Лёгкая неровность текстуры", image: faceTexture },
  { id: "aging", title: "Морщины / потеря упругости", note: "Мимические линии, менее плотная кожа", image: faceWrinkles },
  { id: "none", title: "Ничего особенного", note: "Хочу поддерживать здоровье кожи", image: faceNormal },
];

export type GoalOption = { id: string; title: string; note: string; icon: string };

export const GOALS: GoalOption[] = [
  { id: "glow", title: "Сияющая кожа", note: "Здоровое естественное свечение", icon: "sparkles" },
  { id: "hydration", title: "Глубокое увлажнение", note: "Комфорт и упругость в течение дня", icon: "droplet" },
  { id: "tone", title: "Ровный тон", note: "Против пигментации и пятен", icon: "sun" },
  { id: "repair", title: "Восстановление кожи", note: "Барьер, спокойствие, регенерация", icon: "leaf" },
  { id: "firm", title: "Упругость и Anti-Age", note: "Плотность и чёткий контур", icon: "gem" },
  { id: "pores-clean", title: "Чистые поры", note: "Матовость и чистая текстура", icon: "wind" },
  { id: "wellgroomed", title: "Ухоженный внешний вид", note: "Свежесть каждый день", icon: "heart" },
];

export type RoutineOption = { id: string; title: string; note: string };

export const ROUTINES: RoutineOption[] = [
  { id: "minimal", title: "Минимальный", note: "2–3 средства на каждый день" },
  { id: "basic", title: "Базовый", note: "Полноценный ежедневный уход" },
  { id: "intensive", title: "Интенсивный", note: "Многоступенчатый premium-уход" },
];

export type Product = {
  brand: string;
  name: string;
  purpose: string;
  image: string;
};

export const RESULT_PRODUCTS: Product[] = [
  {
    brand: "OHUI",
    name: "Miracle Toning Skin Softener",
    purpose: "Тонер для мягкого увлажнения и подготовки кожи",
    image: catFace,
  },
  {
    brand: "TOM-TIT-TOT",
    name: "Brightening XS Serum",
    purpose: "Сыворотка для сияния и ровного тона",
    image: catBright,
  },
  {
    brand: "SEOLDAM",
    name: "Goungyeol Bidan Cream",
    purpose: "Питательный крем для упругости и восстановления",
    image: catAntiage,
  },
  {
    brand: "RYO",
    name: "Hair Loss Care Shampoo",
    purpose: "Укрепление корней и уход за кожей головы",
    image: catHair,
  },
];

export type QuizState = {
  skinType: string | null;
  concerns: string[];
  goals: string[];
  routine: string | null;
};

export const emptyQuiz: QuizState = {
  skinType: null,
  concerns: [],
  goals: [],
  routine: null,
};

const titleOf = <T extends { id: string; title: string }>(list: T[], id: string | null) =>
  list.find((item) => item.id === id)?.title ?? "";

export function buildWhatsAppMessage(state: QuizState): string {
  const hasAnswers = Boolean(state.skinType || state.concerns.length || state.goals.length || state.routine);

  if (!hasAnswers) {
    return "Здравствуйте! 🌸\nХочу получить консультацию по подбору ухода KELBET.";
  }

  const lines: string[] = [
    "Здравствуйте! 🌸",
    "Хочу получить персональный подбор ухода от KELBET.",
    "",
    "Мои ответы:",
  ];

  if (state.skinType) lines.push(`Тип кожи: ${titleOf(SKIN_TYPES, state.skinType)}`);

  if (state.concerns.length) {
    lines.push("", "Что беспокоит:");
    state.concerns.forEach((id) => lines.push(titleOf(CONCERNS, id)));
  }

  if (state.goals.length) {
    lines.push("", "Желаемый результат:");
    state.goals.forEach((id) => lines.push(titleOf(GOALS, id)));
  }

  if (state.routine) lines.push("", `Формат ухода: ${titleOf(ROUTINES, state.routine)}`);

  lines.push("", "Подберите, пожалуйста, подходящие средства 🤍");

  return lines.join("\n");
}

export function whatsAppLink(state: QuizState): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(state))}`;
}

export const labelFor = titleOf;
