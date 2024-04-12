import App from "../App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<GithubUser />}></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
