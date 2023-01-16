import "./styles/globals.css";
import FooterSection from "./components/FooterSection";
import NavMenu from "./components/NavMenu";
import Nav from "./components/Nav";
import { Nunito, Lora, Pacifico } from "@next/font/google";

const nunito = Nunito({ variable: "--font-nunito" });
const lora = Lora({ variable: "--font-lora" });
const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: "cursive",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${lora.variable} ${pacifico.variable} `}
    >
      <body>
        <div className="mx-16 md:mx-24">
          <Nav />
          <NavMenu />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
