import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    display: "flex !important",
    justifyContent: "end !important",
    padding: "2% 10% 0 0 !important",
  },
  mainContainer: {
    display: "flex !important",
    flexDirection: "column !important",
  },
}));

export { useStyles };
