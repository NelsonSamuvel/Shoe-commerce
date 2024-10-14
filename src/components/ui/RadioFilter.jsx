import { useState } from "react";

/* eslint-disable react/prop-types */
const RadioFilter = ({ heading, filterData = [] }) => {
  const [checkVal, setCheckVal] = useState(filterData[0].value);

  return (
    <div className="py-4">
      <h3 className="h3 pb-4">{heading}</h3>
      <ul>
        {filterData.map((item) => (
          <li key={item.name} className="mb-2 flex items-center gap-2">
            <input
              type="radio"
              id={item.value}
              name={heading.toLowerCase()}
              value={item.value}
              checked={checkVal === item.value ? true : false}
              onChange={(e) => setCheckVal(e.target.value)}
              className="form-radio checked:bg-orange-700 focus:ring-1 focus:ring-orange-700 focus:text-orange-700 hover:text-orange-700"
            />
            <label htmlFor={item.value} className="cursor-pointer">
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioFilter;
