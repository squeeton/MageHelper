/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400",
    "bg-red-500",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "m-0",
    "m-auto",
    "ml-5"
  ],
  theme: {
    extend: {},
    fontFamily: {
      cinzel: ["Cinzel"],
      playfair: ["Playfair"],
    },
  },
  plugins: [],
};
