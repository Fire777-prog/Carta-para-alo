import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ProductGrid />
    </>
  );
}

export default Home;