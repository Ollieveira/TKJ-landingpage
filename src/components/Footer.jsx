import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white-background-footer py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-around md:items-start gap-y-10 md:gap-x-8 text-sm">
        {/* Coluna 1: About */}
        <div className="space-y-4 md:w-1/3 lg:max-w-md">
          <h3 className="text-lg font-bold text-gray-dark">About</h3>
          <p className="text-gray-placeholder leading-relaxed text-pretty">
            The King’s Jest is a local multiplayer party game created during a
            limited-time challenge. Designed for fast-paced, chaotic matches, it
            encourages real-world interaction through physical movement, quick
            coordination, and light strategy. Players compete as jesters for the
            King’s approval, adding a humorous twist to classic competition.
          </p>
          <p className="text-gray-dark mt-6 pt-4 border-t border-gray-light/20">
            &copy; {currentYear}. All Rights Reserved.
          </p>
        </div>

        <div className="md:w-auto">
          <h3 className="text-lg font-bold text-gray-dark mb-4">Game</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-placeholder hover:text-yellow transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="https://apps.apple.com/br/app/the-kings-jest/id6743722492"
                className="text-gray-placeholder hover:text-yellow transition-colors"
                target="_blank"
              >
                Download App
              </Link>
            </li>

            <li>
              <Link
                to="/gdd"
                className="text-gray-placeholder hover:text-yellow transition-colors"
              >
                GDD
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-auto">
          <h3 className="text-lg font-bold text-gray-dark mb-4">Social</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.instagram.com/thekingsjest/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-placeholder hover:text-yellow transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/kingsjestgame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-placeholder hover:text-yellow transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:thekingsjestapp@gmail.com"
                className="text-gray-placeholder hover:text-yellow transition-colors"
              >
                E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
