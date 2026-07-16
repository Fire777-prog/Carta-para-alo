import { Search } from "lucide-react";
import { useStore } from "../context/StoreContext";

function SearchBar() {
const { search, setSearch } = useStore();
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar productos..."
        className="w-full rounded-xl border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

export default SearchBar;