import CandidateCard from "../../UI/CandidateCard";
import "./candidatesContainer.css";
import YouTube from "../../UI/allCandidatesSkelton";

export default function CandidatesContaier({ isError, isLoading, data }) {
  if (isLoading) return <YouTube />;

  if (isError)
    return <div className="error">عذراً، حدث خطأ في جلب البيانات.</div>;

  // ✅ الـ Empty State هنا
  if (data?.length === 0) {
    return (
      <div
        className="empty-state"
        style={{ textAlign: "center", padding: "40px", color: "#666" }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" // أي أيكونة تعجبك
          alt="No results"
          style={{ width: "100px", marginBottom: "20px", opacity: 0.5 }}
        />
        <h3>No candidates found</h3>
        <p style={{ marginTop: "10px" }}>
          We couldn't find any results matching your current search or filters.
          Try adjusting your criteria or clearing all filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <p style={{ marginBottom: "15px", color: "#000" }}>
        Found <strong>{data.length}</strong> candidates
      </p>

      <div className="CandidateContainer" id="candidates">
        {data?.map((d) => {
          return <CandidateCard key={d.id} candidate={d} />;
        })}
      </div>
    </>
  );
}
