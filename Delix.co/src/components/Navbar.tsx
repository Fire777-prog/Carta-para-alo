import SearchBar from "./SearchBar";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-4xl font-black tracking-tight">
          DELIX
          <span className="text-yellow-500">.</span>
          <span className="text-blue-600">CO</span>
        </h1>

        <SearchBar />

        <button className="flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 font-bold transition hover:bg-yellow-500">
          <ShoppingCart size={20}/>
          <span>0</span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;