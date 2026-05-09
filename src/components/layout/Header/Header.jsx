import Icon from "../../UI/icon";
import NavLinks from "../../UI/navbar";
import AccountMenu from "../../UI/userProfile";
import "./header.css";
export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <Icon />
          <h2>
            Talent<span style={{ color: " #2563eb" }}>Hub</span>
          </h2>
          <nav>
            <NavLinks />
          </nav>
        </div>
        <div className="account">
          <AccountMenu />
        </div>
      </div>
    </>
  );
}
