import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.meals));
  }, [search]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch}></Header>

      <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content">
              <Products products={products}></Products>
            </div> 

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><a href='/'>Sidebar Item 1</a></li>
                <li><a href='/'>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
