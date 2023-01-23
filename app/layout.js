import "./styles/globals.css";
import FooterSection from "./components/FooterSection";
import NavMenu from "./components/NavMenu";
import Nav from "./components/Nav";
import { NextSeo } from "next-seo";
import { Nunito, Lora, Pacifico } from "@next/font/google";
import { SearchContextProvider } from "./components/Context/store";

const nunito = Nunito({
  display: "swap",
  variable: "--font-nunito",
});
const lora = Lora({
  display: "swap",
  variable: "--font-lora",
  subsets: ["latin"],
});
const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: "cursive",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${lora.variable} ${pacifico.variable} `}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <NextSeo useAppDir={true} />
      </head>
      <body>
        <div className="mx-16 md:mx-24">
          <Nav />
          <NavMenu />
          <SearchContextProvider>{children}</SearchContextProvider>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
