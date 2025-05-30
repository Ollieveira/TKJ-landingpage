export default function FeatureHighlight({ title, description }) {
  return (
    <div> {/* Este é o contêiner principal para cada feature, ele se ajusta à célula do grid */}
      <div 
        className="bg-red-main-light text-text-main font-sans font-semibold text-lg px-6 py-3 rounded-md mb-4 shadow-md text-center" 
        // REMOVIDO: inline-block
        // ADICIONADO: text-center
      >
        <h3>{title}</h3>
      </div>
      <p className="text-text-main-dark font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
}