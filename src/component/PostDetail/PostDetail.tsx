import React, { useState } from "react";
import { Card } from "antd";
import { Post } from "../../screen/Post/type";
import DescriptionView from "../DescriptionView/DescriptionView";

const tabList = [
  {
    tab: "Description",
    key: "desc",
  },
  {
    tab: "Photos",
    key: "image",
  },
  {
    tab: "User Details",
    key: "user",
  },
];

export default (props: Post) => {
  const [activeTab, setActiveTab] = useState<string>("desc");

  const contentList: { [key: string]: JSX.Element } = {
    desc: <DescriptionView value={props.content} />,
    image: <p>Display all images</p>,
    user: <p>User Data will be fetched...</p>,
  };

  return (
    <Card
      style={{ width: "100%" }}
      title={props.title}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={(key) => {
        setActiveTab(key);
      }}
    >
      {contentList[activeTab]}
    </Card>
  );
};
