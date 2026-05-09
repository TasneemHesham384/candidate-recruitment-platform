import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Talent<span>Hub</span>
          </h2>
          <p>
            The leading platform for connecting top software engineering talent
            with world-class companies.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Tasneem Hesham. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
