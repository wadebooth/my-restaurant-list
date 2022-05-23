import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyBfNVg55My3l48_vPXthxga11GWYSzng-k",
  authDomain: "my-first-firestore-bc.firebaseapp.com",
  projectId: "my-first-firestore-bc",
  storageBucket: "my-first-firestore-bc.appspot.com",
  messagingSenderId: "856295550753",
  appId: "1:856295550753:web:f79df1de777968086dd860",
};

export default function Login() {
  const { setUser } = useContext(UserContext);
  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig); // conntect to firebase
    const auth = getAuth(app); // connect to firebase/auth
    // login with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app);
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
