import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo.png";
import downloadAppImage from "../assets/supportus-image.png";

export default function Header() {
  return (
    <header className="bg-red-header w-full h-20 px-4 sm:px-20 flex items-center justify-between shadow-md">
      <div className="flex-1 flex justify-start">
        <Link to="/" aria-label="Página Inicial The King's Jest">
          <img
            src={logoImage}
            alt="The King's Jest Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <NavLink
          to="/leaderboard"
          aria-label="Ver o Leaderboard"
          className={({ isActive }) =>
            `font-libra text-2xl transition-colors duration-300 ease-in-out ${
              isActive
                ? "text-yellow" // Cor quando a rota está ativa
                : "text-text-main hover:text-yellow" // Cor padrão e no hover
            }`
          }
        >
          Leaderboard
        </NavLink>
      </div>

      <div className="flex-1 flex justify-end">
        <a
          href="https://www.catarse.me/tkj_retrocon?ref=project_link"
          aria-label="Ajude-nos fazendo uma doação no Catarse"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <img
            src={downloadAppImage}
            alt="Botão Support Us"
            className="h-12 md:h-14 w-auto"
          />
        </a>
      </div>
    </header>
  );
}
