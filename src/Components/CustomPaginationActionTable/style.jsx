import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customTableClass: {
    margin: "1% 10% !important",
    border: "solid 2px silver !important",
  },
  customTableHead: {
    border: "solid 1px silver !important",
    backgroundColor: "silver !important",
  },
}));

export { useStyles };
