import React from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { ILayoutWrapper } from "./type";

const { Content } = Layout;

export default ({ sider, header, children }: ILayoutWrapper) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {sider ? sider : <SideBar />}
      <Layout>
        {header ? header : <Header />}
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
