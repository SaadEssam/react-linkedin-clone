import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
