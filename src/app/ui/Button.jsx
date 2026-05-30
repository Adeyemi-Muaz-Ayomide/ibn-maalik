const Button = () => {
  return (
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
  );
};

export default Button;
