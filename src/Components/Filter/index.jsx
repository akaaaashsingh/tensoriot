import { MenuItem, Select } from "@mui/material";
import { setFilter, useSpaceXController } from "../../Context";
import { useSearchParams } from "react-router-dom";
import { filters } from "../../utils/constant";

export default function FilterComponent() {
  const [controller, dispatch] = useSpaceXController();
  const { filterType } = controller;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    const finder = filters?.find((filter) => filter?.value === e.target.value);
    setSearchParams({ filterType: finder?.value });
    setFilter(dispatch, finder);
  };

  return (
    <Select
      value={filterType?.value}
      defaultValue={filterType?.label}
      onChange={handleChange}
    >
      {filters?.map((filterValue) => (
        <MenuItem key={filterValue?.value} value={filterValue?.value}>
          {filterValue?.label}
        </MenuItem>
      ))}
    </Select>
  );
}
