import { useContext } from "react";
import { price } from "../../utils/ui-data";
import RadioFilter from "../ui/RadioFilter";
import { FilterContext } from "../../context/FilterProvider";

const Price = () => {
  const { price: priceVal, handlePrice } = useContext(FilterContext);

  return (
    <RadioFilter
      heading="Price"
      filterVal={priceVal}
      handleFilter={handlePrice}
      filterData={price}
    />
  );
};

export default Price;
