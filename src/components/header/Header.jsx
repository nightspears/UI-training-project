export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">JobTracker</div>
      <nav className="space-x-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
      </nav>
    </header>
  );
}
