import React, { useState } from "react";
import styles from "./style.module.scss";
import { PostResponse, Post } from "./type";
import PostDetail from "../../component/PostDetail/PostDetail";
import { List } from "../../component/List/List";
import { getPosts } from "./service";

export default () => {
  const [data, setData] = useState<PostResponse>(getPosts());

  const onRenderData = (item: Post) => <PostDetail {...item} />;

  return (
    <div className={styles.container}>
      <List<Post> loading={false} data={data.posts} renderData={onRenderData} />
    </div>
  );
};
