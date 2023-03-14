import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect, Provider } from "react-redux";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { getUserAuth } from "./redux/actions";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
