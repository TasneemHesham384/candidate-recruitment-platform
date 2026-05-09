import { Chip, Stack, Button, Typography, Box } from "@mui/material";

import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useSearchParams } from "react-router-dom";

export default function ActiveFilters({ filters }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeEntries = Object.entries(filters).filter(
    ([key, value]) => value && value !== "All" && key !== "sortBy",
  );

  const removeFilter = (key) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    setSearchParams(params);
  };

  const handleResetAll = () => {
    setSearchParams({});
  };

  if (activeEntries.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Active Filters:
        </Typography>

        {activeEntries.map(([key, value]) => (
          <Chip key={key} label={value} onDelete={() => removeFilter(key)} />
        ))}
      </Stack>

      <Button
        size="small"
        onClick={handleResetAll}
        startIcon={<RestartAltIcon />}
      >
        Reset All
      </Button>
    </Box>
  );
}
