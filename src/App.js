import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.componenet";
import Authentication from "./routes/authentication/authentication.componenet";
import Shop from "./routes/shop/shop.componenet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
