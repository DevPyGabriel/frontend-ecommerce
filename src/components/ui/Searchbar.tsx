import { Icons } from "../Icons";

export const SearchBar = () => {
  return (
    <div className="flex items-center gap-x-2 rounded-md px-3 h-10.5 bg-background0">

      <Icons.Search size={14} />

      <input
        type="search"
        placeholder="Buscar..."
        className="
        placeholder:text-neutral-500 placeholder:tracking-tighter 
        searchbar-icon focus:outline-none
        text-neutral-500 font-rethink font-semibold max-w-48 bg-background0 border-0"
      />
    </div>
  );
};