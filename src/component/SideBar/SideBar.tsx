import React, { useState } from "react";
import { NotificationOutlined, SendOutlined } from "@ant-design/icons";
import logo from "../../assets/svgs/tn-icon.svg";
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";
import styles from "./sideBarStyle.module.scss";
import { AppRoutes } from "../../route/type";
import { useTranslation } from "react-i18next";
const { Sider } = Layout;

export default () => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState<boolean>(false);
  const history = useHistory();
  const { t } = useTranslation();

  const onItemClick = (menuInfo: MenuInfo) =>
    history.push(menuInfo.key as string);

  const onCollapse = () => setIsSideBarCollapsed(!isSideBarCollapsed);

  return (
    <Sider
      collapsed={isSideBarCollapsed}
      onCollapse={onCollapse}
      collapsible
      className={styles.sideBar}
    >
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
        {!isSideBarCollapsed && (
          <h1 className={styles.logoHeading}>Trash Nothing</h1>
        )}
      </div>
      <Menu
        defaultActiveFirst={true}
        activeKey={history.location.pathname.replace("/", "")}
        className={styles.menuParent}
      >
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
