import fullHeroDesign from "../../../assets/hero.png";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>
              Discover top tech talent <br />
              <span className="text-primary">instantly</span>
            </h1>
            <p>
              Search, filter and connect with the best candidates for your team.
              Our platform streamlines your hiring process from sourcing to
              onboarding.
            </p>
            <div className="hero-actions">
              <a href="#candidates" className="btn-primary">
                Browse Candidates →
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src={fullHeroDesign}
              alt="Talent Hub Design Showcase"
              className="full-design-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
