import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";
export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar onNavigate={handleNavigate} currentPath={location.pathname} />
        <main className="flex-grow bg-white p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
