import "./styles/index.scss";
import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "shared/config/themeContext";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


export const App = () => {

  const {theme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
      
    </div>
  );
};
