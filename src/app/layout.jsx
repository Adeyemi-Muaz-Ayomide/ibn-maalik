import Script from "next/script";
import "./globals.css";
import { Imbue, Poppins } from "next/font/google";

const imbue = Imbue({
  display: "swap",
  variable: "--font-imbue",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ibn Maalik Institute - Learn Qur'an Online",
  description:
    "Structured live Qur'an classes, Tajweed Lessons, and Hifdh support for students around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${imbue.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}

{
  /* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head> */
}

{
  /* <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="afterInteractive"
        /> */
}
