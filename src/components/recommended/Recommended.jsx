import { useState } from "react";
import { recommended } from "../../utils/ui-data";
import Button from "../ui/Button";

const Recommended = () => {
  const [activeBtn, setActiveBtn] = useState(recommended[0].value);

  return (
    <section>
      <div className="mx-container py-4 px-12">
        <h2 className="h2 mb-4">Recommended</h2>
        <ul className="flex gap-6 items-center">
          {recommended.map((recommend) => (
            <li key={recommend.name}>
              <Button
                type="secondary"
                handleActiveBtn={() => setActiveBtn(recommend.value)}
                isActive={activeBtn === recommend.value}
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
