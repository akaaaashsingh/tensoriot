import { createContext, useContext, useReducer, useMemo } from "react";

// main context
const SpaceX = createContext();

// custom context name for dev tools
SpaceX.displayName = "SpaceXContext";

function reducer(state, action) {
  switch (action.type) {
    case "LAUNCH_DATA": {
      return { ...state, launchData: action.value };
    }
    case "FILTER": {
      return { ...state, filterType: action.value };
    }
    case "FILTERED_DATA": {
      return { ...state, filteredLaunchData: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// context provider
function SpaceXControllerProvider({ children }) {
  const initialSate = {
    launchData: null,
    filterType: {
      label: "All Launches",
      value: "AllLaunches",
    },
    filteredLaunchData: null,
  };

  const [controller, dispatch] = useReducer(reducer, initialSate);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <SpaceX.Provider value={value}>{children}</SpaceX.Provider>;
}

// custom hook for using context
function useSpaceXController() {
  const context = useContext(SpaceX);

  if (!context) {
    throw new Error(
      "useSpaceXController should be used inside the SpacexControllerProvider"
    );
  }

  return context;
}

const setLaunchData = (dispatch, value) =>
  dispatch({ type: "LAUNCH_DATA", value });

const setFilter = (dispatch, value) => dispatch({ type: "FILTER", value });

const setFilteredLaunchData = (dispatch, value) =>
  dispatch({ type: "FILTERED_DATA", value });

export {
  SpaceXControllerProvider,
  useSpaceXController,
  setLaunchData,
  setFilter,
  setFilteredLaunchData,
};
