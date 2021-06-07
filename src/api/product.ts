import { IProduct } from "../types";

const URL = `https://${process.env.REACT_APP_MOCKAPI_KEY}.mockapi.io/`;
const end = "products";

export const fetchProducts = async () => {
  const res = await fetch(URL + end);
  const data: IProduct[] = await res.json();

  return data;
};
