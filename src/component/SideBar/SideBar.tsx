import React from "react";
import { NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;

export default () => {
  const history = useHistory();

  const onItemClick = (menuInfo: MenuInfo) => {
    history.push(menuInfo.key as string);
  };

  return (
    <Sider
      collapsed={false}
      onCollapse={() => {}}
      collapsible
      width={250}
      className="site-layout-background"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["posts"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item
          onClick={onItemClick}
          icon={<NotificationOutlined />}
          key="posts"
        >
          Posts
        </Menu.Item>
        <Menu.Item
          onClick={onItemClick}
          icon={<NotificationOutlined />}
          key="groups"
        >
          Groups
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
