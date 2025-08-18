export default function SocialLink({ href, iconSrc, text }) {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // A mágica está aqui: 'inline-flex' faz este <a> ter a largura do seu conteúdo
        className="inline-flex items-center gap-4 text-white hover:text-gray-300 transition-colors"
      >
        <img
          src={iconSrc}
          alt={`${text} icon`}
          className="-6 h-6 filter brightness-0 invert"
        />
        <span className="font-semibold">{text}</span>
      </a>
    </div>
  );
}
