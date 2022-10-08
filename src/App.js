import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const handleSearch = (searchText) => {
    setSearch(searchText);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setProducts(data.meals)
      setLoading(false)
    };
    loadData();
  }, [search]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch}></Header>
      <div className={loading ? `flex justify-center mt-10` : "hidden"}>
        <PuffLoader color={"seagreen"} loading={loading}></PuffLoader>
      </div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <Products products={products}></Products>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a href="/">Sidebar Item 1</a>
            </li>
            <li>
              <a href="/">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
