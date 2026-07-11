import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

export default SearchBar;