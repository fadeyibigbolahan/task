import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
// Importation of redux config
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
