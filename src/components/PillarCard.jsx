import cardTexture from "../assets/card-texture.png"; 

export default function PillarCard({ title, text }) {
  return (
    // Container principal do card com posicionamento relativo
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      {/* 1. Cor de fundo sólida */}
      <div className="absolute inset-0 bg-[#8E0F0F] "></div>
      
      {/* 2. Imagem de textura por cima (deve ser uma imagem com transparência) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ backgroundImage: `url(${cardTexture})` }}
      ></div>

      {/* 3. Conteúdo do card */}
      <div className="relative p-6 text-white h-full flex flex-col">
        <h3 className="bg-custom-red text-center font-bold text-lg py-2 px-4 rounded-md shadow-md mb-4">
          {title}
        </h3>
        <p className="text-gray-200 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
