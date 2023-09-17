import React from "react";
import ReactDOMClient from "react-dom/client";
import { DailyScreen } from "./screens/DailyScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DailyScreen />);
