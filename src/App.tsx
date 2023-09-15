import { Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
