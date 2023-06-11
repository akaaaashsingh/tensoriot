import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  setFilter,
  setFilteredLaunchData,
  setLaunchData,
  useSpaceXController,
} from "../Context";
import CustomPaginationActionsTable from "../Components/CustomPaginationActionTable";
import FilterComponent from "../Components/Filter";
import { filters } from "../utils/constant";
import { handleFilterChange } from "../utils/helper";
import { getLaunches } from "../services/launch.service";
import { useStyles } from "./launch.styles";
import Header from "../Components/Header";

const LaunchPage = () => {
  const [controller, dispatch] = useSpaceXController();
  const navigate = useNavigate();
  const classes = useStyles();
  const { launchData, filterType, filteredLaunchData } = controller;
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    launchData &&
      setFilteredLaunchData(
        dispatch,
        handleFilterChange(filterType, launchData)
      );
  }, [filterType, launchData]);

  useEffect(() => {
    const params = searchParams.get("filterType");
    if (params) {
      const finder = filters.find((filter) => filter?.value === params);
      setFilter(dispatch, finder);
      navigate(`/launches?filterType=${finder?.value}`);
    } else {
      navigate(`/launches?filterType=${filterType?.value}`);
    }
    getLaunches().then((response) => setLaunchData(dispatch, response));
  }, []);

  return (
    <Grid className={classes.mainContainer}>
      <Header />
      <Grid className={classes.filterContainer}>
        <FilterComponent />
      </Grid>
      <CustomPaginationActionsTable rows={filteredLaunchData} />
    </Grid>
  );
};

export default LaunchPage;
