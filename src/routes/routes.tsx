import { Routes, Route, Outlet, Link, HashRouter } from "react-router-dom";
import { Home } from "../page/home";
import { SignIn } from "../page/signin";

const AppRoutes = () => {
  return (
    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

/**
 * EXPORTS
 */
export { AppRoutes };
