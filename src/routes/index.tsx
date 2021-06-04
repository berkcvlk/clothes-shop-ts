import { Products, Favorites, Cart } from "../pages";

export interface IRoute {
  path: string;
  isExact: boolean;
  component?: JSX.Element;
}

const routes: IRoute[] = [
  {
    path: "/favorites",
    isExact: false,
    component: <Favorites />,
  },
  {
    path: "/cart",
    isExact: false,
    component: <Cart />,
  },
  {
    path: "/",
    isExact: true,
    component: <Products />,
  },
];

export default routes;
