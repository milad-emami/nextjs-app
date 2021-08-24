import SEO from "../components/SEO";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Progress } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(20);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingPercent((value) => (value < 90 ? value + 10 : value));
      }, 300);
      return () => clearInterval(interval);
    }
    setLoadingPercent(30);
  }, [loading]);

  return (
    <Layout className="layout">
      <SEO
        title={pageProps?.seo?.title}
        description={pageProps?.seo?.description}
      />
      {loading && (
        <Progress
          style={{ position: "fixed", zIndex: 10, top: -9 }}
          percent={loadingPercent}
          status="success"
          showInfo={false}
        />
      )}
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Component {...pageProps} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default MyApp;
