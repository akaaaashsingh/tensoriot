import { Grid } from "@mui/material";
import { useStyles } from "./header.styles";

export default function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.logoContainer}>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo.png"
        alt="logo"
        height={100}
        width={200}
      />
    </Grid>
  );
}
