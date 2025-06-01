import cardTexture from "../assets/card-texture.png";

export default function PillarCard({ title, text }) {
  return (
    // Container principal do card com posicionamento relativo
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      {/* 1. Cor de fundo sólida */}
      <div className="absolute inset-0 bg-red-main-dark "></div>

      {/* 2. Imagem de textura por cima (deve ser uma imagem com transparência) */}
      <div
        className="absolute inset-2 bg-cover bg-center rounded-3xl opacity-90"
        style={{ backgroundImage: `url(${cardTexture})` }}
      ></div>

      {/* 3. Conteúdo do card */}
      <div className="relative p-6 text-text-main h-full flex flex-col">
        <h3 className="bg-red-main-dark text-center font-bold text-lg py-2 px-4 rounded-md shadow-md mb-4">
          {title}
        </h3>
        <p className="text-text-main leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
