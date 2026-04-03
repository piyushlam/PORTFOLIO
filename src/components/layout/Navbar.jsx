function Navbar({ items, activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="top-nav glass-panel">
      <div className="brand-block">
        <span className="brand-mark">SL</span>
        <div>
          <strong>Siddhesh Lambade</strong>
          <small>Portfolio</small>
        </div>
      </div>
      <nav>
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className={activeSection === item.id ? 'is-active' : ''}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
