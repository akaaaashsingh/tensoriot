import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { lazy, useState } from "react";
import Loader from "../Shared/Loader";
import { TableCell } from "../Shared/CommonMUIStyles";
import { getLaunchStatus } from "../../utils/helper";
import { tableHeads } from "../../utils/constant";
import { useStyles } from "./style";

// this lazy import is just for demo
// although it does makes the initial render time less by neglible amount of time
// with this being imported as lazy
// the initial render time reduces from 296ms to 231ms
// the bundle.js drops from 690KB to 679KB with a 300B of chunk file for Pagination
// which is overall reduction in size and time
const Pagination = lazy(() => import("../Pagination"));

export default function CustomPaginationActionsTable({ rows }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const classes = useStyles();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      component={Paper}
    >
      <Table className={classes.customTableClass}>
        <TableHead className={classes.customTableHead}>
          {tableHeads?.map((heading) => (
            <TableCell key={heading}>{heading}</TableCell>
          ))}
        </TableHead>
        {!rows ? (
          <Loader />
        ) : (
          <TableBody>
            {(rowsPerPage > 0
              ? rows?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : rows
            )?.map((row) => (
              <TableRow key={row.launch_date_unix}>
                <TableCell>{row?.flight_number}</TableCell>
                <TableCell>{row?.launch_date_utc}</TableCell>
                <TableCell>{row?.launch_site?.site_name}</TableCell>
                <TableCell>{row?.mission_name}</TableCell>
                <TableCell>
                  {row?.rocket?.second_stage?.payloads[0]?.orbit}
                </TableCell>
                <TableCell>
                  <Chip
                    color={
                      getLaunchStatus(row?.upcoming, row?.launch_success)?.color
                    }
                    label={
                      getLaunchStatus(row?.upcoming, row?.launch_success)?.label
                    }
                  />
                </TableCell>
                <TableCell>{row?.rocket?.rocket_name}</TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            {rows && (
              <Pagination
                page={page}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                rows={rows}
              />
            )}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
