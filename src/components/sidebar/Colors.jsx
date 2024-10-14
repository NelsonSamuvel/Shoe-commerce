import { useContext } from "react";
import { colors } from "../../utils/ui-data";
import RadioFilter from "../ui/RadioFilter";
import { FilterContext } from "../../context/FilterProvider";

const Colors = () => {
  const { colors: colorsVal, handleColors } = useContext(FilterContext);

  return (
    <RadioFilter
      heading={"Colors"}
      filterVal={colorsVal}
      handleFilter={handleColors}
      filterData={colors}
    />
  );
};

export default Colors;
