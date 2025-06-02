import { Link } from "react-router-dom";
import Header from "../components/Header";
import background from "../assets/home-banner.svg";
import topScrollImage from "../assets/every-crown-needs-clown.png";
import appStoreButtonImage from "../assets/app-store-button.png";
import iPhoneMockupImage from "../assets/iphone-mockup.png";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="home-banner"
          className="w-full aspect-[16/9] relative"
          style={{
            backgroundImage: `url(${background}), linear-gradient(to bottom, var(--color-red-header, #701a0d), var(--color-red-main-light, #BA2A14))`, // Usando suas cores, ajuste os fallbacks
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-red-header to-transparent"></div>

          <div className="flex flex-col items-center justify-center pt-10 md:pt-16 pb-8 px-4 text-center">
            <img
              src={topScrollImage}
              alt="Every crown needs a clown"
              className="h-10 md:h-14 w-auto mb-6 md:mb-8"
            />

            <h1 className="text-yellow text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-4xl text-pretty">
              Escape a Dark Fate. Rise as the Kingdom's New Royal Fool.
            </h1>

            <p className="text-text-secondary text-base md:text-lg max-w-xs md:max-w-xl mb-4 leading-relaxed text-pretty">
              Download the app, confront your fate, and rise beyond your limits
              to claim your place at court.
            </p>

            <a
              href="https://apps.apple.com/br/app/the-kings-jest/id6743722492"
            >
              <img
                src={appStoreButtonImage}
                alt="Download on the App Store"
                className="h-14 md:h-16 w-auto hover:opacity-80 transition-opacity"
              />
            </a>

            <div className="relative w-full max-w-3xl lg:max-w-4xl">
              <img
                src={iPhoneMockupImage}
                alt="iPhone mockup showing gameplay"
                className=""
              />
              {/* <video
                src={screenVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-[88%] h-[91%] top-[4.5%] left-[6%] rounded-[6%/3%] object-cover"
              ></video> */}
            </div>
          </div>
          {/* <img
            src={jesterHead1}
            alt=""
            className="absolute top-[15%] left-[10%] w-12 h-12 md:w-16 md:h-16 opacity-80"
          />
          <img
            src={jesterHead1}
            alt=""
            className="absolute top-[30%] right-[8%] w-10 h-10 md:w-14 md:h-14 opacity-80 transform scale-x-[-1]"
          />
          <img
            src={jesterHead1}
            alt=""
            className="absolute bottom-[35%] left-[12%] w-14 h-14 md:w-18 md:h-18 opacity-80"
          />
          <img
            src={jesterHead1}
            alt=""
            className="absolute bottom-[40%] right-[15%] w-12 h-12 md:w-16 md:h-16 opacity-80 transform rotate-12"
          /> */}
        </section>

        <nav className="space-x-4">
          <Link to="/gdd" className="text-red-600 underline">
            GDD
          </Link>
          <Link to="/help" className="text-blue-600 underline">
            Ajuda
          </Link>
        </nav>
      </main>
    </>
  );
}

export default Home;
