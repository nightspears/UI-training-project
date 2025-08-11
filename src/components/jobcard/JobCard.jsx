export default function JobCard({ job, onDelete }) {
  const statusStyle = {
    Applied: "bg-green-100 text-green-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offer: "bg-blue-100 text-blue-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="border rounded p-4 shadow flex flex-col justify-between">
      <div>
        <div className="text-lg font-bold text-gray-700">{job.position}</div>
        <div className="text-gray-500 mb-2">{job.company}</div>
        <span
          className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${
            statusStyle[job.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {job.status}
        </span>
        <div className="text-xs text-gray-400 mt-1">
          Applied: {job.appliedDate}
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button
          onClick={() => onDelete(job.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
