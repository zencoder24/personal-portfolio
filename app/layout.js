import "./styles/globals.css";
import FooterSection from "./components/FooterSection";
import NavMenu from "./components/NavMenu";
import Nav from "./components/Nav";
import { Nunito } from "@next/font/google";
import { Lora } from "@next/font/google";

const nunito = Nunito({ variable: "--font-nunito" });
const lora = Lora({ variable: "--font-lora" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${lora.variable} `}>
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
