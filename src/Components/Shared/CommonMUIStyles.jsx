import MuiTableCell from "@mui/material/TableCell";
import { withStyles } from "@mui/styles";

export const TableCell = withStyles({
  root: {
    border: "none !important",
  },
})(MuiTableCell);
