import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import SharedLayout1 from "./sharedLayouts/SharedLayout1";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout1 />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
