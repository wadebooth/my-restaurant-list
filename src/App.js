import RestaurantList from "./components/RestaurantList";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            key="add"
            icon={<PlusCircleOutlined style={{ fontSize: "1.8em" }} />}
          />
          <Menu.Item
            key="random"
            icon={<QuestionCircleOutlined style={{ fontSize: "1.8em" }} />}
          />
          <Menu.Item
            key="user"
            icon={<UserOutlined style={{ fontSize: "1.8em" }} />}
          />
        </Menu>
      </Header>
      <Content>
        <RestaurantList />
      </Content>
    </Layout>
  );
}

export default App;
