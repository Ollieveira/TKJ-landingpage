export default function SocialLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-white hover:text-gray-300 transition-colors"
    >
      <span className="w-6 h-6">{icon}</span>
      <span className="font-semibold">{text}</span>
    </a>
  );
}