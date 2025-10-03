import SocialLink from "../components/SocialLink";

import logoImage from "../assets/logo.png";
import appStoreImage from "../assets/app-store-button.svg";
import qrCodeImage from "../assets/qr-code-tkj-appstore-jester.png";
import androidFreeKeyImage from "../assets//free-key-android.png";

import instagramIconSrc from "../assets/SocialMediasIcons/instagram.svg";
import xIconSrc from "../assets/SocialMediasIcons/twitter-alt.svg";
import tikTokIconSrc from "../assets/SocialMediasIcons/tik-tok.svg";
import discordIconSrc from "../assets/SocialMediasIcons/discord.svg";

export default function Linktree() {
  const email = "thekingsjestapp@gmail.com";
  const socialLinks = {
    instagram: "https://www.instagram.com/thekingsjest/",
    x: "https://x.com/kingsjestgame",
    tiktok:
      "https://www.tiktok.com/@the.kings.jest?is_from_webapp=1&sender_device=pc",
    discord: "https://discord.gg/Yyj5DSnVNa",
  };
  const downloadLinks = {
    appStore: "https://apps.apple.com/br/app/the-kings-jest/id6743722492",
    androidKey: "https://docs.google.com/forms/d/e/1FAIpQLSeYWpmbRd680dI6SwZERYwNfdtxsuCSOMy3azgYX3sePDjZQA/viewform?usp=sharing&ouid=109247685531015344942",
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center font-sans">
      {/* --- Visualização Mobile --- */}
      <div className="w-full max-w-sm p-8 md:hidden">
        <img
          src={logoImage}
          alt="The King's Jest Logo"
          className="h-16 w-auto mb-10"
        />
          <div className="flex flex-col items-start space-y-6">
          <SocialLink
            href={socialLinks.instagram}
            iconSrc={instagramIconSrc}
            text="@thekingsjest"
          />
          <SocialLink
            href={socialLinks.x}
            iconSrc={xIconSrc}
            text="@kingsjestgame"
          />
          <SocialLink
            href={socialLinks.tiktok}
            iconSrc={tikTokIconSrc}
            text="@the.kings.jest"
          />
          <SocialLink
            href={socialLinks.discord}
            iconSrc={discordIconSrc}
            text="Join our server!"
          />
        </div>
        <hr className="text-white my-8" />
        <a
          href={`mailto:${email}`}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        </a>
        <div className="flex flex-col items-start gap-4">
          <a
            href={downloadLinks.androidKey}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={androidFreeKeyImage}
              alt="Get the FREE Android access key!"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </a>

          <a
            href={downloadLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStoreImage}
              alt="Download on the App Store"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>{" "}
      </div>

      {/* --- Visualização Desktop --- */}
      <div className="hidden md:flex w-full max-w-4xl p-8 items-center justify-between gap-16">
        {/* Coluna da Esquerda */}
        <div className="w-1/2">
          <img
            src={logoImage}
            alt="The King's Jest Logo"
            className="h-20 w-auto mb-12"
          />

            <div className="flex flex-col items-start space-y-8">
            <SocialLink
              href={socialLinks.instagram}
              iconSrc={instagramIconSrc}
              text="@thekingsjest"
            />
            <SocialLink
              href={socialLinks.x}
              iconSrc={xIconSrc}
              text="@kingsjestgame"
            />
            <SocialLink
              href={socialLinks.tiktok}
              iconSrc={tikTokIconSrc}
              text="@the.kings.jest"
            />
            <SocialLink
              href={socialLinks.discord}
              iconSrc={discordIconSrc}
              text="Join our server!"
            />
          </div>

          <hr className="text-white my-8" />

          <a
            href={`mailto:${email}`}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          </a>
        </div>

        {/* Coluna da Direita (QR Code) */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <img
            src={qrCodeImage}
            alt="QR Code for App Store Download"
            className="w-64 h-64"
          />
          <p className="text-gray-400 font-semibold mb-6">
            Scan to download on the App Store
          </p>

          <a
            href={downloadLinks.androidKey}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={androidFreeKeyImage}
              alt="Get the FREE Android access key!"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
