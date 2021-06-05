import { Switch, Route, useLocation } from "react-router";
import { Location } from "history";

import routes, { IRoute } from "../../routes";
import Quickview from "../../components/Product/QuickView";

const Routes = () => {
  // Click the "product overlay for quickview"
  // and see the product full screen.
  // Note the URL and the component are the same as before
  // but now we see a modal on top of the productlist.
  const location = useLocation<{ background?: Location<{} | null> }>();

  // This one is set when one of the product-overlay-quickview
  // is clicked. The `background` state is the location that
  // we were at when one of the product-overlay-quickview was clicked
  // If it's there, use it as the location for the <Switch> so
  // we can show the `productlist` or `favoritelist` in the
  // background, behind the modal
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        {routes.map((e: IRoute) => (
          <Route key={e.id} path={e.path} exact={e.isExact}>
            {e.component}
          </Route>
        ))}
      </Switch>

      {background && <Route path="/quickview/:id" children={<Quickview />} />}
    </>
  );
};

export default Routes;
