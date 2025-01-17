import localFont from "next/font/local";

export const lostInSouth = localFont({
  src: [
    {
      path: "../public/fonts/lost_in_south/Lost in South.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lost-in-south",
});
