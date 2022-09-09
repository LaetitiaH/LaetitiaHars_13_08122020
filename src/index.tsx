import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import { Provider } from "react-redux";
import store from "./utils/store";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "./utils/router/protected-route";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            ></Route>
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
