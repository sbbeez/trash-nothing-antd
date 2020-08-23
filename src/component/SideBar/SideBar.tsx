import React from "react";
import { NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";
import styles from "./sideBarStyle.module.scss";
const { Sider } = Layout;

export default () => {
  const history = useHistory();

  const onItemClick = (menuInfo: MenuInfo) => {
    history.push(menuInfo.key as string);
  };
  console.log(styles);

  return (
    <Sider collapsed={false} onCollapse={() => {}} collapsible width={250}>
      <Menu mode="inline" className={styles.menuParent}>
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
