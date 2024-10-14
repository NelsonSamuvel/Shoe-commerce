import { useContext } from "react";
import { categories } from "../../utils/ui-data";
import RadioFilter from "../ui/RadioFilter";
import { FilterContext } from "../../context/FilterProvider";

const Category = () => {
  const { category, handleCategory } = useContext(FilterContext);
  return (
    <RadioFilter
      heading="Category"
      filterVal={category}
      handleFilter={handleCategory}
      filterData={categories}
    />
  );
};

export default Category;
