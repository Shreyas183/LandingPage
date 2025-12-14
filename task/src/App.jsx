import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Shreyas</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-box">
          <h2>Build. Grow. Succeed.</h2>
          <p>
            Helping startups and individuals turn ideas into real,
            scalable products.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shreyas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
