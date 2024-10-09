import useOnline from "../../utils/useOnline.js";
import PizzaList from "./Pizza.js";
import DessertList from "./Dessert.js";

const Home = () => {
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-center text-2xl text-red-600 mt-10">
        OFFLINE, please check your internet connection!!
      </h1>
    );
  }

  return (
    <div className="font-sans  mt-20">
    

    
<section className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-bold mb-4">Welcome to Pizzeria!</h2>
    <p className="text-xl mb-6">Enjoy the finest pizzas made with fresh ingredients and love!</p>
  </div>
</section>


  
      <main className="py-10 px-4">
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">Our Pizzas</h3>
          <PizzaList />
        </section>
        <section>
          <h3 className="text-3xl font-semibold text-center mb-6">Delicious Desserts</h3>
          <DessertList />
        </section>
      </main>

      
      <footer className="bg-gray-800 text-white w-full py-6 mt-10">
        <p className="text-center">&copy; 2024 Pizzeria | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
