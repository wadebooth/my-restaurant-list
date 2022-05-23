import { initializeApp } from "firebase/app";
import { Button, Form, Input } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyBMnXR384IkocEx68RLUFQXgc5SNKe0oFE",
  authDomain: "my-first-firestore-wb.firebaseapp.com",
  projectId: "my-first-firestore-wb",
  storageBucket: "my-first-firestore-wb.appspot.com",
  messagingSennpmderId: "9734175216",
  appId: "1:9734175216:web:e7da8f8ccc8b9422a38535",
};

const app = initializeApp(firebaseConfig);

export default function Login() {
  return (
    <section style={{ padding: "2em" }}>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
