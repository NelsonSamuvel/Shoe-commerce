import { useContext, useState } from "react";
import { recommended } from "../../utils/ui-data";
import Button from "../ui/Button";
import { FilterContext } from "../../context/FilterProvider";

const Recommended = () => {
  const { recommend: activeRecommend, handleRecommend } =
    useContext(FilterContext);

  return (
    <section>
      <div className="mx-container py-4 px-12">
        <h2 className="h2 mb-4">Recommended</h2>
        <ul className="flex gap-6 flex-wrap items-center">
          {recommended.map((recommend) => (
            <li key={recommend.name}>
              <Button
                type="secondary"
                handleActiveBtn={() => handleRecommend(recommend.value)}
                isActive={activeRecommend === recommend.value}
              >
                {recommend.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Recommended;
