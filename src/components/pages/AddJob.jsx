import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
    notes: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company.trim() || !form.position.trim()) {
      alert("Company và Position không được để trống!");
      return;
    }

    const newJob = {
      id: Date.now(),
      ...form,
      appliedDate: new Date().toISOString().slice(0, 10),
    };

    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    savedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(savedJobs));

    alert("✅ Job đã được lưu!");
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* form inputs giống trước */}
      </form>
    </div>
  );
}
