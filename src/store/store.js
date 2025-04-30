import { create } from "zustand";

export const useImage = create(() => ({
  antalyaImages: [
    "Antalya/Antalya.jpeg",
    "Antalya/Antalya_2.jpeg",
    "Antalya/Antalya_3.jpg",
    "Antalya/Antalya_4.jpg",
    "Antalya/Antalya_5.jpg",
  ],
  baliImages: [
    "Bali/Bali.jpeg",
    "Bali/Bali_2.jpg",
    "Bali/Bali_3.jpg",
    "Bali/Bali_4.jpg",
    "Bali/Bali_5.jpg",
  ],
  tailandImages: [
    "Tailand/Tailand.jpeg",
    "Tailand/Tailand_2.jpg",
    "Tailand/Tailand_3.jpg",
    "Tailand/Tailand_4.jpg",
    "Tailand/Tailand_5.jpg",
  ],
  dubaiImages: [
    "Dubai/Dubai.jpeg",
    "Dubai/Dubai_2.jpeg",
    "Dubai/Dubai_3.jpeg",
    "Dubai/Dubai_4.jpeg",
    "Dubai/Dubai_5.jpeg",
  ],
}));

export const useTable = create(() => ({
  antalya: [
    {
      day: 5,
      rating: 7.9,
      price: "50000",
      name: "Privado Hotels",
    },
    { day: 5, rating: 8.5, price: "70000", name: "Sky Kamer Hotel Antalya" },
    {
      day: 7,
      rating: 8.0,
      price: "80000",
      name: "Sea City Devran Hotel & Spa",
    },
    { day: 14, rating: 8.7, price: "200000", name: "La Paloma Hotel" },
    { day: 30, rating: 8.6, price: "300000", name: "Akra V Hotel" },
  ],

  bali: [
    {
      day: 5,
      rating: 8.2,
      price: "60000",
      name: "Bali Relaxing Resort & Spa",
    },
    { day: 5, rating: 8.7, price: "75000", name: "Ubud Village Hotel" },
    {
      day: 7,
      rating: 8.4,
      price: "90000",
      name: "The Anvaya Beach Resort Bali",
    },
    { day: 14, rating: 8.9, price: "210000", name: "Alaya Resort Ubud" },
    { day: 30, rating: 8.8, price: "320000", name: "The Kayon Jungle Resort" },
  ],

  tailand: [
    {
      day: 5,
      rating: 8.3,
      price: "55000",
      name: "The Marina Phuket Hotel",
    },
    {
      day: 5,
      rating: 8.6,
      price: "72000",
      name: "Siam Kempinski Hotel Bangkok",
    },
    {
      day: 7,
      rating: 8.5,
      price: "88000",
      name: "Amari Pattaya",
    },
    { day: 14, rating: 8.8, price: "195000", name: "Banyan Tree Phuket" },
    { day: 30, rating: 8.7, price: "310000", name: "Mandarava Resort and Spa" },
  ],

  dubai: [
    {
      day: 5,
      rating: 8.4,
      price: "70000",
      name: "Atana Hotel",
    },
    {
      day: 5,
      rating: 8.9,
      price: "90000",
      name: "JW Marriott Marquis Hotel Dubai",
    },
    {
      day: 7,
      rating: 8.7,
      price: "120000",
      name: "Address Dubai Marina",
    },
    { day: 14, rating: 9.0, price: "250000", name: "Burj Al Arab Jumeirah" },
    { day: 30, rating: 8.8, price: "400000", name: "Jumeirah Beach Hotel" },
  ],
}));

export const useFilter = create((set) => ({
  filter: [],
  setFilter: (value) => set({ filter: value }),
}));

export const useText = create((set) => ({
  text: "",
  setText: (value) =>
    set({
      text: value,
    }),
}));

export const useTitle = create(() => ({
  Antalya: "Antalya",
  Bali: "Bali",
  Tailand: "Tailand",
  Dubai: "Dubai",
}));

export const useDescription = create(() => ({
  Antalya:
    "Отпуск в Анталии — это лазурное море, жаркое солнце и уютные пляжи. Город сочетает в себе древнюю историю и современный комфорт. Здесь можно насладиться турецкой кухней, прогулками по Старому городу и живописными видами.",
  Bali: "Отпуск на Бали — это райские пляжи, шум прибоя и завораживающие закаты.Здесь можно серфить, исследовать джунгли и наслаждаться атмосферой уединения. Остров наполнен духовностью, вкусной едой и невероятными пейзажами.",
  Tailand:
    "Отпуск в Таиланде — это яркие закаты, тропическая природа и уютные пляжи. Здесь можно попробовать свежие морепродукты, покататься на лодке  между островами и увидеть величественные храмы. Атмосфера расслабленности делает отдых незабываемым.",
  Dubai:
    "Отпуск в Дубае — это роскошные небоскрёбы, бескрайние песчаные пляжи и уникальные развлечения. Здесь можно подняться на Бурдж-Халифа, прокатиться по пустыне и посетить футуристические торговые центры. Город впечатляет своим размахом и сочетанием традиций с современностью.",
}));
