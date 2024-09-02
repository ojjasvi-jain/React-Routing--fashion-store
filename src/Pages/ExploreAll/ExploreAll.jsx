import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../utils/fetchFromApi";

import "./ExploreAll.css";

const ExploreAll = () => {
  let [products, setProducts] = useState([]);
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData(params) {
      let finalData = await fetchData("products");
      setProducts(finalData);
      setLoaded(true);
    }

    getData();
  }, []);

  return (
    <main className="product-main">
      <div className="select-category_container">
        <h4>Category</h4>
        <div className="">
          <span className="category-option">
            <input type="checkbox" id="category-men" name="men" />
            <label htmlFor="category-men">Men</label>
          </span>
          <span className="category-option">
            <input type="checkbox" id="category-women" name="women" />
            <label htmlFor="category-women">Women</label>
          </span>
        </div>
      </div>

      <div className="products-container">
        {!loaded && <p className="loading">Item is Loading....</p>}
        {loaded &&
          products.map((item, index) => (
            <div key={item.id} className="product-card_wrapper">
              <div className="product-card_img">
                <img src={item.image} />
              </div>
              <div className="product-card_description">
                <Link
                  to={`/product/${item.title.split(" ").join("-")}/${item.id}`}
                >
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.description}</p>
                <span className="product-card_bottom">
                  <button className="add-cart_btn">Add to Cart</button>
                  <b className="product-card_price">${item.price}</b>
                </span>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default ExploreAll;
