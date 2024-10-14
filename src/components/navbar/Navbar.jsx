import { useContext } from "react";
import Input from "./Input";
import Profile from "./Profile";
import { FilterContext } from "../../context/FilterProvider";

const Navbar = () => {
  const { search, handleSearch } = useContext(FilterContext);

  return (
    <header>
      <div className="mx-container">
        <nav className="flex items-center justify-between p-4 gap-2">
          <Input value={search} onChange={handleSearch} />
          <Profile />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
