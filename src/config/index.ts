import App from "cerebral";
import state from "./state";
import * as sequences from "./sequences";
import * as providers from "./providers";
import DevTools from "cerebral/devtools";

export default App(
  ({ app }) => {
    app.on("initialized", () => {
      app.getSequence("initialize")();
    });

    return {
      state,
      sequences,
      providers,
    };
  },
  {
    devtools: DevTools({
      host: "localhost:8585",
    }),
  }
);
