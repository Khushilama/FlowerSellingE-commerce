import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/page/HomePage/HomePage";
import AppRoutes from "./Routes";

function App() {
  return (
    <AppRoutes />
  );
}

export default App;
