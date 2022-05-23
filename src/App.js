import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Layout } from "antd";
import RestaurantList from "./components/RestaurantList";
import Menubar from "./components/MenuBar";
import RestaurantPage from "./components/RestaurantPage";
import "./App.css";
import Login from "./components/Login";

const { Header, Content } = Layout;

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <Menubar />
        </Header>
        <Content>
          <Routes>
            <Route
              path="/restaurants/:restaurantId"
              element={<RestaurantPage />}
            />
            <Route path="/random" element={<h1>Random</h1>} />
            <Route
              path="/add"
              element={
                !user ? <Login setUser={setUser} /> : <h1>Add Restaurant</h1>
              }
            />
            <Route path="/" element={<RestaurantList />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
