import { useState, useEffect } from "react";
import JobCard from "../jobcard/JobCard";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  const handleDelete = (id) => {
    const filtered = jobs.filter((job) => job.id !== id);
    setJobs(filtered);
    localStorage.setItem("jobs", JSON.stringify(filtered));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Jobs</h1>
      {jobs.length === 0 ? (
        <p className="text-gray-500">Chưa có công việc nào được thêm.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
