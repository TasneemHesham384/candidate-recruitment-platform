import PeopleIcon from "@mui/icons-material/People";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./stats.css";

export default function Stats() {
  // لازم كلمة return والقوسين دول عشان الكود يشتغل
  return (
    <div className="hero-stats">
      <div className="stat-item">
        <div className="stat-icon-wrapper blue">
          <PeopleIcon />
        </div>
        <div className="stat-text">
          <strong>1,248</strong>
          <span>Total Candidates</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon-wrapper purple">
          <PsychologyIcon />
        </div>
        <div className="stat-text">
          <strong>32+</strong>
          <span>Top Skills</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon-wrapper orange">
          <LocationOnIcon />
        </div>
        <div className="stat-text">
          <strong>24</strong>
          <span>Locations</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon-wrapper orange">
          <StarBorderIcon />
        </div>
        <div className="stat-text">
          <strong>4.8</strong>
          <span>Avg. Score</span>
        </div>
      </div>
    </div>
  );
}
