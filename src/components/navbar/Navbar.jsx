import Input from "./Input";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <header>
      <div className="mx-container">
        <nav className="flex items-center justify-between p-4">
          <Input />
          <Profile />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
