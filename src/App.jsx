import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import SideBar from "./components/sidebar/SideBar";
import FilterProvider from "./context/FilterProvider";

const App = () => {
  return (
    <FilterProvider>
      <section className="grid grid-cols-[150px_1fr] sm:grid-cols-[200px_1fr] grid-rows-[auto_1fr] min-h-screen">
        <SideBar />
        <Navbar />
        <main className="">
          <Recommended />
          <Products />
        </main>
      </section>
    </FilterProvider>
  );
};

export default App;
