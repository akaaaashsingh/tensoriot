import "./App.css";
import { SpaceXControllerProvider } from "./Context";
import Router from "./router";

function App() {
  return (
    <SpaceXControllerProvider>
      <Router />
    </SpaceXControllerProvider>
  );
}

export default App;
