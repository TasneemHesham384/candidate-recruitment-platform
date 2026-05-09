import { Paper } from "@mui/material";
import SearchBar from "../../UI/searchBar";
import FilterPanel from "../../UI/filter";
import ActiveFilters from "../../UI/ActiveFilters";
import { useSearchParams } from "react-router-dom";

import "./filters.css";

export default function FiltersContainer({ filters }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (!value || value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }} className="filterCards">
      <SearchBar
        value={filters.search}
        onChange={(val) => updateParam("search", val)}
      />

      <FilterPanel filters={filters} onChange={updateParam} />

      <ActiveFilters filters={filters} onChange={updateParam} />
    </Paper>
  );
}
