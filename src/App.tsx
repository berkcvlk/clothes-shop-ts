import { Route } from "react-router";
import routes, { IRoute } from "./routes";

import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout>
      {routes.map((e: IRoute, i: number) => (
        <Route key={i} path={e.path} exact={e.isExact}>
          {e.component}
        </Route>
      ))}
    </Layout>
  );
};

export default App;
