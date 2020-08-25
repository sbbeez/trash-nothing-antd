import React, { useState } from "react";
import { Card } from "antd";
import { Post } from "../../screen/Post/type";
import DescriptionView from "../DescriptionView/DescriptionView";
import PostmageList from "../PostmageList/PostmageList";

export default (props: Post) => {
  const [activeTab, setActiveTab] = useState<string>("desc");

  const contentList: { [key: string]: JSX.Element } = {
    desc: <DescriptionView value={props.content} />,
    image: <PostmageList photos={props.photos || []} />,
    user: <p>User Data will be fetched...</p>,
  };

  const tabList = [
    {
      tab: "Description",
      key: "desc",
    },
    {
      tab: "User Details",
      key: "user",
    },
    {
      tab: `Photos (${props.photos ? props.photos.length : 0})`,
      key: "image",
    },
  ];
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
