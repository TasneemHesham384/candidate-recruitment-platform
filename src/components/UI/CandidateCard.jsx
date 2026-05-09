import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
export default function CandidateCard({ candidate }) {
  const {
    fullName,
    headline,
    location,
    yearsOfExperience,
    skills,
    status,
    avatarClass,
    id,
  } = candidate;

  return (
    <div
      className={`candidate-card ${candidate.isShortlisted ? "shortlisted" : ""}`}
    >
      {candidate.isShortlisted ? (
        <StarIcon style={{ color: "gold" }} />
      ) : (
        <StarBorder style={{ color: "#6366f1" }} />
      )}{" "}
      <div className="card-content">
        <div className="avatar-wrapper">
          <Tooltip title="View Profile">
            <Link to={`/profile/${id}`} className="avatar-link">
              <div
                className={`avatar-sprite ${avatarClass}`}
                role="img"
                aria-label={fullName}
              ></div>
            </Link>
          </Tooltip>
        </div>

        <div className="candidate-info">
          <Tooltip title={`View ${fullName}'s Profile`} arrow>
            <Link to={`/profile/${id}`} className="name-link">
              <h3 className="candidate-name">{fullName}</h3>
            </Link>
          </Tooltip>
          <p className="candidate-role">{headline}</p>
        </div>

        <div className="candidate-meta">
          <div className="meta-item">
            <LocationOnIcon className="meta-icon" />
            <span>{location}</span>
          </div>
          <div className="meta-item">
            <WorkHistoryIcon className="meta-icon" />
            {/* عرض الرقم فقط لتجنب مشكلة الـ Object */}
            <span>{yearsOfExperience} years exp</span>
          </div>
        </div>

        <div className="candidate-tags">
          {skills?.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div
          className={`status-badge ${
            status === "Open to work" ? "open" : "busy"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
}
