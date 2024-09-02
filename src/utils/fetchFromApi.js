const BASEURL = "https://fakestoreapi.com/";

const fetchData = async (path) => {
  let data = await fetch(`${BASEURL}${path}`);
  let dataRes = await data.json();

  return dataRes;
};

export default fetchData;
