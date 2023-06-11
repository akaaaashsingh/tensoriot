import { CircularProgress, TableBody, TableRow } from "@mui/material";
import { TableCell } from "./CommonMUIStyles";
import { useStyles } from "./sharedComponents.styles";

export default function Loader() {
  const classes = useStyles();
  return (
    <TableBody>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map((i) => (
        <TableRow key={i} style={{ height: 53 }}>
          {i === 5 ? (
            <TableCell colSpan={7} className={classes.customTableCellClass}>
              <CircularProgress />
            </TableCell>
          ) : (
            <TableCell colSpan={7} />
          )}
        </TableRow>
      ))}
    </TableBody>
  );
}
