import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const handleSearch = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (val) {
      newParams.set("search", val);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  return (
    <TextField
      fullWidth
      placeholder="Search by name, skill or headline..."
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
