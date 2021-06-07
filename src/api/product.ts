import axios from "axios";
import { IProduct } from "../types";

const BASE = `https://${process.env.REACT_APP_MOCKAPI_KEY}.mockapi.io/`;
const end = "products";
// const LOCAL = "/dummy.json";

export const fetchProducts = async () => {
  const res = await axios.get(BASE + end);
  const data: IProduct[] = await res.data;

  return data;
};
