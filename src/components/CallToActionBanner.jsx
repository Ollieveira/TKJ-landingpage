import bannerDownload from "../assets/banner-download.png";
import appStoreButtonImage from "../assets/app-store-button.svg";
import qrCodeImage from "../assets/qr-code-tkj-appstore-jester.png";

export default function CallToActionBanner() {
  return (
    <div
      id="cta-banner"
      className="absolute left-1/2 -translate-x-1/2 -bottom-85 w-full max-w-5xl aspect-[1235/490] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerDownload})` }}
    >
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-1/2 md:w-[55%]"></div>

        <div className="w-1/2 md:w-[45%] flex flex-col items-start justify-center py-8 pl-4 md:pl-0">
          <p className="text-sm uppercase font-semibold text-red-secondary-dark tracking-wider mb-2">
            Become the Kingdom's Next Royal Fool.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-red-secondary-dark mb-6 leading-tight">
            Download <br className="hidden md:block" />
            Mobile App
          </h2>
          <a
            href="https://apps.apple.com/br/app/the-kings-jest/id6743722492"
            target="_blank"
          >
            <img
              src={appStoreButtonImage}
              alt="Download on the App Store"
              className="h-14 md:h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>

      <img
        src={qrCodeImage}
        alt="QR Code for app download"
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-20 h-20 md:w-32 md:h-32 rounded-xl"
      />
    </div>
  );
}
