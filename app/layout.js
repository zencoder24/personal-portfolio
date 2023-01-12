import "./styles/globals.css";
import FooterSection from "./components/FooterSection";
import NavMenu from "./components/NavMenu";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
