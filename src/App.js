import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Tests from "./components/Tests";
import SingleTest from "./components/SingleTest";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="tests" element={<Tests />} />
            <Route path="tests/:slug" element={<SingleTest />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
