import { Products, Favorites, Cart } from "../pages";

export interface IRoute {
  id: number;
  path: string;
  isExact: boolean;
  component?: JSX.Element;
}

const routes: IRoute[] = [
  {
    id: 1,
    path: "/favorites",
    isExact: false,
    component: <Favorites />,
  },
  {
    id: 2,
    path: "/cart",
    isExact: false,
    component: <Cart />,
  },
  {
    id: 3,
    path: "/",
    isExact: true,
    component: <Products />,
  },
];

export default routes;
