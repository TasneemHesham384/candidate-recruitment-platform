import { useState } from "react";

export default function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#hero" className="active">Home</a></li>
        <li><a href="#candidates">Browse Candidates</a></li>
        {/* <li><a href="#shortlisted">My Shortlist</a></li> */}
      </ul>
    </>
  );
}