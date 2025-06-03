import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import downloadAppImage from "../assets/download-image.png";

export default function Header() {
  return (
    <header className="bg-red-header w-full h-20 px-4 sm:px-20 flex items-center justify-between shadow-md">
      <Link to="/" aria-label="Página Inicial The King's Jest">
        <img
          src={logoImage}
          alt="The King's Jest Logo"
          className="h-10 md:h-12 w-auto"
        />
      </Link>

      <a
        href="https://apps.apple.com/br/app/the-kings-jest/id6743722492"
        aria-label="Download do Aplicativo The King's Jest"
        target="_blank"
        className="hover:opacity-90 transition-opacity"
      >
        <img
          src={downloadAppImage}
          alt="Botão Download App"
          className="h-12 md:h-14 w-auto"
        />
      </a>
    </header>
  );
}
