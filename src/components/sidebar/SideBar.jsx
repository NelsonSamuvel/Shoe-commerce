import Category from "./Category";
import Colors from "./Colors";
import Logo from "../ui/Logo";
import Price from "./Price";

const SideBar = () => {
  return (
    <div className="border row-span-3">
      <Logo />
      <div className="py-8  max-w-[100px] mx-auto">
        <Category />
        <Price />
        <Colors />
      </div>
    </div>
  );
};

export default SideBar;
