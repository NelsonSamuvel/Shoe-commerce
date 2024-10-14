import { useContext } from "react";
import ProductItem from "./ProductItem";
import { FilterContext } from "../../context/FilterProvider";

const Products = () => {
  const { filteredProducts } = useContext(FilterContext);

  return (
    <section className="px-12 md:px-6">
      <div className="md-container pt-8 px-4">
      {!filteredProducts.length && <h3 className="h3">No Results Found</h3>}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
