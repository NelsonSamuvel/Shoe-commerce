import { createContext, useState } from "react";
import products from "../db/data";
import {
  categories,
  recommended,
  price as priceData,
  colors as colorsData,
} from "../utils/ui-data";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recommend, setRecommend] = useState(recommended[0].value);
  const [category, setCategory] = useState(categories[0].value);
  const [price, setPrice] = useState(priceData[0].value);
  const [colors, setColors] = useState(colorsData[0].value);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleRecommend(value) {
    setRecommend(value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleColors(e) {
    setColors(e.target.value);
  }

  let filteredProducts = products;

  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  if (recommend !== "all") {
    filteredProducts = filteredProducts.filter(
      ({ company }) => company.toLowerCase() === recommend.toLowerCase()
    );
  }

  if (category !== "category-all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (price !== "price-all") {
    let numPrice = Number(price);
    filteredProducts = filteredProducts.filter(
      (product) =>
        Number(product.newPrice) > numPrice - 50 &&
        Number(product.newPrice) <= numPrice
    );
  }

  if (colors !== "colors-all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.color.toLowerCase() === colors.toLowerCase()
    );
  }

  return (
    <FilterContext.Provider
      value={{
        search,
        handleSearch,
        filteredProducts,
        recommend,
        handleRecommend,
        category,
        handleCategory,
        price,
        handlePrice,
        colors,
        handleColors,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
