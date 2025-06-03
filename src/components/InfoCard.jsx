export default function InfoCard({ iconSrc, iconAlt, title, description }) {
  return (
    <div className="bg-red-main-light p-6 rounded-lg flex items-center gap-4 sm:gap-6 shadow-lg">
      <img 
        src={iconSrc} 
        alt={iconAlt || title} 
        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" 
      />
      <div>
        <h3 className="text-text-main font-bold text-lg md:text-xl mb-1">
          {title}
        </h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}