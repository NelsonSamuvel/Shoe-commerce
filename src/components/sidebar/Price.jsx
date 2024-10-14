import { price } from "../../utils/ui-data";
import RadioFilter from "../ui/RadioFilter";

const Price = () => {
  return <RadioFilter heading="Price" filterData={price} />;
};

export default Price;
