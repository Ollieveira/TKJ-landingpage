import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import CallToActionBanner from "../components/CallToActionBanner";
import iconNarrative from "../assets/narrative-driven-chaos-image.png";
import iconPhysical from "../assets/physical-engagement.png";
import iconPlayful from "../assets/playful-satirical-tone.png";
import decorativeScrollImage from "../assets/what-is-kings-jest-scroll.png";
import background from "../assets/home-banner.svg";
import topScrollImage from "../assets/every-crown-needs-clown.png";
import appStoreButtonImage from "../assets/app-store-button.svg";
import iPhoneMockupImage from "../assets/iphone-mockup.png";
import catarseLogo from "../assets/catarse-image.png";
import helpUsButtonScroll from "../assets/help-us-button.png";
import eventCrowdImage from "../assets/bgs-mockup.png";
import gddBookImage from "../assets/gdd-image.png";
import exploreGddButton from "../assets/gdd-explore-button.png";

function Home() {
  return (
    <>
      <main>
        <section
          id="home-banner"
          className="w-full h-256 relative"
          style={{
            backgroundImage: `url(${background}), linear-gradient(to bottom, var(--color-red-header, #701a0d), var(--color-red-main-light, #BA2A14))`,
            backgroundSize: "cover, cover",
            backgroundPosition: "bottom, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-red-header to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-main-dark to-transparent"></div>

          <div className="flex flex-col items-center justify-center pt-10 md:pt-16 pb-8 px-4 text-center">
            <img
              src={topScrollImage}
              alt="Every crown needs a clown"
              className="h-10 md:h-14 w-auto mb-6 md:mb-8"
            />

            <h1 className="text-yellow text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 max-w-4xl text-pretty">
              Escape a Dark Fate. Rise as the Kingdom's New Royal Fool.
            </h1>

            <p className="text-text-secondary text-base md:text-lg max-w-xs md:max-w-xl mb-8 leading-relaxed text-pretty">
              Download the app, confront your fate, and rise beyond your limits
              to claim your place at court.
            </p>

            <img
              src={iPhoneMockupImage}
              alt="iPhone mockup showing gameplay"
              className="mb-8"
            />

            <a
              href="https://apps.apple.com/br/app/the-kings-jest/id6743722492"
              target="_blank"
            >
              <img
                src={appStoreButtonImage}
                alt="Download on the App Store"
                className="h-14 md:h-16 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
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

        

        <section
          id="the-kings-jest"
          className="bg-red-main-dark py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid md:grid-cols-6 md:gap-12 lg:gap-16 items-center ">
              <div className="md:col-span-3 space-y-6 mb-12 md:mb-0 ">
                <img
                  src={decorativeScrollImage}
                  alt="What's The King of Jest?"
                  className="h-12 w-auto md:h-14"
                />
                <h2 className="font-libra text-4xl md:text-5xl text-text-main text-pretty leading-tight">
                  A Spectacle of Controlled Chaos
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed text-pretty">
                  Tilt, tap, and dive into chaotic rounds in a satirical world
                  where unpredictability rules and the fun is always collective.
                </p>
              </div>

              <div className="md:col-span-3 space-y-8 ">
                <InfoCard
                  iconSrc={iconNarrative}
                  title="Narrative-Driven Chaos"
                  description="The game offers quick and dynamic rounds that keep players engaged. Each match is designed to feel unpredictable, encouraging friendly competition and replayability."
                />
                <InfoCard
                  iconSrc={iconPhysical}
                  title="Physical Engagement"
                  description="Players interact with the game by tilting, tapping, and moving their phones. This creates a shared physical experience that adds more energy and fun to each gameplay session."
                />
                <InfoCard
                  iconSrc={iconPlayful}
                  title="Playful & Satirical Tone"
                  description="The game's style is lighthearted and visually expressive. Characters, animations, and environments support a playful atmosphere without distracting from the gameplay."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="gdd-section" className="bg-red-main-dark py-16 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className=" md:col-span-2 flex justify-center items-center">
                <img
                  src={gddBookImage}
                  alt="The King's Jest Book"
                  className="w-full max-w-sm md:max-w-md transform -rotate-12"
                />
              </div>

              <div className="md:col-span-3 space-y-6 text-center md:text-left">
                <h2 className="font-libra text-4xl md:text-5xl text-text-main font-bold leading-tight">
                  The Sacred Manuscript of Fools
                </h2>
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed text-pretty">
                  Dive into our Game Design Document and discover how The King’s
                  Jest was brought to life. Explore the behind-the-scenes of
                  this royal madness.
                </p>
                <Link
                  to="/gdd"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img
                    src={exploreGddButton}
                    alt="Explore GDD Button"
                    className="h-14 md:h-16 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="catarse-section"
          className="bg-red-main-dark py-16 md:py-24 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="md:col-span-3 space-y-6 text-center md:text-left">
                <img
                  src={catarseLogo}
                  alt="Catarse Logo"
                  className="h-8 md:h-10 w-auto mx-auto md:mx-0"
                />
                <h2 className="font-libra text-4xl md:text-5xl text-text-main text-pretty leading-tight">
                  From Fools to Legends <br /> We Need Your Help
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed text-pretty max-w-md mx-auto md:mx-0">
                  With your support, we can showcase The King’s Jest at the
                  biggest gaming event in Latin America. Let’s show the world
                  that even fools deserve a throne.
                </p>
                <a
                  href="https://www.catarse.me/thekingsjest?ref=project_link"
                  target="_blank"
                  className="inline-block hover:opacity-90 transition-opacity"
                >
                  <img
                    src={helpUsButtonScroll}
                    alt="Help Us Button"
                    className="h-14 md:h-16 w-auto"
                  />
                </a>
              </div>

              <div className="md:col-span-2 relative mt-12 md:mt-0">
                <img
                  src={eventCrowdImage}
                  alt="Event crowd"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
          <CallToActionBanner />
        </section>

        <section className="bg-white-background-footer h-80"></section>
      </main>
    </>
  );
}

export default Home;
