import React from "react";
import { NotificationOutlined, SendOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";
import styles from "./sideBarStyle.module.scss";
import { AppRoutes } from "../../route/type";
import { useTranslation } from "react-i18next";
const { Sider } = Layout;

export default () => {
  const history = useHistory();
  const { t } = useTranslation();

  const onItemClick = (menuInfo: MenuInfo) =>
    history.push(menuInfo.key as string);

  return (
    <Sider collapsed={false} onCollapse={() => {}} collapsible width={250}>
      <Menu className={styles.menuParent}>
        <Menu.Item
          onClick={onItemClick}
          icon={<SendOutlined />}
          key={AppRoutes.POSTS}
        >
          {t("POSTS")}
        </Menu.Item>
        <Menu.Item
          onClick={onItemClick}
          icon={<NotificationOutlined />}
          key={AppRoutes.GROUPS}
        >
          {t("GROUPS")}
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
