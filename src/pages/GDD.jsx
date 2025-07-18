import Tag from "../components/Tag";
import PillarCard from "../components/PillarCard";
import FeatureHighlight from "../components/FeatureHighlight";
import ColorSwatch from "../components/ColorSwatch";
import crownsImage from "../assets/double-icon-tkj.png";
import background from "../assets/background-gdd.png";
import gameplayImage from "../assets/background-gameplay.png";
import uiDesignImage from "../assets/background-gdd-section11.png";
import designSystemImage from "../assets/game-components.png";
import jesterHeadImage from "../assets/jesterHeadImage.png";
import idleJester from "../assets/idle.gif";
import runJester from "../assets/run.gif";
import jumpJester from "../assets/jump.gif";
import deathJester from "../assets/death.gif";
import finalSceneImage from "../assets/finalSceneImage.png";

function GDD() {
  return (
    <>
      <main>
        {/* Seção 0: Banner */}
        <section
          id="title-banner"
          className="w-full aspect-[16/7] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-red-header to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-background to-transparent"></div>
        </section>

        {/* Seção 1: Game Overview */}
        <section
          id="game-overview"
          className="bg-gray-background text-text-secondary font-sans px-8 py-16" // Fundo gray-background
        >
          <div className="max-w-6xl mx-auto">
            <div>
              <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
                Game Overview
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  The King’s Jest is a local multiplayer party game developed as
                  part of a limited-time challenge. The objective was to create
                  an engaging experience that promotes real-world interaction
                  between players. Designed for short, chaotic matches, the game
                  blends physical movement, real-time coordination, and light
                  strategy. The core concept revolves around jesters competing
                  for the King's approval, a humorous twist on traditional
                  competition.
                </p>
                <p>
                  This version represents a polished demo, focused on one
                  playable level. Future versions are planned to expand on this
                  foundation with new levels, mechanics, and a broader narrative
                  scope.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: App Informations */}
        <section
          id="app-informations"
          className="bg-gray-dark text-text-secondary font-sans px-8 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-libra text-text-secondary mb-8 tracking-wider">
              app informations
            </h2>

            <div className="flex items-center">
              <div className="space-y-4 flex-1">
                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                  <p className="font-bold text-lg text-text-secondary w-full sm:w-auto">
                    Platform:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="iOS" />
                    <Tag text="Mobile" />
                  </div>
                </div>

                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                  <p className="font-bold text-lg text-text-secondary w-full sm:w-auto">
                    Genre:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="Party Game" />
                    <Tag text="Action" />
                    <Tag text="2D Platformer" />
                    <Tag text="Local Multiplayer" />
                  </div>
                </div>

                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                  <p className="font-bold text-lg text-text-secondary w-full sm:w-auto">
                    Game Modes:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="2-8 Players" />
                    <Tag text="Single Player" />
                  </div>
                </div>

                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                  <p className="font-bold text-lg text-text-secondary w-full sm:w-auto">
                    Level Duration:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Tag text="2-3 min per round" />
                  </div>
                </div>

                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2">
                  <p className="font-bold text-lg text-text-secondary w-full sm:w-auto">
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
        </section>

        {/* Seção 3: Narrative Background */}
        <section
          id="narrative-background"
          className="bg-gray-background text-text-secondary font-sans px-8 py-16"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
                Narrative Background
              </h2>
              <p className="text-text-secondary leading-relaxed">
                In a medieval kingdom ruled by a merciless king, a group of
                captured jesters is forced to compete for the chance to become
                the next royal fool and to avoid a darker fate. To win the
                King’s favor, they must survive a series of chaotic physical
                challenges, filled with traps, unstable platforms, and constant
                surprises.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                While the current version of the game centers on fast-paced
                competition, future levels will introduce new formats and
                changing dynamics. Cooperative modes and unexpected twists will
                be included, expanding the ways players interact and survive in
                the King's cruel court.
              </p>
            </div>

            <div>
              <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
                Target Audience
              </h2>
              <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed">
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
          className="w-full aspect-[3/1] bg-cover bg-center"
          style={{ backgroundImage: `url(${gameplayImage})` }}
        ></section>

        {/* Seção 5: Core Experience Pillars */}
        <section
          id="core-pillars"
          className="bg-red-secondary-dark text-text-main px-8 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-libra text-4xl text-text-main tracking-widest mb-12">
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
            <h2 className="text-text-main font-libra text-4xl tracking-widest mb-12">
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
            <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-16">
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
                      The game begins once all players are connected. Each
                      player controls a jester on the playing field, using the
                      phone's motion sensors (accelerometer and gyroscope) to
                      move their character.
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

        {/* Seção 8: Visual Identity */}
        <section
          id="visual-identity-text"
          className="bg-gray-background px-8 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
              visual identity
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-pretty">
              <p>
                The visual identity of The King’s Jest, specifically in the main
                menu and all non-gameplay interface screens, was designed with a
                blend of medieval references and stylistic influences from
                woodcut printing. This aesthetic frames the game as a satirical
                relic from a chaotic royal court.
              </p>
              <p>
                The color palette combines shades of grey and beige with
                high-contrast reds and yellows. These colors were selected to
                evoke intensity and urgency, while still grounding the visuals
                in a vintage, storybook-like atmosphere.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 9: Color Palette */}
        <section id="color-palette" className="bg-gray-dark">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* --- COLUNA 1 --- */}
            <div>
              <ColorSwatch
                heightClass="h-[346px]"
                colorName="Linen Beige"
                hexCode="#E3DDD3"
                bgColorClass="bg-text-main"
                textColorClass="text-gray-dark"
              />
              <div className="grid grid-cols-2">
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Royal Gold"
                  hexCode="#FF9E28"
                  bgColorClass="bg-yellow"
                  textColorClass="text-gray-dark"
                />
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Parchment Beige"
                  hexCode="#CEC1AC"
                  bgColorClass="bg-text-main-dark"
                  textColorClass="text-gray-dark"
                />
              </div>
            </div>

            {/* --- COLUNA 2 --- */}
            <div>
              <ColorSwatch
                heightClass="h-[346px]"
                colorName="Infernal Red"
                hexCode="#BA2A14"
                bgColorClass="bg-red-main-light"
              />
              <div className="grid grid-cols-3">
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Ember Core"
                  hexCode="#8E0F0F"
                  bgColorClass="bg-red-main-dark"
                />
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Scorched Woe"
                  hexCode="#521111"
                  bgColorClass="bg-red-secondary-light"
                />
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Coal Ash"
                  hexCode="#2E0606"
                  bgColorClass="bg-red-secondary-dark"
                />
              </div>
            </div>

            {/* --- COLUNA 3 --- */}
            <div>
              <ColorSwatch
                heightClass="h-[346px]"
                colorName="Stone Gray"
                hexCode="#37353D"
                bgColorClass="bg-gray-light"
              />
              <div className="grid grid-cols-2">
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Dungeon Gray"
                  hexCode="#242329"
                  bgColorClass="bg-gray-background"
                />
                <ColorSwatch
                  heightClass="h-40"
                  colorName="Midnight Black"
                  hexCode="#191515"
                  bgColorClass="bg-gray-dark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 10: UI Design */}
        <section
          id="ui-design"
          className="bg-gray-dark text-text-secondary px-8 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
              ui design
            </h2>
            <div className="space-y-6 leading-relaxed text-pretty">
              <p>
                The interface makes strong use of ornamental frames, textured
                buttons, and stylized cards to convey a sense of handcrafted
                detail. Typography plays an important role in reinforcing this
                theme: choosing serif fonts for their traditional, formal look
                that echoes the tone of historical documents while maintaining
                modern readability.
              </p>
              <p>
                This visual system sets the tone for the player’s journey before
                the chaos of gameplay begins, creating a sharp contrast between
                the structured, satirical menu and the unpredictable action that
                follows in the King’s court.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 11: Showcase Image */}
        <section
          id="ui-showcase"
          className="relative w-full aspect-[3/1] bg-red-secondary-dark bg-cover bg-center"
          style={{ backgroundImage: `url(${uiDesignImage})` }}
        >
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-dark to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-background to-transparent"></div>
        </section>

        {/* Seção 12: Design System */}
        <section id="design-system" className="bg-gray-background px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-12">
              design system
            </h2>

            <img
              src={designSystemImage}
              alt="Design system do jogo The King's Jest"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* Seção 13: Visual Direction */}
        <section
          id="visual-direction"
          className="bg-gray-background text-text-secondary px-8 py-16"
        >
          <div className="max-w-6xl mx-auto relative">
            <h2 className="font-libra text-4xl text-text-secondary tracking-widest mb-6">
              in-game visual direction
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-pretty">
              <p>
                The in-game visual style of The King’s Jest was developed to
                visually reinforce the chaotic humor and twisted lore of the
                King’s challenges. Every element, from backgrounds to
                characters, was designed to feel like a story unfolding through
                imagery, with environments and animations working together to
                build a coherent, expressive world.
              </p>
              <div>
                <p>
                  We chose pixel art as the core visual language for several
                  reasons:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>
                    It suited the technical constraints of developing a 2D
                    mobile game within a short three-month timeframe;
                  </li>
                  <li>
                    It evokes the nostalgic feel of classic games, while being
                    flexible enough for modern reinterpretation;
                  </li>
                  <li>
                    It naturally complements the frantic, fast-paced rhythm of
                    platforming gameplay.
                  </li>
                </ul>
              </div>
            </div>

            <img
              src={jesterHeadImage}
              alt="Jester Head Icon"
              className="absolute -bottom-17 right-0 w-24 h-auto"
            />
          </div>
        </section>

        {/* Seção 14: Character Animations */}
        <section id="character-animations" className="bg-gray-dark px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <img
                src={idleJester}
                alt="Animação do personagem idle"
                className="flex-1 min-w-0 aspect-[1/1] object-contain max-w-48 md:max-w-xs"
              />
              <img
                src={runJester}
                alt="Animação do personagem correndo"
                className="flex-1 min-w-0 aspect-[1/1] object-contain max-w-48 md:max-w-xs"
              />
              <img
                src={jumpJester}
                alt="Animação do personagem pulando"
                className="flex-1 min-w-0 aspect-[1/1] object-contain max-w-48 md:max-w-xs"
              />
              <img
                src={deathJester}
                alt="Animação do personagem morrendo"
                className="flex-1 min-w-0 aspect-[1/1] object-contain max-w-48 md:max-w-xs"
              />
            </div>
          </div>
        </section>

        {/* Seção 15: Visual Identity Details */}
        <section
          id="visual-identity-details"
          className="bg-gray-background text-text-secondary px-8 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 leading-relaxed text-pretty">
              <p>
                This stylistic choice also allowed us to match the aesthetic and
                technical qualities of the characters and scenarios. Each jester
                character was crafted to visually "belong" in their environment,
                both in color treatment and animation, making the chaos feel
                cohesive rather than overwhelming.
              </p>
              <p>
                We are already working to expand the visual storytelling of
                future levels while maintaining the game’s satirical and
                carnivalesque tone. The world of The King’s Jest thrives on
                visual irony, exaggerated characters, and "joyful chaos"; a
                vibrant mix of personality and color that keeps the world alive,
                even as players face danger at every turn.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 16: Final Showcase */}
        <section
          id="final-showcase"
          className="w-full aspect-[16/8] bg-cover bg-bottom relative"
          style={{ backgroundImage: `url(${finalSceneImage})` }}
        >
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-background to-transparent"></div>
        </section>
      </main>
    </>
  );
}

export default GDD;
