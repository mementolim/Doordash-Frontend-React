import { Layout, Typography } from "antd"; // layout component是ant design定义

import { useState } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [authed, setAuthed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
          <Title
            level={3}
            style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
          >
            Doordash+
          </Title>
          {authed && (
            <div>
              <MyCart />
            </div>
          )}
        </div>
      </Header>
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)",
          overflowY: "auto",
          // backgroundColor: "gray"
        }}
      >
        {authed ? (
          <FoodList />
        ) : (
          <LoginForm onSuccess={() => setAuthed(true)} />
        )}
      </Content>
    </Layout>
  );
}

export default App; // default: 用这个App的时候不用加大括号， 直接用 import App from './App';