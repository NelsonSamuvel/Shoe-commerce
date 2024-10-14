import products from "../../db/data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section className="px-12 md:px-6">
      <div className="md-container pt-8 px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
