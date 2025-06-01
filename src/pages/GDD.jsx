import Tag from "../components/Tag";
import PillarCard from "../components/PillarCard";
import FeatureHighlight from "../components/FeatureHighlight";
import crownsImage from "../assets/double-icon-tkj.png";
import background from "../assets/background-gdd.png";
import gameplayImage from "../assets/background-gameplay.png";

function GDD() {
  return (
    <main>
      {/* Seção 0: Banner */}
      <section
        id="title-banner"
        className="h-screen bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      ></section>

      {/* Seção 1: Game Overview */}
      <section
        id="game-overview"
        className="bg-gray-background text-text-secondary font-sans px-8 py-16" // Fundo gray-background
      >
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
        </div>
      </section>

      {/* Seção 2: App Informations */}
      <section
        id="app-informations" // ID para a nova seção
        className="bg-gray-dark text-text-secondary font-sans px-8 py-16" // Fundo gray-dark
      >
        <div className="max-w-6xl mx-auto">
          {/* A div que antes tinha mt-20 agora não precisa, pois a seção tem py-16 */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 tracking-wider">
              app informations
            </h2>

            <div className="flex items-start gap-x-16">
              <div className="space-y-4 flex-1">
                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-text-secondary w-32">
                    Platform:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="iOS" />
                    <Tag text="Mobile" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-text-secondary w-32">
                    Genre:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Party Game" />
                    <Tag text="Action" />
                    <Tag text="2D Platformer" />
                    <Tag text="Local Multiplayer" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-text-secondary w-32">
                    Game Modes:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="2-8 Players" />
                    <Tag text="Single Player" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-text-secondary w-32">
                    Level Duration:
                  </p>
                  <div className="flex gap-2">
                    <Tag text="2-3 min per round" />
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="font-bold text-lg text-text-secondary w-32">
                    Tools:
                  </p>
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

      {/* Seção 3: Narrative Background */}
      <section
        id="narrative-background"
        className="bg-gray-background text-text-secondary font-sans px-8 py-16"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Bloco Narrative Background */}
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-widest uppercase mb-6">
              Narrative Background
            </h2>
            <p className="text-text-secondary leading-relaxed">
              In a medieval kingdom ruled by a merciless king, a group of
              captured jesters is forced to compete for the chance to become the
              next royal fool and to avoid a darker fate. To win the King’s
              favor, they must survive a series of chaotic physical challenges,
              filled with traps, unstable platforms, and constant surprises.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              While the current version of the game centers on fast-paced
              competition, future levels will introduce new formats and changing
              dynamics. Cooperative modes and unexpected twists will be
              included, expanding the ways players interact and survive in the
              King's cruel court.
            </p>
          </div>

          {/* Bloco Target Audience */}
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-widest uppercase mb-6">
              Target Audience
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
              <li>
                Ages 12-30, with a primary focus on teens and young adults who
                have familiarity with mobile games
              </li>
              <li>
                Groups of friends in the same physical space, especially for
                short sessions during casual hangouts
              </li>
              <li>
                Fans of indie and party platformer games that combine physical
                interaction with light strategy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção 4: Imagem de Gameplay */}
      <section
        id="gameplay-slideshow"
        className="h-96 bg-cover bg-center" // Ajuste a altura (h-96) conforme necessário
        style={{ backgroundImage: `url(${gameplayImage})` }}
      ></section>

      {/* Seção 5: Core Experience Pillars */}
      <section
        id="core-pillars"
        className="bg-red-secondary-dark text-text-main px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase mb-12">
            Core Experience Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              title="Narrative-Driven Chaos"
              text="The game offers quick and dynamic rounds that keep players engaged. Each match is designed to feel unpredictable, encouraging friendly competition and replayability."
            />
            <PillarCard
              title="Physical Engagement"
              text="Players interact with the game by tilting, tapping, and moving their phones. This creates a shared physical experience that adds more energy and fun to each gameplay session."
            />
            <PillarCard
              title="Playful & Satirical Tone"
              text="The game's style is lighthearted and visually expressive. Characters, animations, and environments support a playful atmosphere without distracting from the gameplay."
            />
          </div>
        </div>
      </section>

      {/* Seção 6: Key Features */}
      <section id="key-features" className="bg-red-secondary-dark px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-text-main text-4xl font-serif font-bold tracking-widest uppercase mb-12">
            key features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <FeatureHighlight
              title="Fast-Paced Motion-Based Gameplay"
              description="Players control jesters by tilting and tapping their phones, creating a highly active and kinetic form of interaction that heightens the chaos and immersion of each match."
            />
            <FeatureHighlight
              title="Short, Replayable Matches"
              description="The current singular level is designed to be quick and intense, encouraging rematches, revenge rounds, and escalating tension. It’s a perfect format for casual play sessions and chaotic fun."
            />
            <FeatureHighlight
              title="Local Multiplayer via Proximity Connection"
              description="Using Apple’s Multipeer Connectivity, the game allows players to quickly connect without needing a network, perfect for spontaneous, in-person parties or classroom sessions."
            />
            <FeatureHighlight
              title="Expandable Level System"
              description="The demo currently includes one stage, but the structure supports new levels with different rules, mechanics, and objectives, allowing the game to grow in complexity and variety over time."
            />
          </div>
        </div>
      </section>

      {/* Seção 7: Gameplay Loop */}
      <section id="gameplay-loop" className="bg-gray-background px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-text-main text-4xl font-serif font-bold tracking-widest uppercase mb-16">
            Gameplay loop
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-background rounded-full z-10"></div>

            <div className="grid grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-red-main-light flex rounded-tl-2xl min-h-[200px] p-8 items-center justify-center">
                <div className="flex items-start">
                  <p className="text-6xl font-bold text-red-secondary-light mr-4">
                    1
                  </p>
                  <p className="text-text-main font-sans leading-relaxed text-pretty">
                    Players connect with each other via proximity-based
                    connectivity. One player creates the room and takes on the
                    role of the host, while other players can request to join
                    the party.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-red-main-light flex rounded-tr-2xl min-h-[200px] p-8 items-center justify-center">
                <div className="flex items-start">
                  <p className="text-6xl font-bold text-red-secondary-light mr-4">
                    2
                  </p>
                  <p className="text-text-main font-sans leading-relaxed text-pretty">
                    The game begins once all players are connected. Each player
                    controls a jester on the playing field, using the phone's
                    motion sensors (accelerometer and gyroscope) to move their
                    character.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-red-main-light flex rounded-bl-2xl min-h-[200px] p-8 items-center justify-center">
                <div className="flex items-start">
                  <p className="text-6xl font-bold text-red-secondary-light mr-4">
                    3
                  </p>
                  <p className="text-text-main font-sans leading-relaxed text-pretty">
                    During the round, players must navigate a series of traps,
                    unstable platforms, and unpredictable obstacles, all while
                    competing for survival.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-red-main-light flex rounded-br-2xl min-h-[200px] p-8 items-center justify-center">
                <div className="flex items-start">
                  <p className="text-6xl font-bold text-red-secondary-light mr-4">
                    4
                  </p>
                  <p className="text-text-main font-sans leading-relaxed text-pretty">
                    The first jester to reach the dungeon exit receives the
                    King's approval. Afterward, players can choose to play
                    another round or end the session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}

export default GDD;
