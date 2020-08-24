import React from "react";
import { Layout } from "antd";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { ILayoutWrapper } from "./type";
import styles from "./layoutWrapperStyle.module.scss";

const { Content } = Layout;

export default ({ sider, header, children }: ILayoutWrapper) => {
  return (
    <Layout className={styles.layoutHeight}>
      {sider ? sider : <SideBar />}
      <Layout>
        {header ? header : <Header />}
        <Layout>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
