import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Layout } from "antd";
import RestaurantList from "./components/RestaurantList";
import Menubar from "./components/MenuBar";
import RestaurantPage from "./components/RestaurantPage";
import "./App.css";
import Login from "./components/Login";

const { Header, Content } = Layout;

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout className="layout">
          <Header>
            <Menubar user={user} />
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
                element={!user ? <Login /> : <h1>Add Restaurant</h1>}
              />
              <Route path="/" element={<RestaurantList />} />
            </Routes>
          </Content>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
