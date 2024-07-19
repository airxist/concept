import Home from "./routes/Home";
import Location from "./routes/Location";
import { Routes, Route } from "react-router-dom";
import SharedLayout1 from "./sharedLayouts/SharedLayout1";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout1 />}>
          <Route index element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
