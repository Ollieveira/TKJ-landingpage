export default function ColorSwatch({
  colorName,
  hexCode,
  bgColorClass,
  heightClass,
  textColorClass = "text-text-secondary",
}) {
  return (
    // O container principal continua sendo o 'contexto' para o posicionamento
    <div className={`relative ${heightClass} ${bgColorClass}`}>
      {/* Nome da Cor (Posicionado no Canto Superior Esquerdo) */}
      <p
        className={`absolute top-0 left-0 p-4 md:p-6 font-medium text-sm ${textColorClass} opacity-40`}
      >
        {colorName}
      </p>

      {/* Código Hexadecimal (Posicionado no Canto Inferior Direito) */}
      <p
        className={`absolute bottom-0 right-0 p-4 md:p-6 font-mono uppercase text-xs ${textColorClass} opacity-40`}
      >
        {hexCode}
      </p>
    </div>
  );
}
