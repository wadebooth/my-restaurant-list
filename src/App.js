import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Layout } from "antd";
import RestaurantList from "./components/RestaurantList";
import Menubar from "./components/MenuBar";
import RestaurantPage from "./components/RestaurantPage";
import "./App.css";

const { Header, Content } = Layout;

function App() {
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
            <Route path="/add" element={<h1>Add</h1>} />
            <Route path="/" element={<RestaurantList />} />
            <Route path="Login" element={<h1>Login</h1>} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
