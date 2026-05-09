import { FormControl, Select, MenuItem, Grid, InputLabel } from "@mui/material";

import { filtersConfig } from "./filterConfig";

export default function FilterPanel({ filters, onChange }) {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {Object.keys(filtersConfig).map((key) => (
        <Grid item xs={12} sm={6} md={3} key={key}>
          <FormControl fullWidth size="small">
            <InputLabel>{key}</InputLabel>

            <Select
              value={filters[key]}
              label={key}
              onChange={(e) => onChange(key, e.target.value)}
            >
              {filtersConfig[key].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
}
