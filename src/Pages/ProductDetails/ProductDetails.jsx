import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchFromApi";
import "./ProductDetails.css";

const ProductDetails = () => {
  const urlData = useParams();
  const [product, setProduct] = useState([]);

  console.log("urlData", urlData);

  useEffect(() => {
    async function getData() {
      let finalData = await fetchData(`products/${urlData.id}`);

      console.log("finalData", finalData);
      setProduct(finalData);
      // setProducts(finalData);
    }

    getData();
  }, []);

  return (
    <>
      {product && (
        <div className="pdetails-container">
          <img className="p-img" src={product?.image} />
          <div className="details-container">
            <h1 className="text p-title">{product?.title}</h1>
            <p className="text p-description">{product?.description}</p>
            <p className="text p-raiting"> Rating :{product?.rating?.rate}</p>
            <button className="btn explore-clothing_btn">Buy Now !</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
