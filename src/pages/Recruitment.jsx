import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import Footer from "../components/layout/footer/footer";
import FiltersContainer from "../components/layout/allFilters/filtersCard";
import CandidatesContaier from "../components/layout/candidatesContnaier/candidatesContainer";
import Header from "../components/layout/Header/Header";
import Hero from "../components/layout/hero/hero";
import Stats from "../components/layout/stats/stats";
import useCandidates from "../services/Usecandidates";

export default function Recuirment() {
  const [searchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      search: searchParams.get("search") || "",
      location: searchParams.get("location") || "All",
      experience: searchParams.get("experience") || "All",
      availability: searchParams.get("availability") || "All",
      status: searchParams.get("status") || "All",
      sortBy: searchParams.get("sortBy") || "",
    }),
    [searchParams],
  );

  const { data, isLoading, isError } = useCandidates(filters);

  return (
    <div className="recruiment">
      <Header />
      <div className="container">
        <div className="body">
          <Hero />
          <Stats />

          <FiltersContainer filters={filters} />

          <CandidatesContaier
            data={data}
            isLoading={isLoading}
            isError={isError}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}
