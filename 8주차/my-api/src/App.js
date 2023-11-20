import React from "react";
import { Provider } from "react-redux";
import store from "./reducer/store";
import Login from "./components/Login";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>로그인하기</h1>
        <Login />
      </div>
    </Provider>
  );
};

export default App;
