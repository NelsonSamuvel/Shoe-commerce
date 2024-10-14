import { HiOutlineUserAdd } from "react-icons/hi";
import {
  HiEllipsisHorizontal,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

const Profile = () => {
  return (
    <>
      <a href="#" className="sm:hidden">
        <HiEllipsisHorizontal className="icons"/>
      </a>
      <div className="sm:flex items-center gap-4 hidden">
        <a href="#">
          <HiOutlineHeart className="icons" />
        </a>
        <a href="#">
          <HiOutlineShoppingCart className="icons" />
        </a>
        <a href="#">
          <HiOutlineUserAdd className="icons" />
        </a>
      </div>
    </>
  );
};

export default Profile;
