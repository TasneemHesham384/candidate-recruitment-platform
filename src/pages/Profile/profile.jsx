import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UseCandidatesContext } from "../../Contexts/candidatesContext";

// Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MailLockOutlined } from "@mui/icons-material";

import Variants from "../../components/UI/profileSkelton";
import "./profile.css";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isUpdating, toggleShortlist, rejectCandidate } =
    UseCandidatesContext();

  const {
    data: candidate,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["candidate", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/candidates/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="profile-wrapper loading">
        <Variants />
      </div>
    );
  }

  if (isError || !candidate) {
    return (
      <div className="profile-wrapper">
        <div className="detail-card" style={{ textAlign: "center" }}>
          <h2>Candidate Not Found</h2>
          <p>We couldn't find the profile you're looking for.</p>

          <button
            onClick={() => navigate("/")}
            className="btn-shortlist"
            style={{ marginTop: "20px" }}
          >
            Back to Candidates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      {/* NAV */}
      <div className="profile-nav">
        <button onClick={() => navigate(-1)} className="back-link-btn">
          <ArrowBackIosIcon style={{ fontSize: 14 }} />
          Back to candidates
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="main-info-card">
        {/* HEADER */}
        <div className="header-flex-container">
          {/* LEFT */}
          <div className="profile-identity">
            <div className={`avatar-sprite ${candidate.avatarClass}`} />

            <div className="identity-text">
              <h1>{candidate.fullName}</h1>
              <p className="headline-text">{candidate.headline}</p>

              <div className="meta-row">
                <span>
                  <LocationOnIcon /> {candidate.location}
                </span>
                <span>
                  <WorkIcon /> {candidate.yearsOfExperience} years exp
                </span>
                <span>
                  <AccessTimeIcon /> {candidate.availability}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="header-actions">
            {/* badge + score */}
            <div className="top-badges">
              <span
                className={`badge ${
                  candidate.status === "Open to work" ? "open" : "busy"
                }`}
              >
                {candidate.status}
              </span>

              <div className="score-widget">
                <span className="score-val">{candidate.score}</span>
                <span className="score-label">SCORE</span>
              </div>
            </div>

            {/* buttons */}
            <div className="button-group">
              {/* ⭐ SHORTLIST FIX */}
              <button
                className={`btn-shortlist ${
                  candidate.isShortlisted ? "active" : ""
                }`}
                onClick={() =>
                  toggleShortlist(candidate.id, candidate.isShortlisted)
                }
                disabled={isUpdating}
              >
                {candidate.isShortlisted ? (
                  <>
                    <StarIcon /> Shortlisted
                  </>
                ) : (
                  <>
                    <StarBorderIcon /> Shortlist
                  </>
                )}
              </button>

              <button
                className={`btn-reject ${
                  candidate.status === "Rejected" ? "active" : ""
                }`}
                onClick={() => rejectCandidate(candidate.id, candidate.status)}
                disabled={isUpdating}
              >
                Reject
              </button>

              <button className="btn-more">
                <BookmarkBorderIcon />
              </button>

              <button className="btn-more">
                <MoreHorizIcon />
              </button>
            </div>
          </div>
        </div>

        {/* TABS (UNCHANGED) */}
        <div className="tab-menu">
          <span className="tab-item active">Overview</span>
          <span className="tab-item">Experience</span>
          <span className="tab-item">Projects</span>
          <span className="tab-item">Notes</span>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="content-grid">
        {/* MAIN */}
        <div className="main-column">
          <section className="detail-card">
            <h3>About</h3>
            <p className="bio-text">{candidate.summary}</p>
          </section>

          <section className="detail-card">
            <h3>Skills</h3>
            <div className="skills-grid">
              {candidate.skills?.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="detail-card">
            <h3>Experience</h3>

            <div className="timeline-container">
              {candidate.experience?.map((exp, i) => (
                <div key={i} className="timeline-block">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p className="company-info">
                      {exp.company} • {exp.start} - {exp.end}
                    </p>
                    <ul>
                      {exp.highlights?.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="detail-card">
            <h3>Projects</h3>

            {candidate.projects?.map((p, i) => (
              <div key={i} style={{ marginBottom: "12px" }}>
                <strong>{p.name}</strong>
                <p>{p.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* SIDE */}
        <div className="side-column">
          <section className="detail-card">
            <h3>Contact</h3>
            <div className="contact-item">
              <MailLockOutlined />
              <span>{candidate.email || "No email"}</span>
            </div>
          </section>

          <section className="detail-card">
            <h3>Education</h3>
            <p>{candidate.education}</p>
          </section>

          <section className="detail-card">
            <h3>Languages</h3>
            {candidate.languages?.map((l) => (
              <span key={l} className="skill-pill">
                {l}
              </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
