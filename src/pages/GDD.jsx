import Tag from "../components/Tag";
import crownsImage from "../assets/double-icon-tkj.png";
import background from "../assets/background-gdd.png";

function GDD() {
  return (
    <main className="bg-zinc-800">
      <section
        id="title-banner"
        className="h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      <section id="game-overview" className="text-white font-sans px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-serif font-bold tracking-widest uppercase mb-6">
              Game Overview
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                The King’s Jest is a local multiplayer party game developed as
                part of a limited-time challenge. The objective was to create an
                engaging experience that promotes real-world interaction between
                players. Designed for short, chaotic matches, the game blends
                physical movement, real-time coordination, and light strategy.
                The core concept revolves around jesters competing for the
                King's approval, a humorous twist on traditional competition.
              </p>
              <p>
                This version represents a polished demo, focused on one playable
                level. Future versions are planned to expand on this foundation
                with new levels, mechanics, and a broader narrative scope.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold mb-8 tracking-wider">
              app informations
            </h2>

            <div className="flex items-start gap-x-16">
              <div className="space-y-4 flex-1">
                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-gray-400 w-32">
                    Platform:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="iOS" />
                    <Tag text="Mobile" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-gray-400 w-32">Genre:</p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Party Game" />
                    <Tag text="Action" />
                    <Tag text="2D Platformer" />
                    <Tag text="Local Multiplayer" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-gray-400 w-32">
                    Game Modes:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="2-8 Players" />
                    <Tag text="Single Player" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-gray-400 w-32">
                    Level Duration:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="2-3 min per round" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-gray-400 w-32">Tools:</p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="SwiftUI" />
                    <Tag text="SpriteKit" />
                    <Tag text="Multipeer Conectivity" />
                    <Tag text="Core Motion" />
                  </div>
                </div>
              </div>

              <div>
                <img src={crownsImage} alt="Crowns" className="w-80 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GDD;
