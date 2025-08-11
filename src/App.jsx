import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import AddJob from "./components/pages/AddJob";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-job" element={<AddJob />} />
      </Route>
    </Routes>
  );
}
