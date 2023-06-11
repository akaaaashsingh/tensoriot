export const getLaunchStatus = (upcoming, launch_success) => {
  if (upcoming && launch_success === null)
    return { label: "Upcoming", color: "warning" };
  else if (launch_success) return { label: "Success", color: "success" };
  else if (!launch_success) return { label: "Failed", color: "error" };
};

export const handleFilterChange = (filterType, launchData) => {
  const arr = [...launchData];
  switch (filterType?.value) {
    case "SuccessfulLaunches": {
      return arr?.filter((item) => !item?.upcoming && item?.launch_success);
    }
    case "FailedLaunches": {
      return arr?.filter((item) => !item?.upcoming && !item?.launch_success);
    }
    case "UpcomingLaunches": {
      return arr?.filter((item) => item?.upcoming);
    }
    default: {
      return arr;
    }
  }
};
