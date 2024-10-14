import { categories } from "../../utils/ui-data";
import RadioFilter from "../ui/RadioFilter";

const Category = () => {
  return <RadioFilter heading="Category" filterData={categories} />;
};

export default Category;
