import Link from "next/link";

const Navbar = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <div className="nav-logo">Ibn Maalik Institute</div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link href="#levels" onClick={() => setIsMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link href="#how" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </Link>
        </li>

        <li>
          <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/enroll"
            className="nav-cta text-white! uppercase tracking-widest rounded-none!"
            onClick={() => setIsMenuOpen(false)}
          >
            ✦ Enroll Now
          </Link>
        </li>
      </ul>
      <button
        className="hamburger"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
