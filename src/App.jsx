import Home from "./routes/Home";
import Location from "./routes/Location";
import { Routes, Route } from "react-router-dom";
import SharedLayout1 from "./sharedLayouts/SharedLayout1";
import About from "./routes/About";
import Awards from "./routes/Awards";
import Contact from "./routes/Contact";
import Members from "./routes/Members";
import News from "./routes/News";
import LocationDescription from "./routes/LocationDescription";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout1 />}>
          <Route index element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/location-description"
            element={<LocationDescription />}
          />
          <Route path="/awards" element={<Awards />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/members" element={<Members />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
