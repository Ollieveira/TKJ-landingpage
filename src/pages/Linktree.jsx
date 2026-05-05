import SocialLink from "../components/SocialLink";

import logoImage from "../assets/logo.png";
import appStoreBadge from "../assets/en-apple-badge-download.svg";
import playStoreBadge from "../assets/en-google-badge-download.svg";
import iosQrCode from "../assets/ios-qr-code-tkj.png";
import androidQrCode from "../assets/android-qr-code-tkj.png";

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
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.JestersCompany.TheKingsJest",
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center font-sans">

      <style>{`
        .linktree-mobile  { display: flex; }
        .linktree-desktop { display: none; }

        @media (min-width: 426px) {
          .linktree-mobile  { display: none; }
          .linktree-desktop { display: flex; }
        }
      `}</style>

      {/* ── MOBILE (≤ 425 px) ── */}
      <div className="linktree-mobile w-full max-w-sm p-8 flex-col">
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

        <hr className="border-white my-8" />

        <a
          href={`mailto:${email}`}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
        </a>

        {/* Badges — App Store e Google Play */}
        <div className="flex flex-col items-start gap-4">
          <a
            href={downloadLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href={downloadLinks.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playStoreBadge}
              alt="Get it on Google Play"
              className="h-14 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>

      {/* ── DESKTOP (> 425 px) ── */}
      <div className="linktree-desktop w-full max-w-4xl p-8 items-start justify-between gap-16">

        {/* Coluna Esquerda */}
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

          <hr className="border-white my-8" />

          <a
            href={`mailto:${email}`}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <h3 className="text-2xl font-bold">Contact Us</h3>
          </a>
        </div>

        {/* Coluna Direita — QR Codes + Badges */}
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <p className="text-gray-400 font-semibold text-sm tracking-wide uppercase">
            Scan to download
          </p>

          <div className="flex items-start justify-center gap-8">
            {/* iOS */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={iosQrCode}
                alt="QR Code — Download on the App Store"
                className="w-36 h-36"
              />
              <a
                href={downloadLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            {/* Android */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={androidQrCode}
                alt="QR Code — Get it on Google Play"
                className="w-36 h-36"
              />
              <a
                href={downloadLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playStoreBadge}
                  alt="Get it on Google Play"
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
