import { HiShoppingBag, HiStar } from "react-icons/hi";
import { HiOutlineShoppingBag, HiShoppingCart } from "react-icons/hi2";

const ProductItem = ({ product }) => {
  const { title, img, reviews, prevPrice, newPrice } = product;

  return (
    <li className="border p-6 ">
      <div className="">
        <img src={img} alt={title} className="w-[200px] mx-auto" />
      </div>
      <div className="my-4 space-y-2">
        <h2 className="h3">{title}</h2>
        <div className="flex gap-2 items-center">
          <div className="flex">
            <HiStar className="icons text-yellow-500" />
            <HiStar className="icons text-yellow-500" />
            <HiStar className="icons text-yellow-500" />
            <HiStar className="icons text-yellow-500" />
          </div>
          <p>{reviews}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <del className="inline-block">{prevPrice}</del>
            <p className="inline-block ml-2">${newPrice}</p>
          </div>
          <HiOutlineShoppingBag className="icons cursor-pointer"/>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
