import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "shared/config/themeContext";
import { AppRouter } from "./providers/router";


export const App = () => {

  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>SWITCH THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
