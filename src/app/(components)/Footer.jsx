import Image from "next/image";
import whatsappLogo from "../../../public/WhatsApp-Logo.wine.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-logo">Ibn Maalik Institute</span>
          {/* <div className="arabic">معهد ابن مالك</div> */}
          <p>
            A structured path to reading the Qur&apos;an with Tajweed - for
            beginners to advanced students, taught live by qualified teachers.
          </p>
        </div>

        <div className="footer-bum">
          <Link
            href="https://wa.me/2347084605347?text=Assalamu%20alaykum,%20I%20want%20to%20enroll%20at%20Ibn%20Maalik%20Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-5 z-50 flex items-center  rounded-2xl bg-green-600 text-white shadow-lg transition hover:scale-105"
          >
            <Image
              priority
              src={whatsappLogo}
              alt="Whatsapp Logo"
              width={50}
              height={50}
            />

            <span className="text-sm font-medium">Chat with us directly</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ibn Maalik Institute. All rights reserved.</span>
        <span className="footer-dua">نسأل الله الإخلاص والقبول</span>
      </div>
    </footer>
  );
};

export default Footer;
