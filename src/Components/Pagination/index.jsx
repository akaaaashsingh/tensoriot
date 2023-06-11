import { TablePagination } from "@mui/material";
import TablePaginationActions from "../TablePaginationActions";

export default function Pagination({
  rows,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[12, 30, 50, { label: "All", value: -1 }]}
      colSpan={7}
      count={rows?.length}
      rowsPerPage={rowsPerPage}
      page={page}
      SelectProps={{
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={TablePaginationActions}
    />
  );
}
